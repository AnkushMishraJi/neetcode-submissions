class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numset = new Set();

        nums.forEach((num) => numset.add(num));
        let max = 0;
        nums.forEach((num) => {
            let count = 1;
            let next = num + 1;
            const prev = num - 1;
            if (!numset.has(prev)) {
                while (numset.has(next)) {
                    next++
                    count++;
                }
            }

            max = Math.max(max, count);
        });

        return max;
    }
}
