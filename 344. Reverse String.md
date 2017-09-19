Write a function that takes a string as input and returns the string reversed.
题目：输入一个字符串，返回它的逆序

**Example:**
Given s = "hello", return "olleh".

	/**
	 * @param {string} s
	 * @return {string}
 	*/
	let reverseString = function(s) {
	  	return  s.split("").reverse().join("");
	};
    