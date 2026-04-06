import type { FactoryLine } from "../types/layout-factory-type";

export const getLineJ01 = (): FactoryLine => {
    return {
        id: "00c3754b-8720-4af0-bbf4-a1ba72f2ec44",
        label: "J01",
        render: {
            type: "",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        groups: [
            {
                id: "2ec96495-ed1b-4674-9a2e-939c1d974612",
                index: 0,
                label: "BOT",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "loader_j01",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "loader_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor_j01",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "gkg_bot_j01",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_bot_j01",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer1_j01",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm1_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm2_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "sliding_bot_j01",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_bot_j01",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_bot_j01",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi1_bot_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer2_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "insert_bot_j01",
                        label: "Insert Pallet",
                        owner: "automation",
                        render: {
                            type: "insert_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "reflow_bot_j01",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer3_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi2_bot_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer4_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor8_j01",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec96495-ed1b-4674-9a2e-939c1d974614",
                index: 0,
                label: "TOP",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "rotator_top_j01",
                        label: "Rotator",
                        owner: "automation",
                        render: {
                            type: "rotator_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "gkg_top_j01",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_top_j01",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer5_j01",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm1_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm2_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm3_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm4_j01",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "sliding_top_j01",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_top_j01",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_top_j01",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi3_top_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer6_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "insert_top_j01",
                        label: "Insert Pallet",
                        owner: "automation",
                        render: {
                            type: "insert_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "reflow_top_j01",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "remove_top_j01",
                        label: "Remove Pallet",
                        owner: "automation",
                        render: {
                            type: "remove_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer7_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi4_top_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer8_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec96495-ed1b-4674-9a2e-939c1d974664",
                index: 0,
                label: "PTH",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "radial_j01",
                        label: "Radial",
                        owner: "ee",
                        render: {
                            type: "radial_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_dim_j01",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "sliding_pth_j01",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "juki1_j01",
                        label: "JKUI",
                        owner: "ee",
                        render: {
                            type: "juki_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "facc1_j01",
                        label: "FACC",
                        owner: "ee",
                        render: {
                            type: "facc_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "facc2_j01",
                        label: "FACC",
                        owner: "ee",
                        render: {
                            type: "facc_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "conveyor_aero_j01",
                        label: "Conveyor Aero",
                        owner: "automation",
                        render: {
                            type: "conveyor_aero_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "flux_j01",
                        label: "Fluxer",
                        owner: "mm",
                        render: {
                            type: "flux_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "wave_j01",
                        label: "Wave Soldier",
                        owner: "automation",
                        render: {
                            type: "wave_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "carrier_j01",
                        label: "Carrier",
                        owner: "automation",
                        render: {
                            type: "carrier_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi5_pth_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "ng_buffer9_j01",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "ict_auto_j01",
                        label: "ICT Auto",
                        owner: "test",
                        render: {
                            type: "ict_auto_machine",
                            direction: "90",
                        },
                    },
                    // {
                    //     id: "ng_buffer10_j01",
                    //     label: "Buffer NG",
                    //     owner: "automation",
                    //     render: {
                    //         type: "buffer_machine",
                    //         direction: "90",
                    //     },
                    // },

                    {
                        id: "insert_battery_j01",
                        label: "Insert Battery",
                        owner: "automation",
                        render: {
                            type: "insert_battery_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "install_hs_j01",
                        label: "Install H/S",
                        owner: "automation",
                        render: {
                            type: "install_hs_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ft_cell_j01",
                        label: "FT Cell",
                        owner: "test",
                        render: {
                            type: "ft_cell_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "install_bp_j01",
                        label: "Install Socket",
                        owner: "automation",
                        render: {
                            type: "install_pb_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "aoi6_pth_j01",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "cpu_assembly_j01",
                        label: "Cpu Assembly",
                        owner: "automation",
                        render: {
                            type: "cpu_assembly_machine",
                            direction: "90",
                        },
                    },
                ],
            },
        ],
    };
};

export const getLineJ02 = (): FactoryLine => {
    return {
        id: "00c3754b-8720-4af0-bbf4-a1ba72f6ec34",
        label: "J02",
        render: {
            type: "",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        groups: [
            {
                id: "2ec96495-ed1b-4174-9a2e-939c1d974617",
                index: 0,
                label: "BOT",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "loader_j02",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "loader_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor_j02",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "gkg_bot_j02",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_bot_j02",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer1_j02",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm1_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm2_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm3_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "sliding_bot_j02",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_bot_j02",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_bot_j02",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi1_bot_j02",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer2_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "reflow_bot_j02",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer3_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "axxon_bot_j02",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "axxon_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi2_bot_j02",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer4_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor8_j02",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec96495-ed1b-4674-9a2e-939c1d974614",
                index: 0,
                label: "TOP",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "rotator_top_j02",
                        label: "Rotator",
                        owner: "automation",
                        render: {
                            type: "rotator_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "gkg_top_j02",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_top_j02",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer5_j02",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm1_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm2_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm3_j02",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "sliding_top_j02",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_top_j02",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_top_j02",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion3_top_j02",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi3_top_j02",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer6_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "reflow_top_j02",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "ng_buffer7_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi4_top_j02",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer8_j02",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "router_j02",
                        label: "Conveyor",
                        owner: "ee",
                        render: {
                            type: "router_machine",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec92495-ed9b-4674-9a2e-939c1d979964",
                index: 0,
                label: "PTH",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "conveyor19_j02",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "ict_grid_j02",
                        label: "ICT Auto",
                        owner: "test",
                        render: {
                            type: "ict_auto_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor27_j02",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "ft_grid_j02",
                        label: "FT",
                        owner: "test",
                        render: {
                            type: "ft_grid_machine",
                            direction: "90",
                        },
                    },
                ],
            },
        ],
    };
};
export const getLineJ03 = (): FactoryLine => {
    return {
        id: "00c3754b-8720-4af0-bbf4-a1ba72f6ec34",
        label: "J02",
        render: {
            type: "",
            x: 0,
            y: 0,
            w: 0,
            h: 0,
        },
        groups: [
            {
                id: "2ec96495-ed1b-4174-9a2e-939c1d974617",
                index: 0,
                label: "BOT",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "loader_j03",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "loader_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor_j03",
                        label: "Loader",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "gkg_bot_j03",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_bot_j03",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer1_j03",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm1_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm2_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_bot_npm3_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "sliding_bot_j03",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_bot_j03",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_bot_j03",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi1_bot_j03",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer2_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "reflow_bot_j03",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer3_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "axxon_bot_j03",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "axxon_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi2_bot_j03",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer4_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor8_j03",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec96495-ed1b-4674-9a2e-939c1d974614",
                index: 0,
                label: "TOP",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "rotator_top_j03",
                        label: "Rotator",
                        owner: "automation",
                        render: {
                            type: "rotator_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "gkg_top_j03",
                        label: "GKG Bot",
                        owner: "ee",
                        render: {
                            type: "gkg_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "spi_top_j03",
                        label: "SPI",
                        owner: "automation",
                        render: {
                            type: "spi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer5_j03",
                        label: "Buffer",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm1_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm2_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "panasonic_top_npm3_j03",
                        label: "Panasonic",
                        owner: "automation",
                        render: {
                            type: "npm_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "sliding_top_j03",
                        label: "Sliding",
                        owner: "automation",
                        render: {
                            type: "sliding_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion1_top_j03",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion2_top_j03",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "fuzion3_top_j03",
                        label: "Fuzion",
                        owner: "ee",
                        render: {
                            type: "fuzion_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi3_top_j03",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer6_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "reflow_top_j03",
                        label: "Reflow Oven",
                        owner: "ee",
                        render: {
                            type: "reflow_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "ng_buffer7_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "sorted_buffer_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "aoi4_top_j03",
                        label: "AOI",
                        owner: "mm",
                        render: {
                            type: "aoi_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "ng_buffer8_j03",
                        label: "Buffer NG",
                        owner: "automation",
                        render: {
                            type: "buffer_machine",
                            direction: "90",
                        },
                    },

                    {
                        id: "router_j03",
                        label: "Conveyor",
                        owner: "ee",
                        render: {
                            type: "router_machine",
                            direction: "90",
                        },
                    },
                ],
            },
            {
                id: "2ec92495-ed9b-4674-9a2e-939c1d979964",
                index: 0,
                label: "PTH",
                type: "",
                position: { x: 0, y: 0 },
                machines: [
                    {
                        id: "conveyor19_j03",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "ict_grid_j03",
                        label: "ICT Auto",
                        owner: "test",
                        render: {
                            type: "ict_auto_machine",
                            direction: "90",
                        },
                    },
                    {
                        id: "conveyor27_j03",
                        label: "Conveyor",
                        owner: "automation",
                        render: {
                            type: "conveyor",
                            direction: "90",
                        },
                    },
                    {
                        id: "ft_grid_j03",
                        label: "FT",
                        owner: "test",
                        render: {
                            type: "ft_grid_machine",
                            direction: "90",
                        },
                    },
                ],
            },
        ],
    };
};
