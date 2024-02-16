import { AirHandlerMountTypes, ComponentData } from "./interfaces";

export interface AirHandlerCombos {
    [key: string]: {
        [key: number]: number[][],
    }
}

export interface CondenserCombos {
    [key: string]: string[],
}

export interface ZoneData {
    sqft: number,
    distance: number,
    ignore?: boolean,
    airHandler?: { size: number, component: ComponentData },
    mount?: AirHandlerMountTypes,
}

export interface ZonesData {
    [zone: string]: ZoneData,
}

export interface IncommingGroupZoneData {
    [groups: string]: ZonesData
}

export interface GroupZoneData {
        zones: ZoneMap | ZoneData,
        condenser: CondenserSpecs,
}

export type ZoneMap = Map<string, ZoneData>;
export type ZonesMap = Map<string, ZoneMap>;
export type GroupZonesMap = Map<string, GroupZoneData>;

interface CondenserModel {
    series: string,
    zones: number,
    btu: {
        size: number,
        min: number,
        max: number,
    },
    voltage: string,
    generation: number | undefined,
}

export interface CondenserSpecs {
    heads: number,
    condenserModel: { [model: string]: CondenserModel },
    btu:  number,
    airHandlers: {
        size: number[],
    },
}

export const condenserMap = new Map<number, string[]>(
    [
        [1, ['EZPRO-09-HP-C-11516', 'DIY-12-HP-C-115C', 'DIY-18-HP-C-230C', 'DIY-24-HP-C-230C', 'DIY-36-HP-C-230C']],
        [2, ['DIY-MULTI2-18HP230C']],
        [3, ['DIY-MULTI3-27HP230C']],
        [4, ['DIY-MULTI4-36HP230C']],
        [5, ['DIY-MULTI5-48HP230C']],
        [6, ['DIY-MULTI6-60HP230C']],
    ]
);

export const airHandlerMap = new Map<string, number>(
    [
        ['DIY-09-HP-WMAH-230C25', 9],
        ['DIY-12-HP-WMAH-230C25', 12],
        ['DIY-18-HP-WMAH-230C25', 18],
        ['DIY-24-HP-WMAH-230C25', 24],
        ['DIYCASSETTE09HP-230C25', 9],
        ['DIYCASSETTE12HP-230C25', 12],
        ['DIYCASSETTE18HP-230C25', 18],
    ]
);

export const combos: AirHandlerCombos = {
    single: {
        1: [[9], [12], [18], [24], [36]],
    },
    dual: {
        2: [
            [9, 9], [9, 12],
            [12, 12]
        ],
    },
    tri: {
        2: [
            [9, 9], [9, 12], [9, 18],
            [12, 12], [12, 18],
            [18, 18],
        ],
        3: [
            [9, 9, 9], [9, 9, 12], [9, 9, 18], [9, 12, 12],
            [12, 12, 12],
        ],
    },
    quad: {
        2: [
            [9, 9], [9, 12], [9, 18], [9, 24],
            [12, 12], [12, 18], [12, 24],
            [18, 18],
        ],
        3: [
            [9, 9, 9], [9, 9, 12], [9, 9, 18],
            [9, 9, 24], [9, 12, 12], [9, 12, 18],
            [9, 12, 24], [9, 18, 18], [12, 12, 12],
            [12, 12, 18], [12, 18, 18], [12, 12, 24],
        ],
        4: [
            [9, 9, 9, 9], [9, 9, 9, 12], [9, 9, 9, 18],
            [9, 9, 12, 12], [9, 9, 12, 18], [9, 12, 12, 12],
            [12, 12, 12, 12],
        ],
    },
    penta: {
        2: [
            [9, 18], [9, 24], [9, 36],
            [12, 12], [12, 18], [12, 24],
            [12, 36], [18, 18], [18, 24],
            [18, 36], [24, 24], [24, 36],
        ],
        3: [
            [9, 9, 9], [9, 9, 12], [9, 9, 18], [9, 9, 24],
            [9, 12, 12], [9, 12, 18], [9, 12, 24], [9, 18, 18],
            [9, 18, 24], [9, 24, 24], [12, 12, 12], [12, 12, 18],
            [12, 12, 24], [12, 18, 18], [12, 18, 24], [12, 24, 24],
            [18, 18, 18], [18, 18, 24], [9, 9, 36], [9, 12, 36],
            [9, 18, 36], [12, 12, 36],
        ],
        4: [
            [9, 9, 9, 9], [9, 9, 9, 12], [9, 9, 9, 18],
            [9, 9, 9, 24], [9, 9, 12, 12], [9, 9, 12, 18],
            [9, 9, 12, 24], [9, 9, 18, 18], [9, 9, 18, 24],
            [9, 12, 12, 12], [9, 12, 12, 18], [9, 12, 12, 24],
            [9, 12, 18, 18], [9, 18, 18, 18], [12, 12, 12, 12],
            [12, 12, 12, 18], [12, 12, 12, 24], [12, 12, 18, 18],
            [9, 9, 9, 36],
        ],
        5: [
            [9, 9, 9, 9, 9], [9, 9, 9, 9, 12], [9, 9, 9, 9, 18],
            [9, 9, 9, 9, 24], [9, 9, 9, 12, 12], [9, 9, 9, 12, 18],
            [9, 9, 9, 18, 18], [9, 9, 12, 12, 12], [9, 9, 12, 12, 18],
            [9, 12, 12, 12, 12], [9, 12, 12, 12, 18], [12, 12, 12, 12, 12],
        ],
    }
}