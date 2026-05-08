class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numSet = new Map();
        const output = []
        for(let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            if(numSet.has(diff)) {
                return [numSet.get(diff), i]
            }
            numSet.set(nums[i], i)
        }
    }
}
