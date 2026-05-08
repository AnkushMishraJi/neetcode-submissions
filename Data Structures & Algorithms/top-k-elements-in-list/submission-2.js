class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {}
        nums.forEach((num) => {
            if(!freqMap[num]) {
                freqMap[num] = 1;
            } else {
                freqMap[num]++;
            }
        })
        const output = [];
        const sortedEntries = Object.entries(freqMap).sort(([,a], [,b]) => b - a);
        while(k>0) {
            k--;
            output.push(sortedEntries[k][0])
        }

        return output
    }
}
