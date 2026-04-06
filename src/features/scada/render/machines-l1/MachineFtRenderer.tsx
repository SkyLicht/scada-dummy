import { renderRobotArm } from "../../components/RobotArm";
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

export function MachineFtCellRenderer({ machine, state }: Props) {
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
        <g transform={`translate(${x}, ${y})`}>
            <g transform={rotationTransform}>
                <rect width={width} height={12} y={height} fill={transport} />

                <rect
                    width={10}
                    height={6}
                    y={height + 3}
                    fill={pcb}
                    stroke={"#1C4A06"}
                    strokeWidth={1}
                >
                    <animate
                        attributeName="x"
                        from={`2`}
                        to={`${width - 14}`}
                        dur="7s"
                        repeatCount="indefinite"
                    />
                </rect>

                <rect
                    width={width / 2.4}
                    height={height + 12}
                    y={-15}
                    stroke={caseColor}
                    strokeWidth={1}
                    fill="transparent"
                />

                <rect
                    width={width / 2.4}
                    height={height + 12}
                    y={-15}
                    x={width - width / 2.4}
                    stroke={caseColor}
                    strokeWidth={1}
                    fill="transparent"
                />

                <rect width={15} height={20} x={2} y={14} fill={color} />
                <rect width={15} height={20} x={2} y={-11} fill={color} />

                <rect width={15} height={20} x={32} y={14} fill={color} />
                <rect width={15} height={20} x={32} y={-11} fill={color} />

                {renderRobotArm({
                    armX: width / 2.4 / 2 - 2,
                    armY: -6,
                    armW: 4,
                    armH: 18,
                    baseSize: 12,
                    start: -300,
                    end: -45,
                    duration: "10s",
                    baseColor: robotBaseColor,
                    armColor: robotColor,
                })}

                <rect width={15} height={20} x={width - width / 2.4 + 2} y={14} fill={color} />
                <rect width={15} height={20} x={width - width / 2.4 + 2} y={-11} fill={color} />

                <rect width={15} height={20} x={width - width / 2.4 + 32} y={14} fill={color} />
                <rect width={15} height={20} x={width - width / 2.4 + 32} y={-11} fill={color} />

                {renderRobotArm({
                    armX: width - width / 2.4 + width / 2.4 / 2 - 2,
                    armY: -6,
                    armW: 4,
                    armH: 18,
                    baseSize: 12,
                    start: -300,
                    end: -45,
                    duration: "8s",
                    baseColor: robotBaseColor,
                    armColor: robotColor,
                })}
            </g>
        </g>
    );
}

