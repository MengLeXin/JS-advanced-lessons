function add(x,y,f){
    return f(x) + f(y)
}
add(2,3,function(){
        return x+1;
    }
);//f(2)=2+1   f(3)=3+1   f(x)+f(y)=7
add(2,3,Math.sqrt);//2的开平方加3的开平方


//filter 数组过滤 ，返回为false的将被过滤掉
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]

// sort 排序
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]