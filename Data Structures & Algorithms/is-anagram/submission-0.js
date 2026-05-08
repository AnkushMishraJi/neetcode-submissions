class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const charMap = {};
        const secondCharMap = {};
        for(let i=0; i<s.length; i++) {
            charMap[s[i]] = (charMap[s[i]] || 0) + 1
            secondCharMap[t[i]] = (secondCharMap[t[i]] || 0) + 1
        }

        for(const char in charMap) {
            if(charMap[char] !== secondCharMap[char]) return false;
        }
        return true;
        
    }
}
