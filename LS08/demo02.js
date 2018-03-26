var func = function(n){
    if (n <= 0)
        return 1;
    else
        //return n * func(n - 1);
        return n * arguments.callee(n - 1);
};
console.log(func(4));
//递减函数


//prototype  函数对象原型

Object
//作为构造函数和对象


function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//Hi,i'm leo
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

//绑定
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
        foo.bind(this)();
        foo();//23
        //var fee = foo.bind(this); 
        //fee();
        //foo();//45
    }
};
obj.test();//45   ////23


//LS08的demo06很重要，多加练习
 