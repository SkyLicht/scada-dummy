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

export function MachineFACCRenderer({ machine, state }: Props) {
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
                    height={machine.dimensions.height * 0.8}
                    fill={color}
                />

                <rect
                    width={machine.dimensions.width}
                    height={machine.dimensions.height * 0.4}
                    y={machine.dimensions.height - 5}
                    fill={color}
                />
            </g>
        </g>
    );
}

