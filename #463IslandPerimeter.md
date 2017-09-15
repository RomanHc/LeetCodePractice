You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

**Example:**

<pre>
 [[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
Answer: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:
<b>重点看图:</b>
<img src="https://leetcode.com/static/images/problemset/island.png"/>
</pre>

思路:遍历每一个格子，如果存值是1，那么边数+4，然后查看它的上下左右的格子，如果有存1的，边数-1；

---
**Code:**


	/**
	 * @param {number[][]} grid
	 * @return {number}
	 */
	var islandPerimeter = function(grid) {
		let rows=grid.length;
		let cols=grid[0].length;
		let count=0;
	    for(let i=0;i<rows;i++){
	    	for(let j=0;j<cols;j++){
	    		if(grid[i][j]==1){ 
	    			count+=4;
	    			if(i-1>=0 && grid[i-1][j]==1){//上  先判断前面的会短路，所以数组也不会越界
	    				count--;
	    			}
	    			if(i+1<rows && grid[i+1][j]==1){//下
	    				count--;
	    			}
	    			if(j-1>=0 && grid[i][j-1]==1){//左
	    				count--;
	    			}
	    			if(j+1<cols && grid[i][j+1]==1){//右
	    				count--;
	    			}
	    		} 		
	    	}
	    }
	    return count;
	};