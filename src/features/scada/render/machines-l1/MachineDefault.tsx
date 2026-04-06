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

export function MachineDefaultRenderer({ machine, state }: Props) {
    // const color = "var(--machine-default-color)";
    const color = getColor(state);

    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);
    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect
                width={width}
                height={height}
                fill={"transparent"}
                stroke="white"
                strokeWidth={0}
            />

            <g transform={rotationTransform}>
                <rect width={width} height={height} fill={color} />
            </g>
        </g>
    );
}

