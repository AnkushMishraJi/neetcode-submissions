class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = []
        let zero = 0;
        const product = nums.reduce((acc, num) => {
            if(num !== 0) acc *= num
            else zero++;
            return acc;
        }, 1)

        nums.forEach((num)=> {
           if(zero>1) output.push(0);
           else if(zero === 1 && num !== 0) output.push(0)
           else if(zero === 1 && num === 0) output.push(product)
           else if(zero === 0 ) output.push(product/num)
        })
        
        return output;
    }
}
