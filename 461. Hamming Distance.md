####The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
####Given two integers x and y, calculate the Hamming distance.
####题目：HammingDistance表示两个数转换为二进制后，各位不相同的个数。
####给出两个整数x和y，计算两个数的HammingDistance值。
**Note:**
0 ≤ x, y < 231.

**Example:**

	Input: x = 1, y = 4
	
	Output: 2
	
	Explanation:
	1   (0 0 0 1)
	4   (0 1 0 0)
	       ↑   ↑
	
	The above arrows point to positions where the corresponding bits are different.

---
**思路**：
首先对两个数进行异或运算，可以得到一个纪录哪些位不同的数字，
然后对该数字进行x=x&(x-1)运算，可以计算出包含1的个数，即不同的位数。
（x|(x+1)可以计算0的数量）

    
    /**
     * @param {number} x
     * @param {number} y
     * @return {number}
     */
    let hammingDistance = function(x,y) {
    	return getCount1OfValue(x^y);	
    };
    function getCount1OfValue(x){
    	let count=0;
    	while(x){
    		count++;
    		x=x&(x-1);
    	}
    	return count;
    }
