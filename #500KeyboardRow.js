//题目：给出一组单词，返回字母都在键盘同一行的单词。
//Input: ["Hello", "Alaska", "Dad", "Peace"]
//Output: ["Alaska", "Dad"]
//思路:完全遍历，很差的一种写法 ╮(╯▽╰)╭ 
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let oneRow="QWERTYUIOP";
	let twoRow="ASDFGHJKL";
	let threeRow="ZXCVBNM";
	let returnArr=[];
	let tempArr=[];
	for(var i in words){
		tempArr.push(words[i].toUpperCase());
	}
	for(let i=0;i<tempArr.length;i++){
		let isOneRow=0;
		let isTwoRow=0;
		let isThreeRow=0;
		for(let j=0;j<tempArr[i].length;j++){
			if(oneRow.indexOf(tempArr[i][j])!=-1){
				isOneRow=1;
			}
			if(twoRow.indexOf(tempArr[i][j])!=-1){
				isTwoRow=1;
			}
			if(threeRow.indexOf(tempArr[i][j])!=-1){
				isThreeRow=1;
			}
			if(isOneRow+isTwoRow+isThreeRow>1){
				break;
			}
		}
		if(isOneRow+isTwoRow+isThreeRow==1){
			returnArr.push(words[i]);
		}
	}
	return returnArr;
};










