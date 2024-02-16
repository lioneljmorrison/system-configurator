import { NextApiRequest, NextApiResponse } from "next";
import { ComponentData, CoverageArea } from "../interfaces";
import { GroupZoneData, ZoneData, ZonesData, airHandlerMap } from "../business";
import { coverageAreaMap, equipmentData } from "../../../../data/equipment";

// For all zones, square footage of zone or room determines the equipment needs. The spec for this 
// can be found in CoverageAreaMap

// Single Zone. 
// Condenser and Wall Mounted air handler are matched unless you have a 
// ceiling mounted air handler. In this case they come in 3 sizes, 9, 12 and 18K


// Dual Zone
// There are 3 possible combinations of air handlers which can be determined by knowing the BTU or K 
// value of the condenser and the number of heads or zones the condenser can handle. There are min and max
// values. 

// Max value should not exceed the BTU the condenser is capable of handling.
// Min value should not be less the max of the next lowest condensor. eg. a 12K condendor would use the max of a 9K
// condender and so on. 

// Tri, Quad, Perta and Hexa Zone 
// Becase the condender is larger and we handle upto 6 zones can have more combinations of air handlers. This is 
// true for when running one of these condensors in a dual zone environment. The advantage is that a tri head
// can handle more BTUs and thus when running in a dual headed mode, we can as a couple of extra combinations.

// As a rule, if Even though Dual zone can run as a single zone, their is not much point as it would cost more money
// to buy a dual zone bundle and not have use of the addational air handler, lineset and remote. 
// Like wise for Tri, Perta, Quad and Hexa

type ZoneMap = Map<string, ZoneData>;
type ZonesMap = Map<string, ZoneMap>;

function findAirHandlerMatch(map: Map<string, number>, zoneData: ZoneData, _size: number): ComponentData {
    let equipment: ComponentData = {};

    map.forEach((size, modelNumber) => {
        if (size === _size) {
            const airHandlerSpec = equipmentData.airHandler[modelNumber];

            console.log(equipmentData.airHandler[modelNumber]);

            if (zoneData?.mount === 'CASS' && airHandlerSpec.mount === 'CASS') {
                equipment[modelNumber] = equipmentData.airHandler[modelNumber];
            }

            if (zoneData?.mount === 'WMAH' && airHandlerSpec.mount === 'WMAH') {
                equipment[modelNumber] = equipmentData.airHandler[modelNumber];
            }
            
            if (!zoneData?.mount || zoneData?.mount === 'MIX') {
                equipment[modelNumber] = equipmentData.airHandler[modelNumber];
            }


        }
    });

    return equipment;
}

function findAreaMatch(map: Map<number, CoverageArea>, zoneData: ZoneData): { size: number, component: ComponentData } {
    let size: number = 0;

    map.forEach((coverage, key) => {
        const min = coverage?.min ?? 1;
        if ((zoneData.sqft >= min) && (zoneData.sqft <= coverage.max)) {
            size = Number(key);
        }
    });

    return { size, component: findAirHandlerMatch(airHandlerMap, zoneData, size) };
}

function getZoneMap(_zones: ZonesData): ZoneMap {
    let zones: ZoneMap = new Map();

    Object.entries(_zones).forEach((zone, idx) => {
        const [name, zoneData] = [...zone];

        if (!zoneData?.ignore) {
            zoneData.airHandler = findAreaMatch(coverageAreaMap, zoneData);
            zones.set(name, zoneData);
        }
    })

    return zones;
}

function getGroupsMap(_groups: GroupZoneData): ZonesMap {
    const group: ZonesMap = new Map();

    Object.keys(_groups).forEach(groupName => {
        const data = _groups[groupName]
        group.set(groupName, getZoneMap(data));
    });

    return group;
}

function identifyCondensor() {

}

function zoneMap2Object(groups: ZonesMap): ZonesData {
    const parent = Object.fromEntries(groups);

    groups.forEach((group, key) => {
        parent[key] = <ZoneData>Object.fromEntries(<any>group);
    });

    return parent;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const params = req?.query;

    if (!req?.body?.groups) {
        res.status(400).json({ status: 'filed', message: 'No zone data' });
    }


    const zoneMap = getGroupsMap(req.body.groups);

    console.log(zoneMap);


    // const m2o = map => Object.fromEntries(map.entries())

    res.status(200).json({ status: 'success', data: zoneMap2Object(zoneMap) });
}