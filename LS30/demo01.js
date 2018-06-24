* Created by qile on 2017/8/14.
*/
////////////////////////////////
var f = function (v) {
   return v + 1;
};
f(2);//返回3

//使用箭头函数，上述代码等效如下,只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2);//返回3


///////////////////////////////
//没有参数和有多个参数的情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号表示函数体
var f = () => 5;
// 等同于
var f = function () {
   return 5
};

var foo = (num1, num2) => {
   if (num1 > num2) {
       return num1 * 2;
   } else {
       return num2 * 2;
   }
};
//foo(2,3);
//foo(3,2);
// 等同于 ES5的写法
var foo = function (num1, num2) {
   if (num1 > num2) {
       return num1 * 2;
   } else {
       return num2 * 2;
   }
};
//foo(2,3);
//foo(3,2);

///////////////////////////////////
var max = function (a, b) {
   return a > b ? a : b;
};

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

// 等同于
function full({ first, last }) {
 return last + ' ' + first;
}
full({first:"Ming",last:"Li"});


//////////////////////////////////////////////////////////////////
// Part1 方法中的函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);


// Part2 方法中的函数嵌套 this缺陷 ES5中通过软绑定解决办法
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//思考并回顾：如何用call或apply间接调用的方法解决this指向问题？？？

//ES6中 箭头函数中this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
//箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        var moveToX = ()=>this.x=x;
        //内部嵌套函数
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

//思考：如何通过bind方法解决this指向问题

//通过箭头函数可以有效避免this指向问题

//
// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数

//思考函数中的this ES5中如何解决
function foo() {
    setTimeout(function(){
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 21

//查看下例中箭头函数的写法和结果
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42
//箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42
//其实箭头函数里面没有自己的this，而是引用外层的this

//其实箭头函数里面没有自己的this，而是引用外层的this
//由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向
function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

//////////////////////////////////////////////////////////////////
//需要特别注意：
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ({ id: itemId, name: "Temp" });
//getTempItem(23);

//等效于
var getTempItem = function (itemId) {
    return { id: itemId, name: "Temp" }
};
//getTempItem(23);
