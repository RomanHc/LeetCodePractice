//题目：给定一个字符串，对每个单词反转
//如下，
//Input: "Let's take LeetCode contest"
//Output: "s'teL ekat edoCteeL tsetnoc"

//思路：先通过空格切割单词，然后对每个单词切割成数组然后调用数组的反向排序，然后拼接回来即可。
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
    let sArr=s.split(" ");
    let resultArr=[];
    for(let i=0;i<sArr.length;i++){
    	resultArr.push(sArr[i].split("").reverse().join(""));
    }
    return  resultArr.join(" ");
};