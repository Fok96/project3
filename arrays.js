const table = [5,6,7,4,2,6,7,8,9];
console.log(table.sort());

table.forEach(p=>{
    console.log(p);
});
console.log("---")
const x= table.map(a => {
    return(a*3);
})
console.log(x);
const z= x.map(i=> {
    return i *2;

})
console.log(z);

console.log("--")

const myNum = x.find(i=> i==12);
console.log("my number is : " +myNum);

const selectedNums = x.filter(i=> i>12 && i<20);
console.log(selectedNums);