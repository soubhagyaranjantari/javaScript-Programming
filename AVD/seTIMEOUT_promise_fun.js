function any(){
    console.log("A");
}
setTimeout(()=>console.log("B"),0)
fetch('https://api.github.com/').then((response)=>{
    console.log('res',response);
    return response.json()
}).then((result)=>{
    console.log('result',result);
})
any()
console.log("C");
Promise.resolve().then(()=>console.log("D"))
// const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//       console.log(mutation.type); // Mutation type: "attributes", "childList", or "characterData"
//     });
//   });
  
// if (typeof MutationObserver !== 'undefined') {
//     // MutationObserver is supported, proceed with your code
//     const observer = new MutationObserver(mutations => {
//       // Your callback logic here
//     });
  
//     const targetNode = document.getElementById('targetElement');
//     const config = { attributes: true, childList: true, subtree: true };
  
//     observer.observe(targetNode, config);
//   } else {
//     console.error('MutationObserver is not supported in this environment.');
//   }
  