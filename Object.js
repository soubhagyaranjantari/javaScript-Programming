// const cal={
//     hight:100
// }
// console.log(cal);
// console.log(cal.hight);
// delete cal.hight
// console.log(cal.hight);


// const any=Object.create({
//     hight:50
// })
// console.log(any);
// console.log(any.hight);
// delete any.hight
// console.log(any.hight);

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve(randomNum);
      } else {
        reject('Error: Random number is less than 0.5');
      }
    }, 1000);
  });
  
  myPromise
    .then(result => console.log('Resolved:', result))
    .catch(error => console.error('Rejected:', error));
  