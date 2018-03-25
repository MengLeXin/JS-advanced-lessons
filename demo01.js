function foo(){
    console.log(foo);
}
foo();//window  在全局里调用foo()，函数调用的主体是window


//
var x = 45;
var test = function(){
    console.log("输出",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();//23   主体是test
test();//45     主体是window

//
var x = 45;
var obj = {
	x:23,
	test:function(){
		function foo(){
		console.log(this.x);
		}
		foo();
    }
}
obj.test();//45