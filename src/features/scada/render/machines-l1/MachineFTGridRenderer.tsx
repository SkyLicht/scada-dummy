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

export function MachineFTGridRenderer({ machine, state }: Props) {
    const machineColor = getColor(state);
    const transportColor = "var(--translate-default-color)";
    const pcbColor = "var(--pcb-default-color)";

    const { x, y, width, height } = machine.dimensions;

    const angle = Number(machine.direction);
    const rotationTransform =
        angle === 0 ? undefined : `rotate(${angle} ${width / 2} ${height / 2})`;

    const totalCells = 30;
    const cellsPerRow = Math.ceil(totalCells / 2);
    const padding = 3;
    const middleRectHeight = 14;
    const cellGap = 12;
    const cellRectWidth = 16;
    const cellRectHeight = 12;

    const availableHeightPerRow = (height - middleRectHeight - cellGap * 2) / 2;
    const cellHeight = Math.max(0, availableHeightPerRow - padding);

    const middleRectY = height / 2 - middleRectHeight / 2;
    const topRowY = middleRectY - cellGap - cellHeight - cellRectHeight;
    const bottomRowY = middleRectY + middleRectHeight + cellGap;
    const cellStep = cellRectWidth + padding;

    const renderRow = (rowKey: "top" | "bottom", rowY: number, count: number) =>
        Array.from({ length: count }, (_, index) => {
            const cellX = padding + index * cellStep;

            return (
                <rect
                    key={`${rowKey}-${index}`}
                    width={cellRectWidth}
                    height={cellRectHeight}
                    x={cellX}
                    y={rowY}
                    fill={machineColor}
                />
            );
        });

    return (
        <g transform={`translate(${x}, ${y})`}>
            <g transform={rotationTransform}>
                {renderRow("top", topRowY, cellsPerRow)}

                <rect
                    width={width}
                    height={middleRectHeight}
                    x={0}
                    y={middleRectY}
                    fill={transportColor}
                />

                <rect
                    width={10}
                    height={6}
                    y={17}
                    fill={pcbColor}
                    stroke={"#1C4A06"}
                    strokeWidth={1}
                >
                    <animate
                        attributeName="x"
                        from={`2`}
                        to={`${width - 14}`}
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </rect>

                <rect
                    width={10}
                    height={6}
                    y={17}
                    x={10}
                    fill={pcbColor}
                    stroke={"#1C4A06"}
                    strokeWidth={1}
                >
                    <animate
                        attributeName="x"
                        from={`20`}
                        to={`${width - 14}`}
                        dur="18s"
                        repeatCount="indefinite"
                    />
                </rect>

                {renderRow("bottom", bottomRowY, totalCells - cellsPerRow)}
            </g>
        </g>
    );
}

