import type { MachineDirection } from "./machine-render-type";

export interface FactoryLine {
    id: string;
    label: string;
    render: {
        type: string;
        x: number;
        y: number;
        w: number;
        h: number;
    };
    groups: Group[];
}

export interface Group {
    id: string;
    index: number;
    label: string;
    type: string;
    position: { x: number; y: number };
    machines: Machine[];
}

export interface Machine {
    id: string;
    label: string;
    owner: string;

    render: {
        type: string;
        direction: MachineDirection;
    };
}
