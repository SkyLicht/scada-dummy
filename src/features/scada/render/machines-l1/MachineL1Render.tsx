import type { MachineRenderer } from "../../types/machine-render-type";
import { MachineBackPlateRenderer } from "./MachineBackPlate";
import { MachineBufferNGRenderer } from "./MachineBufferNG";
import { MachineConveyorAero } from "./MachineConveyorAero";
import { MachineDefaultRenderer } from "./MachineDefault";
import { MachineFACCRenderer } from "./MachineFACCRenderer";
import { MachineFTGridRenderer } from "./MachineFTGridRenderer";
import { MachineFtCellRenderer } from "./MachineFtRenderer";
import { MachineFuzionRenderer } from "./MachineFuzion";
import { MachineIctCellRenderer } from "./MachineIctRenderer";
import { MachineJUKIRenderer } from "./MachineJUKIRenderer";

import { MachineNPMRenderer } from "./MachineNPMRenerer";
import { MachineRadialRenderer } from "./MachineRadial";
import { MachineSlidingRenderer } from "./MachineSliding";
type MachineStatus = "running" | "idle" | "alarm";

const getRandomMachineStatus = (): MachineStatus => {
    const value = Math.random() * 100;

    if (value < 2) return "alarm"; // 2%
    if (value < 14) return "idle"; // 8%
    return "running"; // 90%
};
interface Props {
    machine: MachineRenderer;
}
export const MachineLevel1Render = ({ machine }: Props) => {
    const state = getRandomMachineStatus();
    if (machine.type === "loader_machine") {
        return (
            <MachineDefaultRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }
    if (machine.type === "npm_machine") {
        return (
            <MachineNPMRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }
    //MachineBufferNGRenderer
    if (machine.type === "buffer_machine") {
        return (
            <MachineBufferNGRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }
    //MachineFuzionRenderer
    if (machine.type === "fuzion_machine") {
        return (
            <MachineFuzionRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "sliding_machine") {
        return (
            <MachineSlidingRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "radial_machine") {
        return (
            <MachineRadialRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }
    if (machine.type === "juki_machine") {
        return (
            <MachineJUKIRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "facc_machine") {
        return (
            <MachineFACCRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "conveyor_aero_machine") {
        return (
            <MachineConveyorAero
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "ict_auto_machine") {
        return (
            <MachineIctCellRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "ft_cell_machine") {
        return (
            <MachineFtCellRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    if (machine.type === "install_pb_machine") {
        return (
            <MachineBackPlateRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }
    //MachineFTGridRenderer
    if (machine.type === "ft_grid_machine") {
        return (
            <MachineFTGridRenderer
                state={state}
                machine={{
                    id: machine.id,
                    label: machine.label,
                    dimensions: {
                        width: machine.dimensions.width,
                        height: machine.dimensions.height,
                        x: machine.dimensions.x,
                        y: machine.dimensions.y,
                    },
                    type: machine.type,
                    direction: machine.direction,
                }}
            />
        );
    }

    return (
        <MachineDefaultRenderer
            state={state}
            machine={{
                id: machine.id,
                label: machine.label,
                dimensions: {
                    width: machine.dimensions.width,
                    height: machine.dimensions.height,
                    x: machine.dimensions.x,
                    y: machine.dimensions.y,
                },
                type: machine.type,
                direction: machine.direction,
            }}
        />
    );
};
