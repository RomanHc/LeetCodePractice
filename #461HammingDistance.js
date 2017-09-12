//题目：计算HammingDistance表示两个数转换为二进制后，各位不相同的个数。计算两个数的HammingDistance值。
//思路：首先对两个数进行异或运算，可以得到一个纪录哪些位不同的数字，然后对该数字进行x=x&(x-1)运算，可以计算出包含1的个数。（x|（x+1）可以计算0的数量）

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
let hammingDistance = function(4, 1) {
	return getCount1OfValue(x^y);	
};
function getCount1OfValue(x){
	let count=0;
	while(x){
		count++;
		x=x&(x-1);
	}
	return x;
}