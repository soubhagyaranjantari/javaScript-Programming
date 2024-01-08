const kanhu={
    name:"kanhu",
    sayName:function(){
        console.log(this.name);
    }
}
// setTimeout(kanhu.sayName.bind(kanhu),3*1000)

// setTimeout(() => {
//     kanhu.sayName()
// }, 3000);

const newFun=kanhu.sayName.bind(kanhu)
// console.log(newFun);
// kanhu.sayName()
setTimeout(newFun,3000)