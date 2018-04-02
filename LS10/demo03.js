//相关自由变量：不在函数体内但可以访问到的变量


//执行上下文
console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];//银行中
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();//笔没油了，去商店买笔
console.log("在家-继续做作业...全局上下文");

//1.console.log("小明回家");  //global
//2.var xx = ["书桌","书包","铅笔盒"];//小明家中  //global
//3.console.log("在家-做作业中 1 ...全局上下文");  //global
//4.console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");  //global
//5.goToStore();//笔没油了，去商店买笔 //global
//6.var yy = ["文具店老板","出售的文具"];//文具商店中  //local
//7.console.log("在文具店-买文具中  ...函数1上下文");  //local
//8. console.log("在文具店-买文具中  ...函数1上下文 发现没带钱"); //loacl
//9.goToBank();  //local
//10.var zz = ["银行职员","柜员机"];//银行中  //local
//11.console.log("在银行-取钱 ...函数2上下文 返回文具店");  //local
//12.console.log("在文具店-买好文具  ...函数1上下文 返回家");  //local
//13.console.log("在家-继续做作业...全局上下文");  //global


//



