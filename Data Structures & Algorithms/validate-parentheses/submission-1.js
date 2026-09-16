class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bracketMap = {
            ']': '[',
            '}': '{',
            ')': '('
        }
        for (let i = 0; i< s.length; i++) {
            if(['(', '{', '['].includes(s.charAt(i))) {
                stack.push(s.charAt(i))
            } else {
                if (!stack.length) return false;
                const bracket = stack.pop()
                if(bracket === bracketMap[s.charAt(i)]) continue;
                else return false
            }
        }

        if(stack.length) return false
        else return true
    }
}
