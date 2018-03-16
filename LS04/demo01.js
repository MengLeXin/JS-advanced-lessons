var a = [1,2,3];
var b = a;
console.log(a,b);
b.pop();
console.log(a,b);
b = [4,5,6];
console.log(a,b);

//Part2
function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);

//Part3
function foo(x) {
    x.push(4);
    //console.log(x);
    x.length = 0;
    x.push(5,6,7,8);
    //console.log(x);
}
var a = [1,2,3];
foo(a);
console.log(a);