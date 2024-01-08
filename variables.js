var variable=100;
(
    ()=>{
        console.log('first',variable);{
            let variable=10
            console.log(variable);
        }
        variable=50
        console.log('sec',variable);
    }
)()
console.log('third',variable);
 variable=25
console.log('four',variable);