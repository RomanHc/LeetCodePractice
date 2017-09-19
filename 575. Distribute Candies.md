Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

**题目**：给出一个包含偶数个整数的数组，数组的不同数字代表着不同糖果。把这些数字平分两份给哥哥妹妹，返回妹妹拿到不同糖果数量的最大值。
**Example 1:**

	Input: candies = [1,1,2,2,3,3]
	Output: 3
	Explanation:
	There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
	Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
	The sister has three different kinds of candies. 

**Example 2:**

	Input: candies = [1,1,2,3]
	Output: 2
	Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
	The sister has two different kinds of candies, the brother has only one kind of candies. 

**思路**：对数组去重，剩下的就是糖果的类型数量。因为糖果二者平分，所以糖果类型数量如果大于一半的糖果数量，那么就以一般的类型为最大，反之则就是糖果类型的数量。

**Code:**

	/**
	 * @param {number[]} candies
	 * @return {number}
	 */
	var distributeCandies = function(candies) {
	    let arr=[];
	    for(var i =0;i<candies.length;i++){
	    	if (arr.indexOf(candies[i])==-1) {
	    		arr.push(candies[i]);
	    	}
	    }
	    return arr.length>candies.length/2?candies.length/2:arr.length;
	};