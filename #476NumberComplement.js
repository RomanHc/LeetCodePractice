//��Ŀ������һ������������Ĳ���������
//5��������Ϊ101������Ϊ010��
//1��������Ϊ1������Ϊ0��

//˼·:��λȡ����Ȼ���ȡ�ַ���(ȥ��ǰ���0)��Ȼ���������ʮ������

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numArr=num.toString(2).split("");
	let resultArr=[];
	for(var i in numArr){
		if(numArr[i]=='1'){
			resultArr.push('0');
		}else{
			resultArr.push('1');
		}
	}
	let resultStr=resultArr.toString().replace(/,/g,"");
	resultStr.substring(resultStr.indexOf('1'));
	return parseInt(resultStr,2); //������תʮ����
	// let sum=0;
	// for(let i=resultStr.length-1;i>=0;i--){
	// 	sum+=resultStr[i]*Math.pow(2,resultStr.length-1-i);
	// }
	// return sum;

};