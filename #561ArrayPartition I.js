// Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// 题目:一组数组的个数是2的整数倍，对其中的任意两个配对，得出其最小值，在剩下的中继续取，
// 最后要使所有最小值相加起来的值最大。输出最后的结果。

// Example 1:
// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

//思路：尽量最大值和最大值相邻的匹合，那么就可以先从小到大排序，然后顺序两位两位组合，
//结果相当于取所有奇数位的和（0开始）。 

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function(nums) {
    let sum=0;
	nums.sort(sortNumber);
	 for(let i=0;i<nums.length;i++){
		if(i%2===0){
			sum+=nums[i];
		}
	 }
	 return sum;
};
function sortNumber(a,b){
	return a-b;
}