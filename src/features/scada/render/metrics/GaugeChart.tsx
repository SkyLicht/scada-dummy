interface Props {
    value: number; // 0 - 100
    good?: boolean;
    width?: number;
    height?: number;
    strokeWidth?: number;
    label?: string;
    x?: number;
    y?: number;
}

export function GaugeChart({
    value,
    width = 150,
    good = false,
    height = 150,
    strokeWidth = 18,
    label = "Progress",
    x = 0,
    y = 0,
}: Props) {
    const color = good ? "#00b74a" : "#e7000b";
    const color_text = good ? "#00b74a" : "#fb2c36";
    const clampedValue = Math.max(0, Math.min(100, value));

    // 🔧 ahora el centro es relativo al componente
    const centerX = width / 2;
    const centerY = height / 2 + 20;
    const radius = Math.min(width / 2 - strokeWidth, height / 2 - strokeWidth);

    const startAngle = -90;
    const endAngle = 90;

    const polarToCartesian = (cx: number, cy: number, r: number, angleInDegrees: number) => {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

        return {
            x: cx + r * Math.cos(angleInRadians),
            y: cy + r * Math.sin(angleInRadians),
        };
    };

    const describeArc = (cx: number, cy: number, r: number, start: number, end: number) => {
        const startPoint = polarToCartesian(cx, cy, r, end);
        const endPoint = polarToCartesian(cx, cy, r, start);
        const largeArcFlag = Math.abs(end - start) <= 180 ? "0" : "1";

        return [
            "M",
            startPoint.x,
            startPoint.y,
            "A",
            r,
            r,
            0,
            largeArcFlag,
            0,
            endPoint.x,
            endPoint.y,
        ].join(" ");
    };

    const progressAngle = startAngle + (clampedValue / 100) * (endAngle - startAngle);

    const backgroundPath = describeArc(centerX, centerY, radius, startAngle, endAngle);

    const progressPath = describeArc(centerX, centerY, radius, startAngle, progressAngle);

    return (
        <g transform={`translate(${x}, ${y})`}>
            {/* fondo */}
            <path
                d={backgroundPath}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {/* progreso */}
            <path
                d={progressPath}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />

            {/* valor */}
            <text
                x={centerX}
                y={centerY - 10}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color_text}
                fontSize={28}
                fontWeight={700}
            >
                {clampedValue}%
            </text>

            {/* label */}
            <text x={centerX} y={centerY + 20} textAnchor="middle" fill="#e5e5e5" fontSize={12}>
                {label}
            </text>
        </g>
    );
}
