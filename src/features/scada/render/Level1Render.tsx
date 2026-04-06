import { useRef } from "react";
import { getLineJ01, getLineJ02, getLineJ03 } from "../services/mock-data-lines";
import { machineRenderer } from "../handler/calculate-machines-l1-position";
import { MachineLevel1Render } from "./machines-l1/MachineL1Render";

import { LineInfoCard } from "./metrics/LineInfoCard";

const Level1Render = () => {
    const factory = machineRenderer(getLineJ01());
    const factory_j02 = machineRenderer(getLineJ02());
    const factory_j03 = machineRenderer(getLineJ03());

    const svgRef = useRef<SVGSVGElement | null>(null);

    const gRef = useRef<SVGGElement | null>(null);

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 1980 600`}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMin meet"
            className="bg-transparent"
        >
            <g ref={gRef} key={"cd03a32f-9c7a-4d3d-ad84-aff64e4d5460"}>
                {/*Lines*/}
                <g key={`factory-level-1-render`} transform={`translate(${0}, ${0})`}>
                    <g transform="translate(0, 0) scale(1)">
                        {/*<rect
                            key={`factory-line-render-rect-j01}`}
                            x={0}
                            y={0}
                            width={220}
                            height={900}
                            fill={"transparent"}
                            stroke={"#A6A6A6"}
                            strokeWidth={1}
                        ></rect>*/}

                        <LineInfoCard
                            units={782}
                            fpy={94.5}
                            lineName="J01"
                            model=""
                            oee={45}
                            staff={23}
                            target={1677}
                        />

                        {factory.map((machine) => {
                            return <MachineLevel1Render key={machine.id} machine={machine} />;
                        })}
                    </g>

                    <g transform="translate(220, 0) scale(1)">
                        {/*<rect
                            key={`factory-line-render-rect-j02`}
                            x={0}
                            y={0}
                            width={220}
                            height={900}
                            rx={0}
                            fill={"transparent"}
                            stroke={"#A6A6A6"}
                            strokeWidth={2}
                        ></rect>*/}

                        <LineInfoCard
                            units={2441}
                            fpy={92.3}
                            lineName="J02"
                            model=""
                            oee={88}
                            staff={23}
                            target={3000}
                        />
                        {factory_j02.map((machine) => {
                            return <MachineLevel1Render key={machine.id} machine={machine} />;
                        })}
                    </g>

                    <g transform="translate(440, 0) scale(1)">
                        {/*<rect
                            key={`factory-line-render-rect-j02`}
                            x={0}
                            y={0}
                            width={220}
                            height={900}
                            rx={0}
                            fill={"transparent"}
                            stroke={"#A6A6A6"}
                            strokeWidth={2}
                        ></rect>*/}

                        <LineInfoCard
                            units={2441}
                            fpy={98.3}
                            lineName="J03"
                            model=""
                            oee={90}
                            staff={34}
                            target={4320}
                        />
                        {factory_j03.map((machine) => {
                            return <MachineLevel1Render key={machine.id} machine={machine} />;
                        })}
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default Level1Render;
