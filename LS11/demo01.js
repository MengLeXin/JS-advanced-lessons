//立即执行表达式
(function foo(x,y){...})();
(function foo(x,y){...}());

//立即执行表达式与运算符的结合
true && function(a,b){
	return a>b?a:b;
}(5,9);
//9
!function(x,y){
	x==y?true:flase;
}("5",5);
//true
true || function(a,b){
	return a>b?a:b;
}(5,9);
//true

//变量共享错误
function f(){
	var getNumFuncs =[];
	for(var i=0;i<10;i++){  //等同于i = 0;  for(i<10;i++){...};
		getNumFuncs[i]= function(){
			return i;
		};
	}
	return getNumFuncs;
}
var tmp =f();
tmp[3]();
//10
function f(){
	var getNumFuncs =[];
	for(var i=0;i<10;i++){
		(function(j){//j是形参
			getNumFuncs[j]= function(){
				return j;
			};
        }(i));//i是实参，从34中得到
	}
	return getNumFuncs;
}
var tmp =f();
tmp[3]();
//3
function f(){
	var getNumFuncs = [];
	var j;
	for(var i=0;i<10;i++){
		j=i;
		getNumFuncs[i]=function(){
			return j;//return i;
		};
	}
	return getNumFuncs;
}
var tmp = f();
tmp[3]();
//j=9  //i=10




