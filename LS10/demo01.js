var a = 10;
	b = 20;
function fn(){
	var a = 100,
		c = 200;
	function bar(){
		var a =500,//
			d =600;
		console.log(a,b,c,d);
	} 
	bar();
}
fn();
//500 20 200 600

var a = 10;
	b = 20;
function fn(){
	var a = 100,
		c = 200;
	function bar(){
		var a =500;//
			d =600;//d为全局变量
	} 
	bar();
	console.log(a,b,c,d);
}
fn();


var scope = "global";
function checkscope(){
	var scope = "local";
	return function(){
		return scope;
	};
}
console.log(checkscope()());
//VM423:8 local

var scope = "global";
function checkscope(){
	var scope = "local";
	return new Function("return scope;");
}
console.log(checkscope()());
//VM515:6 global


//