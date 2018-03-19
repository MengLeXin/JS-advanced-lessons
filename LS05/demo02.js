var obj1 = {x:2,y:[1],z:false};
var obj2 = {x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);
console.log(obj1.y===obj2.y);
console.log(obj1.z===obj2.z);
console.log(obj1.x==obj2.x);
console.log(obj1.y==obj2.y);
console.log(obj1.z==obj2.z);