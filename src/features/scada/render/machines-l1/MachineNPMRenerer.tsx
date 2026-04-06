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

export function MachineNPMRenderer({ machine, state }: Props) {
    const color = getColor(state);
    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);
    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x}, ${y})`} id={machine.id}>
            <g transform={rotationTransform}>
                <rect width={width} height={height} fill={color} />

                <rect
                    width={width / 3}
                    height={height / 2 - height / 10}
                    y={-(height / 10) * 2}
                    x={width / 10}
                    fill={color}
                />

                <rect
                    width={width / 3}
                    height={height / 2 - height / 10}
                    y={-(height / 10) * 2}
                    x={width - width / 3 - height / 10}
                    fill={color}
                />

                <rect
                    width={width / 3}
                    height={height / 2 - height / 10}
                    y={height / 2 + (height / 10) * 3}
                    x={width - width / 3 - height / 10}
                    fill={color}
                />

                <rect
                    width={width / 3}
                    height={height / 2 - height / 10}
                    y={height / 2 + (height / 10) * 3}
                    x={width / 10}
                    fill={color}
                />
            </g>
        </g>
    );
}

