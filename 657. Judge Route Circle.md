
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to **the original place**.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

**题目**:传入字符串，可以由UDLR组成，表示上下左右移动一格，如果移动结果返回原点则函数返回true，否则返回false；

**Example 1:**

    Input: "UD"
    Output: true

**Example 2:**

    Input: "LL"
    Output: false

----

**Code:**
	/**
	 * @param {string} moves
	 * @return {boolean}
	 */
	let judgeCircle = function(moves) {
		let startX=0;
		let startY=0;
	    let moveArr=moves.split("");
		for(let i=0;i<moveArr.length;i++){
			switch(moveArr[i]){
				case 'U':startY++;break;
				case 'D':startY--;break;
				case 'R':startX++;break;
				case 'L':startX--;break;
			}
		}
		if(startX===0&&startY===0){
			return true;
		}else{
			return false;
		}
	};