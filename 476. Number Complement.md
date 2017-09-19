Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.
题目：输入一个数，输出它的补数。比如
5：二进制为101，补数为010；
1：二进制为1，补数为0；

**Note:**
The given integer is guaranteed to fit within the range of a 32-bit signed integer.
You could assume no leading zero bit in the integer’s binary representation.
**Example 1:**

	Input: 5
	Output: 2
	Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

**Example 2:**

	Input: 1
	Output: 0
	Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.


**思路:**按位取反，然后截取字符串(去掉前面的0)，然后计算它的十进制数

---
**Code:**
	/**
	 * @param {number} num
	 * @return {number}
	 */
	var findComplement = function(num) {
	    let numArr=num.toString(2).split("");
		let resultArr=[];
		for(var i in numArr){
			if(numArr[i]=='1'){
				resultArr.push('0');
			}else{
				resultArr.push('1');
			}
		}
		let resultStr=resultArr.toString().replace(/,/g,"");
		resultStr.substring(resultStr.indexOf('1'));
		return parseInt(resultStr,2); //二进制转十进制
		// let sum=0;
		// for(let i=resultStr.length-1;i>=0;i--){
		// 	sum+=resultStr[i]*Math.pow(2,resultStr.length-1-i);
		// }
		// return sum;
	
	};