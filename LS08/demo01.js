function foo(){}
console.log(foo); //
console.log(typeof foo); //
console.log(foo instanceof Object); //
console.log(foo instanceof Function); //
console.log(foo === window.foo); 
/*ƒ foo(){}
VM42:3 function
VM42:4 true
VM42:5 true
VM42:6 true*/


var a = new Array(5);//创建一个长度为五的数组
var a = new Array("5");//创建一个长度为五的元素 


console.log(typeof new Function());//创建一个函数
console.log(typeof new Array());	 // 创建一个对象数组
console.log(typeof new Date());	 //创建一个对象日期
/*VM46:1 function
VM46:2 object
VM46:3 object*/

console.log(typeof new new Function());
//object

console.log(Function instanceof Function);
console.log(Function instanceof Object);

console.log(Array instanceof Function);
console.log(Array instanceof Object);
/*VM51:1 true
VM51:2 true
VM51:4 true
VM51:5 true*/

//内置的函数对象(Function Array Date)
//内置的非函数对象(Math JSON)

console.log(Math instanceof Function);
console.log(Math instanceof Object);

console.log(JSON instanceof Function);//JSON只是定义的对象而不是实例化的函数
console.log(JSON instanceof Object);
/*VM55:1 false
VM55:2 true
VM55:4 false
VM55:5 true*/


