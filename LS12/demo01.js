//闭包：闭包是由函数与其相关变量组合成的包裹体
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//输出多少？6 //返回的函数体与startValue形成闭包
console.log(inc(2));//输出多少？8
inc = createInc(5);
console.log(inc(1));//输出多少？6 //上一个startValue释放，新创建了一个startValue
