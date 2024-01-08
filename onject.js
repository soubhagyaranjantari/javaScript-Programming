var name='kanhu';

const person={
    name:"Soubhagya",
    prop:{
        name:"Tarai",
        getFullName:function () {
           return('name is ',this.name);
        }
    },
    getFullNamev1:function name(params) {
        return('my name is '+this.name);
    },
    getFullNamev2:()=>{
        return("all name",this.name);
    },
    getFullNamev3:(
        ()=>{
            return('immidiate',this);
        }
    )()
}
console.log(name);
console.log(person.name);
console.log(person.prop.getFullName());
console.log(person.getFullNamev1());
console.log(person.getFullNamev2());
console.log(person.getFullNamev3);
