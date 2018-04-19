var obj = {
    x:1,
    y:2
};
//Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
//VM274:8 y 2

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出什么？
person.name = "Lucy";
console.log(person.name);//输出什么？
delete person.name;
console.log(person.name);//输出什么？
//VM348:8 Mike
//VM348:10 Mike
//VM348:12 Mike

var obj = {
    x:1,
    y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
//VM428:8 x 1
//VM428:8 y 2
//VM428:8 z 3
