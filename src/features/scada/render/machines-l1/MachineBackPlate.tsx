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

export function MachineBackPlateRenderer({ machine, state }: Props) {
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
                <rect width={15} height={20} x={5} fill={color} />

                <rect width={15} height={20} x={5} y={height - 20} fill={color} />

                <rect width={width} height={15} y={height / 2 - 7.5} fill={color} />
            </g>
        </g>
    );
}

