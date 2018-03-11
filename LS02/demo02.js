//基本数据类型一般存在栈中，引用（对象）数据类型存在堆中
function foo() {
    var n = 10;
    var m = true;
    var str = "Hello World"; // str:"Hello World"存在栈中

    // obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
    var obj = { value: "Hello World" };
};
foo();