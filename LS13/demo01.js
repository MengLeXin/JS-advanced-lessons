console.log(typeof Array);
console.log(typeof Math);
console.log(typeof Date);
console.log(typeof Function);
console.log(typeof JSON);
//VM422:1 function
//VM422:2 object
//VM422:3 function
//VM422:4 function
//VM422:5 object

console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);