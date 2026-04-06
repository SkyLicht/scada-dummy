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

export function MachineJUKIRenderer({ machine, state }: Props) {
    const color = getColor(state);
    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);
    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <g transform={rotationTransform}>
                <rect
                    width={machine.dimensions.width}
                    height={machine.dimensions.height / 2}
                    y={machine.dimensions.height / 4}
                    fill={color}
                />

                <circle
                    cx={machine.dimensions.width / 4}
                    cy={machine.dimensions.height * 0.05}
                    r={machine.dimensions.width / 6}
                    fill={color}
                />

                <circle
                    cx={(machine.dimensions.width * 3) / 4}
                    cy={machine.dimensions.height * 0.05}
                    r={machine.dimensions.width / 6}
                    fill={color}
                />

                <circle
                    cx={machine.dimensions.width / 4}
                    cy={machine.dimensions.height * 0.95}
                    r={machine.dimensions.width / 6}
                    fill={color}
                />

                <circle
                    cx={(machine.dimensions.width * 3) / 4}
                    cy={machine.dimensions.height * 0.95}
                    r={machine.dimensions.width / 6}
                    fill={color}
                />
            </g>
        </g>
    );
}

