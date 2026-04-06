type Status = {
    label: string;
    value: number;
};

type StatusNormalized = {
    key: string;
    label: string;
    value: number;
    color: string;
};

interface Props {
    statuses: Status[];
    title?: string;
    centerLabel?: string;
    size?: number;
    strokeWidth?: number;
}
//#1c398e
const STATUS_CONFIG: Omit<StatusNormalized, "value">[] = [
    { key: "running", label: "Running", color: "#00c951" },
    { key: "idle", label: "Idle", color: "#ffba00" },
    { key: "standby", label: "Standby", color: "#2b7fff" },
    { key: "fault", label: "Faild", color: "#ff6467" },
];

function normalizeStatuses(input: Status[]): StatusNormalized[] {
    const map = new Map(input.map((s) => [s.label, s.value]));

    return STATUS_CONFIG.map((config) => ({
        ...config,
        value: map.get(config.label) ?? 0,
    }));
}

export function DonutStatusSvg({
    statuses,
    size = 120,
    strokeWidth = 14,
    centerLabel = "Total",
}: {
    statuses: StatusNormalized[];
    size?: number;
    strokeWidth?: number;
    centerLabel?: string;
}) {
    const total = statuses.reduce((sum, s) => sum + s.value, 0);

    const center = size / 2;
    const radius = (size - strokeWidth) / 2;

    const startAngle = -90;
    const totalAngle = 360;
    const gapAngle = 0.8;

    const polar = (angle: number) => {
        const rad = (angle * Math.PI) / 180;
        return {
            x: center + radius * Math.cos(rad),
            y: center + radius * Math.sin(rad),
        };
    };

    const arc = (start: number, end: number) => {
        const s = polar(start);
        const e = polar(end);
        const large = end - start > 180 ? 1 : 0;

        return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
    };

    let acc = 0;

    const segments = statuses.map((s) => {
        const ratio = total === 0 ? 0 : s.value / total;

        const start = startAngle + acc * totalAngle;
        const end = start + Math.max(0, ratio * totalAngle - gapAngle);

        acc += ratio;

        return { ...s, path: arc(start, end) };
    });

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle
                cx={center}
                cy={center}
                r={radius}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={strokeWidth}
                fill="none"
            />

            {segments.map((s) => (
                <path
                    key={s.key}
                    d={s.path}
                    stroke={s.color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="butt"
                />
            ))}

            <text x={center} y={center - 6} textAnchor="middle" fontSize={11} fill="#e5e5e5">
                {centerLabel}
            </text>

            <text
                x={center}
                y={center + 14}
                textAnchor="middle"
                fontSize={18}
                fontWeight="bold"
                fill="#e5e5e5"
            >
                {total}
            </text>
        </svg>
    );
}

export function EstadisticasEstadoMaquinas({
    statuses,
    title = "Machine status",
    centerLabel = "Total",
    size = 90,
    strokeWidth = 14,
}: Props) {
    const normalized = normalizeStatuses(statuses);

    return (
        <div className="w-fit  flex flex-row gap-4 items-center">
            <DonutStatusSvg
                statuses={normalized}
                size={size}
                strokeWidth={strokeWidth}
                centerLabel={centerLabel}
            />

            <div className="w-[210px] flex flex-col  ">
                <h3 className=" font-semibold text-neutral-200 uppercase ">{title}</h3>

                <div className="  grid grid-cols-2 gap-1 ">
                    {normalized.map((s) => (
                        <div
                            key={s.key}
                            className="  flex justify-between gap-3   text-sm font-semibold"
                            style={{ color: s.color }}
                        >
                            <span className="flex items-center gap-2">
                                {/*<span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: s.color }}
                                />*/}
                                {s.label}
                            </span>

                            <span className="tabular-nums text-neutral-200 font-semibold text-xl">
                                {s.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
