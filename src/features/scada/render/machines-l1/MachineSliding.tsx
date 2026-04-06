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

export function MachineSlidingRenderer({ machine, state }: Props) {
    // const color = `var(--machine-default-color)`;
    const color = getColor(state);
    const transport = "var(--translate-default-color)";
    const pcb = "var(--pcb-default-color";
    const { x, y, width, height } = machine.dimensions;
    const angle = Number(machine.direction);

    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <g transform={rotationTransform}>
                {/* línea inferior */}
                <rect
                    width={width - 16}
                    height={2}
                    x={width / 2}
                    y={height - 4}
                    stroke={transport}
                    strokeWidth={2}
                >
                    <animate
                        attributeName="x"
                        values={`
                            ${width - 16};
                            2;
                            ${width - 16}
                        `}
                        dur="7s"
                        // begin={randomDelay}
                        repeatCount="indefinite"
                    />
                </rect>

                {/* línea superior */}
                <rect
                    width={width - 16}
                    height={2}
                    x={width / 2}
                    y={2}
                    stroke={transport}
                    strokeWidth={2}
                >
                    <animate
                        attributeName="x"
                        values={`
                            ${width - 16};
                            2;
                            ${width - 16}
                        `}
                        dur="7s"
                        // begin={randomDelay}
                        repeatCount="indefinite"
                    />
                </rect>

                {/* bloque */}
                <rect width={8} height={8} x={width / 2 + 6} y={6} fill={pcb}>
                    <animate
                        attributeName="x"
                        from={0}
                        to={width / 2 + 6}
                        dur="7s"
                        // begin={randomDelay}
                        repeatCount="indefinite"
                    />
                </rect>

                {/* cuerpo máquina */}
                <rect width={width / 2} height={height} fill={color} />
            </g>
        </g>
    );
}
