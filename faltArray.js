console.time('array')
function flaternArray(nestArray) {
    let flatArray = []

    function Helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                Helper(arr[i])
            } else {
                flatArray.push(arr[i])
            }
        }
    }
    if (Array.isArray(nestArray)){
        Helper(nestArray)
    }else{
        console.log('Input is not array')
    }
    return flatArray
}
let nestedArray = [1,2,'Kanhu',3,4,5,[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(flaternArray(nestedArray)) 
console.timeEnd('array')