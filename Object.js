const cal={
    hight:100
}
console.log(cal);
console.log(cal.hight);
delete cal.hight
console.log(cal.hight);


const any=Object.create({
    hight:50
})
console.log(any);
console.log(any.hight);
delete any.hight
console.log(any.hight);