import { CoverageArea, EquipmentData } from "@/pages/api/interfaces";

export const coverageAreaMap = new Map<number, CoverageArea>(
    [
        [9, {max: 350 }],
        [12, {min: 350, max: 550 }],
        [18, {min: 550, max: 800 }],
        [24, {min: 800, max: 1550 }],
        [36, {min: 1550, max: 2000 }],
    ],
);

function getCoverage(area: number): CoverageArea {
    return <CoverageArea>coverageAreaMap.get(area);
}

export const equipmentData: EquipmentData = {
    condenser: {
        'EZPRO-09-HP-C-11516': {
            zones: 1,
            voltage: '115v',
            btu: '9K',
            coverageArea: getCoverage(9),
        },
        'DIY-12-HP-C-115C': {
            zones: 1,
            voltage: '115v',
            btu: '12K',
            coverageArea:getCoverage(12),
        },
        'DIY-18-HP-C-230C': {
            zones: 1,
            voltage: '230v',
            btu: '18K',
            coverageArea:getCoverage(18),
        },
        'DIY-24-HP-C-230C': {
            zones: 1,
            voltage: '230v',
            btu: '24K',
            coverageArea: getCoverage(24),
        },
        'DIY-36-HP-C-230C': {
            zones: 1,
            voltage: '230v',
            btu: '36K',
            coverageArea: getCoverage(36),
        },
        'DIY-MULTI2-18HP230C': {
            zones: 2,
            voltage: '230v',
            btu: '18K',
            coverageArea: getCoverage(18),
        },
        'DIY-MULTI3-27HP230C': {
            zones: 3,
            voltage: '230v',
            btu: '27K',
            coverageArea:getCoverage(27),
        },
        'DIY-MULTI4-36HP230C': {
            zones: 4,
            voltage: '230v',
            btu: '36K',
            coverageArea: getCoverage(36),
        },
        'DIY-MULTI5-48HP230C': {
            zones: 5,
            voltage: '230v',
            btu: '48K',
            coverageArea:getCoverage(48),
        },
        'DIY-MULTI6-60HP230C': {
            zones: 5,
            voltage: '230v',
            btu: '60K',
            coverageArea: getCoverage(60),
            hidden: true,
        }
    },
    airHandler: {
        'DIY-09-HP-WMAH-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '9K',
            coverageArea: getCoverage(9),
            mount: 'WHAH',
        },
        'DIY-12-HP-WMAH-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '12K',
            coverageArea:getCoverage(12),
            mount: 'WHAH',
        },
        'DIY-18-HP-WMAH-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '18K',
            coverageArea: getCoverage(18),
            mount: 'WHAH',
        },
        'DIY-24-HP-WMAH-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '24K',
            coverageArea: getCoverage(24),
            mount: 'WHAH',
        },
        'DIYCASSETTE09HP-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '9K',
            coverageArea: getCoverage(9),
            mount: 'CASS',
        },
        'DIYCASSETTE12HP-230C25': {
            zones: 1,
            voltage: '230v',
            btu: '12K',
            coverageArea: getCoverage(12),
            mount: 'CASS',
        },
        'DIYCASSETTE18HP-230C25': {
            zones: 1,
            voltage: '240v',
            btu: '18K',
            coverageArea:getCoverage(18),
            mount: 'CASS',
        },
    }
    ,
    lineSet: {
        'DIY16-1412': {
            length: 16,
            ver: '14-12',
        },
        'DIY16-3858': {
            length: 16,
            ver: '38-58',
        },
        'DIY25-1412': {
            length: 25,
            ver: '14-12',
        },
        'DIY25-3858': {
            length: 25,
            ver: '38-58',
        },
        'DIY35-1412C': {
            length: 35,
            ver: '14-12',
            c: true,
        },
        'DIY35-3858C': {
            length: 35,
            ver: '38-58',
            c: true,
        },
        'DIY50-1412C': {
            length: 50,
            ver: '14-12',
            c: true,
        },
        'DIY50-3858C': {
            length: 50,
            ver: '38-58',
            c: true,
        },
    },
    coupler: {
        'DIYCOUPLER-1412K75C': {
            coupler: '14-12',
        },
        'DIYCOUPLER-3858K75C': {
            coupler: '38-58',
        },
    }
}
