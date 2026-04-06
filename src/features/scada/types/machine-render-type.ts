import type { RenderDimensions } from "./render-measure-type.ts";

export type MachineDirection = "0" | "90" | "180" | "270";

export interface MachineRenderer {
    id: string;
    label: string;
    dimensions: RenderDimensions;
    type: string;
    direction: MachineDirection;
}
