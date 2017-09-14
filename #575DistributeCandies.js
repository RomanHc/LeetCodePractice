//题目：给出一个包含偶数个整数的数组，数组的不同数字代表着不同糖果。把这些数字平分两份给哥哥妹妹，返回妹妹拿到不同糖果数量的最大值。
//思路：对数组去重，剩下的就是糖果的类型数量。因为糖果二者平分，所以糖果类型数量如果大于一半的糖果数量，那么就以一般的类型为最大，反之则就是糖果类型的数量。
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