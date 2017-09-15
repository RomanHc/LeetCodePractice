**题目**：根据给出的行数和列数，对一个矩阵进行重新排列，但是保持其原数据不变，如果可以排列返回矩阵，如果不可以排列返回原矩阵。
**Example 1:**

	Input: 
	nums = 
	[[1,2],
	 [3,4]]
	r = 1, c = 4
	Output: 
	[[1,2,3,4]]

**思路**：只有当原行列乘积和新行列乘积相同时才能构成新矩阵。遍历旧矩阵给新矩阵赋值即可。

---
**Code:**

	/**
	 * @param {number[][]} nums
	 * @param {number} r
	 * @param {number} c
	 * @return {number[][]}
	 */
	var matrixReshape = function(nums, r, c) {
		//原数组的行和列
	    let rows=nums.length;
	    let cols=nums[0].length; 
	    let newArr=[];
	    let rowArr=[];
	    let index=1;
	    if(rows*cols==r*c){
		    for(let i=0;i<rows;i++){  	
		    	for(let j=0;j<cols;j++){ 
		    		rowArr.push(nums[i][j]);
		    		if(index%c==0){
		    			newArr.push(rowArr);
		    			rowArr=[]; 
		    		}
		    		index++;
		    	} 	
		    }
		    return newArr;
	    }else{
	    	return nums;
	    }
	};