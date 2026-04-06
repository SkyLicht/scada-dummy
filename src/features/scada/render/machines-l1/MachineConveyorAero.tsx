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

export function MachineConveyorAero({ machine, state }: Props) {
    const color = getColor(state);
    const transport = "var(--translate-default-color)";

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
                <rect width={width} height={height * 1.4} x={0} y={0} fill={color} />

                <rect
                    width={width * 9}
                    height={width / 1.5}
                    x={0}
                    y={height * 1.3}
                    fill={transport}
                />
                <rect
                    width={width}
                    height={height / 2 + 4}
                    x={width * 8}
                    y={height - 4}
                    fill={transport}
                />

                {/* banda / conveyor */}
                <rect
                    width={width * 9}
                    height={width / 1.5}
                    x={0}
                    y={height * 1.3}
                    fill={transport}
                />

                {/* pieza que se mueve */}
                {/* pieza en movimiento */}
                {/*<rect
                    width={10}
                    height={6}
                    x={width * 8 - 40}
                    y={height * 1.3 + width / 1.5 / 2 - 3}
                    fill="dark"
                >
                    <animate
                        attributeName="x"
                        from={`${width * 8 - 10}`}
                        to="2"
                        dur="7s"
                        repeatCount="indefinite"
                    />
                </rect>*/}

                <rect
                    width={10}
                    height={6}
                    x={width * 9 - 15}
                    y={height * 1.3 + width / 1.5 / 2 - 3}
                    fill="dark"
                >
                    <animate
                        attributeName="x"
                        from={`${width * 9 - 15}`}
                        to="4"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </rect>
            </g>
        </g>
    );
}

