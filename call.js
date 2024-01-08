const kanhu={
    name:'kanhu',
    sayName:function name(params) {
        console.log('kanhu obj',this.name);
    }
}
const anil={
    name:'anil',
    sayName:function name(params) {
        console.log('anil obj',this.name);
    }
}
// kanhu.sayName()
// anil.sayName()
kanhu.sayName.call(anil)