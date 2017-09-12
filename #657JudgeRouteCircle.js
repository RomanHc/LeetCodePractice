//题目:传入字符串，可以由UDLR组成，表示上下左右移动一格，如果移动结果返回原点则函数返回true，否则返回false；
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