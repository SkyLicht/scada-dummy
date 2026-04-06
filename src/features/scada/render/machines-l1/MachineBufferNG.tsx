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

export function MachineBufferNGRenderer({ machine, state }: Props) {
    const color = getColor(state);
    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);
    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <g transform={rotationTransform}>
                <rect
                    width={width / 2 + 10}
                    x={0}
                    y={height / 2 - 2}
                    height={height / 2}
                    fill={color}
                />

                <line
                    x1={0}
                    y1={height / 5}
                    x2={width / 2 + 10}
                    y2={height / 5}
                    stroke={color}
                    strokeWidth={2}
                />

                <rect width={width / 2} height={height} x={width / 2} fill={color} />
            </g>
        </g>
    );
}

