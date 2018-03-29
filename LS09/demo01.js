//绑定
var obj1 = {
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2 ={
	x:34
}
var fee=obj1.foo.bind(obj2);
fee();
//VM169:4 34 undefined
fee("yy");
//VM169:4 34 "yy"


//当function前有运算符时，认定为表达式不是函数声明不提升
foo();
var foo = function(){
    console.log("foo");
};//foo不是function
//编译器解析为
var foo;
foo();
foo=function(){
    console.log("foo");
};


AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

//上边代码等价如下
function AA(){
    console.log("AA_1");
}
var AA;//在这和在顶端无差别//对已解析的函数不会进行二次声明

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();


//*****区别声明与定义
//var A;声明
//var A=1;定义