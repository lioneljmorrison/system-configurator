import { NextApiRequest, NextApiResponse } from "next";
import { ProductData } from "../interfaces";
import { productData } from "../../../../data/csvjson";
import { equipmentData } from "../../../../data/equipment";

interface BundleData {
    condensers: string[],
    airHandlers: string[],
    lineSets: string[],
    couplers: string[],
}

function createObjectMap(objectKeys: string[]): Map<string, string> {
    const regexpStrings: { [key: string]: { litral: RegExp, value: string } } = {
        space: { litral: /\s/g, value: '_' },
        dash: { litral: /-/g, value: '' },
        brackets: { litral: /[()\[\]{}]/g, value: '' },
    }

    let objectMap = new Map<string, string>();

    objectKeys.forEach(_key => {
        let key = _key;
        Object.keys(regexpStrings).forEach(regexp => {
            key = key.replace(regexpStrings[regexp].litral, regexpStrings[regexp].value)
        })

        objectMap.set(_key, key);
    });

    return objectMap;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const equpment: BundleData = {
        condensers: Object.keys(equipmentData.condenser),
        airHandlers: Object.keys(equipmentData.airHandler),
        lineSets: Object.keys(equipmentData.lineSet),
        couplers: Object.keys(equipmentData.coupler),
    };

    const objectMap = createObjectMap(Object.keys(productData[0]));
    const newData: { [key: string]: ProductData } = {};

    productData.forEach(product => {
        let d: ProductData = {};
        for (let [key, value] of Object.entries(product)) {

            if (value) {
                const k = objectMap.get(key);

                if (k) {
                    d[k] = value;
                }
            }

            newData[d.id] = d;
        }
    });

    res.status(200).json({ status: 'success', data: newData });
}