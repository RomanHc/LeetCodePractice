Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

**题目：**输入数字n，输出从1到n的字符串数组。
当数字是3的倍数，输出Fizz；数字是5的倍数，输出Buzz。是3,5的倍数，输出FizzBuzz。

**Example:**

	n = 15,
	
	Return:
	[
	    "1",
	    "2",
	    "Fizz",
	    "4",
	    "Buzz",
	    "Fizz",
	    "7",
	    "8",
	    "Fizz",
	    "Buzz",
	    "11",
	    "Fizz",
	    "13",
	    "14",
	    "FizzBuzz"
	]
---

**Code:**
	/**
	 * @param {number} n
	 * @return {string[]}
	 */
	var fizzBuzz = function(n) {
	    let arr=[];
	    for(let i=1;i<=n;i++){
	        if(i%3==0){
	            if(i%5==0){
	                arr.push("FizzBuzz");continue;
	            }
	            arr.push("Fizz");
	        }else if(i%5==0){
	            arr.push("Buzz");
	        }else{
	            arr.push(i+"");
	        }
	    }
	    return arr;
	};