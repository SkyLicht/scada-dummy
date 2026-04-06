import { User2, TrendingDown, TrendingUp } from "lucide-react";
import { GaugeChart } from "./GaugeChart";

interface Props {
    // posición del bloque
    x?: number;
    y?: number;
    // textos principales
    lineName: string; // "Line J01"
    model: string; // "YU7HJ"
    // métricas
    fpy: number; // 95
    fpyColor?: string;
    staff: number; // 23
    units: number; // 670
    unitsColor?: string;
    target: number; // 3000
    // gauge
    oee: number;
}

export function LineInfoCard({
    x = 0,
    y = 0,
    lineName,
    model,
    fpy,
    // fpyColor = "#fb2c36",
    staff,
    units,
    // unitsColor: downTimeColor = "#fb2c36",
    target,
    oee,
}: Props) {
    const baseColor = "#A6A6A6";

    const unitColor = oee >= 90 ? "#00b74a" : "#fb2c36";
    // const unitsColor = oee >= 90 ? "#fb2c36" : "#fb2c36";
    // const color = good ? "#00b74a" : "#e7000b";
    // const color_text = good ? "#00b74a" : "#fb2c36";

    return (
        <g transform={`translate(${x}, ${y})`}>
            {/* Line name */}
            <text
                x={7}
                y={20}
                textAnchor="start"
                fontSize={24}
                fontWeight="bold"
                fill={baseColor}
                style={{
                    dominantBaseline: "middle",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                {lineName}
            </text>

            {/* Model */}
            <text
                x={150}
                y={21}
                textAnchor="start"
                fontSize={20}
                fontWeight="bold"
                fill={baseColor}
                style={{
                    dominantBaseline: "middle",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            >
                {model}
            </text>

            {/* FPY */}
            <text
                x={120}
                y={45}
                fontSize={18}
                fontWeight="bold"
                fill={baseColor}
                style={{ dominantBaseline: "middle" }}
            >
                FPY:
            </text>

            <text
                x={160}
                y={45}
                fontSize={18}
                fontWeight="bold"
                fill={unitColor}
                style={{ dominantBaseline: "middle" }}
            >
                {fpy}%
            </text>

            {/* Staff */}
            <g transform="translate(160, 75)">
                <User2 stroke={baseColor} size={32} x={-20} y={-20} />

                <text
                    x={14}
                    fontSize={32}
                    fontWeight="bold"
                    fill={baseColor}
                    style={{ dominantBaseline: "middle" }}
                >
                    {staff}
                </text>
            </g>

            {/* Downtime */}
            <g transform="translate(170, 100)">
                {oee >= 90 ? (
                    <TrendingUp size={22} x={-25} y={-12} stroke={unitColor} />
                ) : (
                    <TrendingDown size={22} x={-25} y={-12} stroke={unitColor} />
                )}
                <text
                    fontSize={18}
                    fontWeight="bold"
                    fill={unitColor}
                    style={{ dominantBaseline: "middle" }}
                >
                    {units}
                </text>
            </g>

            {/* Target */}
            <text
                x={170}
                y={120}
                fontSize={16}
                fontWeight="bold"
                fill={baseColor}
                style={{ dominantBaseline: "middle" }}
            >
                {target}
            </text>

            {/* Gauge */}
            <GaugeChart value={oee} label="OEE" y={12} good={oee >= 90} />
        </g>
    );
}
