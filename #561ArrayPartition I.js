// Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
// say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// ��Ŀ:һ������ĸ�����2���������������е�����������ԣ��ó�����Сֵ����ʣ�µ��м���ȡ��
// ���Ҫʹ������Сֵ���������ֵ���������Ľ����

// Example 1:
// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

//˼·���������ֵ�����ֵ���ڵ�ƥ�ϣ���ô�Ϳ����ȴ�С��������Ȼ��˳����λ��λ��ϣ�
//����൱��ȡ��������λ�ĺͣ�0��ʼ���� 

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