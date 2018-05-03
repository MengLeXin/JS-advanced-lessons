//创建数组的不同方式
var arr1 = [1,2,3,"4"];

var arr2 = new Array(5);//思考var arr2 = new Array("5");
console.log(arr2);
for(var i=0;i<arr2.length;i++){arr2[i] = i;}

var i = 2,b=[];
b[i]=3;//b[2]=3
b[i+1]="YY";//b[3]=YY
b[b[i]]= b[0];//b[3]=empty=b[0]
console.log(b);//b[1]=empty
//(4) [empty × 2, 3, undefined]

//增删改查
var a = ["hello"];
a[1] = 3.14;//增：直接添加数组元素，通过方法添加元素参见后续章节
a[2] = "world";
console.log("删除a[2]前的数组a",a);
delete a[2];//删：思考此时数组长度是2还是3？如何彻底删除？直接修改length与pop方法
console.log("删除a[2]后的数组a",a);
a[0] = "XX";//改：修改数组元素a[0]
console.log(a[0]);//查:看数组中的元素，索引从0开始

//
var arr=[,,];
console.log(arr.length);//2
//最后逗号后的数不存在

