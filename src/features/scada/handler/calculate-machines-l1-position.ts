import type { FactoryLine, Machine } from "../types/layout-factory-type";
import type { MachineRenderer } from "../types/machine-render-type";

export const machineRenderer = (data: FactoryLine): MachineRenderer[] => {
    const _m: MachineRenderer[] = [];
    const x_default = 30;
    const y_default = 160;
    let x_position = x_default;
    let y_position = y_default;
    const padding = 4;

    data.groups.forEach((g) => {
        //

        g.machines.forEach((m) => {
            const _nm = getMachine(m);

            if (_nm.direction == "90") {
                _nm.dimensions.x = x_position - _nm.dimensions.width / 2;
                _nm.dimensions.y = y_position + (_nm.dimensions.width - _nm.dimensions.height) / 2;
                y_position += _nm.dimensions.width + padding;
            }
            if (_nm.direction == "0") {
                _nm.dimensions.x = x_position;
                _nm.dimensions.y = y_position;
                y_position += _nm.dimensions.height + padding;
            }

            // y_position += _nm.dimensions.height;

            _m.push(_nm);
        });

        if (g.label === "BOT") {
            x_position += 60;
        } else {
            x_position += 80;
        }

        y_position = y_default;
    });

    return _m;
};

const machines = {
    loader_machine: { w: 15, h: 40 },
    gkg_machine: { w: 32, h: 30 },
    spi_machine: { w: 25, h: 30 },
    buffer_machine: { w: 25, h: 20 },
    npm_machine: { w: 30, h: 30 },
    fuzion_machine: { w: 25, h: 30 },
    aoi_machine: { w: 20, h: 25 },
    insert_machine: { w: 25, h: 30 },
    remove_machine: { w: 25, h: 30 },
    reflow_machine: { w: 70, h: 30 },
    sorted_buffer_machine: { w: 15, h: 20 },
    conveyor: { w: 15, h: 15 },
    sliding_machine: { w: 30, h: 20 },
    rotator_machine: { w: 20, h: 20 },
    radial_machine: { w: 30, h: 40 },
    juki_machine: { w: 35, h: 40 },
    facc_machine: { w: 15, h: 40 },
    conveyor_aero_machine: { w: 15, h: 30 },
    flux_machine: { w: 15, h: 20 },
    wave_machine: { w: 60, h: 25 },
    carrier_machine: { w: 40, h: 30 },
    ict_auto_machine: { w: 60, h: 40 },
    ict_grid_machine: { w: 60, h: 40 },
    insert_battery_machine: { w: 15, h: 30 },
    install_hs_machine: { w: 20, h: 30 },
    ft_cell_machine: { w: 120, h: 40 },
    ft_grid_machine: { w: 310, h: 40 },
    install_pb_machine: { w: 20, h: 30 },
    cpu_assembly_machine: { w: 20, h: 20 },
    axxon_machine: { w: 20, h: 20 },
    router_machine: { w: 30, h: 20 },
} as const;

type MachineType = keyof typeof machines;

const getMachine = (machine: Machine): MachineRenderer => {
    const { id, label, render } = machine;

    const config = machines[render.type as MachineType];

    if (!config) {
        throw new Error(`Unknown machine type: ${render.type}`);
    }

    return {
        id,
        label,
        type: render.type,
        direction: render.direction,
        dimensions: {
            x: 0,
            y: 0,
            width: config.w,
            height: config.h,
        },
    };
};
