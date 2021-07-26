//ES5+ES6中数组遍历的5种方法，以及他们之间的优缺点。

//es5的遍历方法******************
//for循环
const arr = [1, 2, 3, 4, 5]
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//forEach
arr.forEach(function (item) {
    console.log(item)
})//不支持break和continue
//forEach方法中的function回调有三个参数：第一个参数是遍历的数组内容，第二个参数是对应的数组索引，第三个参数是数组本身。
//[].forEach(function(value,index,array){code something}); 注意是先value后index

//every
arr.every(function (item) {
    console.log(item)
    return true
})//every的特性，返回值为false，停止遍历；true，继续遍历；可以用这种特性完成break和continue

//以上三种都是针对数组遍历设计的。

//下面这个是针对object对象遍历设计的。
//forin
let object=[1,2,3]
object.a="aaa";
for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key]; 
    }
}//输入for的时候会自动出现遍历结构补全，选择forin补全，就会自动生成这个结构。
//由于数组也是对象，所以也可以用这种方法遍历，但是也会把数组的其他属性也遍历出来。在数组的[]元素中，key是index，value是对应的元素值，但是要注意这里的key是字符串，不是数值，使用key*1，可以转化为数值。
//支持continue和break

//针对除了数组和object以外的对象进行遍历的，允许遍历自定义的数据结构。
//es6新增遍历语法 forof
for(let item of arr){
    console.log(item)
}

const Price={
    A:[1,2,3],
    B:[4,5,6],
    C:[7,8,9],
}
//forin是固定的遍历效果，是固定的遍历机制，并且只能遍历一层
for(let key in Price){
    console.log(key,Price[key])
}
//也可以将Price进行转化使其可遍历：
for (const [k,v] of Object.entries(Price)) {
    console.log(k,v)
}

//forof可以自定义遍历效果，例如遍历出ABC的最小值组成的结果。
for(let key of Price){
    console.log(key,Price[key])
}

//其他关于数组的静态方法：
//https://www.cnblogs.com/zhaixr/p/6848172.html