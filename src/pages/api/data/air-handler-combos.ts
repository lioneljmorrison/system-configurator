import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    interface CombinationResult {
        combo: string,
        combination: number[];
        percentage: number;
    }

    interface Results {
        zones: number;
        condenserBTU: number;
        combinations: Number;
        results: CombinationResult[];
        combos?: number[][];
    }


    function findCombinations(target: number, nums: number[], zones: number): { combos: number[][], result: CombinationResult[] } {
        const result: CombinationResult[] = [];
        const combos: number[][] = [];

        for (let r = 1; r <= nums.length; r++) {
            for (const combination of getAllCombinations(nums, r)) {
                const sum = combination.reduce((acc, curr) => acc + curr, 0);
                const percentage = sum / target * 100;
                if (percentage > 65 && percentage < 134 && combination.length === zones) {
                    combos.push(combination);
                    result.push({ combo: combination.join('-'), combination, percentage });
                }
            }
        }

        return { combos, result };
    }

    function getAllCombinations(nums: number[], r: number): number[][] {
        const combinations: number[][] = [];
        const helper = (startIndex: number, current: number[]) => {
            if (current.length === r) {
                combinations.push([...current]);
                return;
            }
            for (let i = startIndex; i < nums.length; i++) {
                current.push(nums[i]);
                helper(i, current);
                current.pop();
            }
        };
        helper(0, []);
        return combinations;
    }

    function main(zones: number, btu: number): Results {
        const nums: number[] = [9, 12, 18, 24, 36]; // Numbers to be combined
        const result: { combos: number[][], result: CombinationResult[] } = findCombinations(btu, nums, zones);

        return {
            zones,
            condenserBTU: btu,
            combinations: result.result.length,
            results: result.result,
        };
    }

    const zones = Number(req?.query.zones ?? 2);
    const btu = Number(req?.query.btu ?? 27);

    res.status(200).json({ status: 'success', data: main(zones, btu) });
}