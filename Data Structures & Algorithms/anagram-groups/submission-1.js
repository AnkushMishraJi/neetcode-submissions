class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for(const str of strs) {
            const alphabets = new Array(26).fill(0);
            for(const c of str) {
                alphabets[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            if(!res[alphabets.join()]) res[alphabets.join()] = [];
            res[alphabets.join()].push(str);
        }
        return Object.values(res);
    }
}
