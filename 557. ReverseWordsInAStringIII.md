Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
**题目**：给定一个字符串，对每个单词反转
**Example 1:**
	
	Input: "Let's take LeetCode contest"
	Output: "s'teL ekat edoCteeL tsetnoc"

**Note:** In the string, each word is separated by single space and there will not be any extra space in the string.


思路：先通过空格切割单词，然后对每个单词切割成数组然后调用数组的反向排序，然后拼接回来即可。

---

**Code:**

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