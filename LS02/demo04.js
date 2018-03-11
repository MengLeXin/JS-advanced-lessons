(function () { //立即执行表达式开始
    //基本（原始）数据类型与引用（对象）类型的区别1 判等不同
    var a1 = 100;
    var b1 = 100;
    console.log(a1 == b1);
    console.log(a1 === b1);
    
    //
    var a2 = new Number(200);
    var b2 = new Number(200);
    console.log(a2 == b2);
    console.log(a2 === b2);
    
    //
    var a3 = new Number(200);
    var b3 = a3;
    console.log(a3 == b3);
    console.log(a3 === b3);
    
    b3 = new Number(200);
    console.log(a3 === b3);