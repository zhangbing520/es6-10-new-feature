//Generator入门
// 语法： *+yield
function * loop(){
    for(let i=0;i<5;i++){
        yield console.log(i)
    }
}

const l=loop()
l.next() //0
l.next() //1
//从而可以在外面调用循环内的内容。


