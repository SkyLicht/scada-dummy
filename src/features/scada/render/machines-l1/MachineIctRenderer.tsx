import type { MachineRenderer } from "../../types/machine-render-type";

interface Props {
    state: "running" | "idle" | "alarm";
    machine: MachineRenderer;
}

const getColor = (state: Props["state"]) => {
    switch (state) {
        case "alarm":
            return "var(--machine-alarm-color)";
        case "running":
            return "var(--machine-running-color)";
        case "idle":
            return "var(--machine-idle-color)";
        default:
            return "var(--machine-unknown-color)";
    }
};

type RobotArmProps = {
    armX: number;
    armY: number;
    armW: number;
    armH: number;
    baseSize: number;
    start: number;
    end: number;
    duration: string;
    baseColor: string;
    armColor: string;
};

function renderRobotArm({
    armX,
    armY,
    armW,
    armH,
    baseSize,
    start,
    end,
    duration,
    baseColor,
    armColor,
}: RobotArmProps) {
    const pivotX = armX + armW / 2;
    const pivotY = armY + armH;

    const baseX = pivotX - baseSize / 2;
    const baseY = pivotY - baseSize / 2;

    return (
        <>
            <rect width={baseSize} height={baseSize} x={baseX} y={baseY} fill={baseColor} />

            <circle cx={pivotX} cy={pivotY} r={2.5} fill="black" />

            <rect width={armW} height={armH} x={armX} y={armY} fill={armColor}>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values={`
                        ${start} ${pivotX} ${pivotY};
                        ${end} ${pivotX} ${pivotY};
                        ${start} ${pivotX} ${pivotY}
                    `}
                    dur={duration}
                    repeatCount="indefinite"
                />
            </rect>
        </>
    );
}

export function MachineIctCellRenderer({ machine, state }: Props) {
    const color = getColor(state);
    const transport = "var(--translate-default-color)";
    const pcb = "var(--pcb-default-color)";
    const caseColor = "var(--cage-default-color)";
    const robotColor = "var(--robot-default-color)";
    const robotBaseColor = "var(--robot-base-default-color)";

    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);

    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x - 10}, ${y})`}>
            <g transform={rotationTransform}>
                <rect width={20} height={15} x={width - 25} y={height - 4} fill={color} />

                <rect width={20} height={15} x={5} y={height - 4} fill={color} />

                <rect width={width - 6} height={12} fill={transport} x={3} y={height / 2 - 16} />

                <rect
                    width={width}
                    height={height * 1.5}
                    y={-4}
                    stroke={caseColor}
                    strokeWidth={1}
                    fill="transparent"
                />

                <rect width={10} height={6} y={7} fill={pcb} stroke={"#1C4A06"} strokeWidth={1}>
                    <animate
                        attributeName="x"
                        from={`2`}
                        to={`${width - 14}`}
                        dur="7s"
                        repeatCount="indefinite"
                    />
                </rect>
                {renderRobotArm({
                    armX: width - 16,
                    armY: height - 30,
                    armW: 4,
                    armH: 15,
                    baseSize: 12,
                    start: -180,
                    end: 0,
                    duration: "10s",
                    baseColor: robotBaseColor,
                    armColor: robotColor,
                })}

                {renderRobotArm({
                    armX: 16,
                    armY: height - 30,
                    armW: 4,
                    armH: 15,
                    baseSize: 12,
                    start: -180,
                    end: 0,
                    duration: "12s",
                    baseColor: robotBaseColor,
                    armColor: robotColor,
                })}
            </g>
        </g>
    );
}

