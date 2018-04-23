var obj3=function(){
}//构造一个函数
var obj3=new obj3();//实例化一个函数对象

var obj1 = {x:1}
var obj2 =Object.create(obj1);
obj2.y=2;
console.log(obj1,obj2);
//VM217:4 {x: 1} {y: 2}

var Person = function(name){
	this.name = name;
}
var p1 = new Person("abc");
var p2 = new Person("def");
console.log(p1.name,p2.name); 
//VM466:6 abc def


///////////Part2 原型链属性操作////////////
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了