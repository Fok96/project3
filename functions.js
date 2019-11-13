const printname= (a,b) =>{
    console.log("hello "+ a + " "+ b);
}
let name = "george";
let surname = "pagonoudis"
console.log("hello" + name + " "+ surname);
let name2 = "dimos"
let surname2 = "karadimos";
console.log("hello " + name2 + " " +surname2);
let name3=("kappa");
let surname3=("dwro");
console.log("hello" + name3+ " "+surname3);


printname(name,surname2);

const power = (x) => {
    console.log(x*x);

};
power(9);

console.log("---------");

let d = new Date();
console.log(d);
console.log(d.getFullYear())
console.log(d.getMonth()+1);
console.log(d.getDate())
console.log(d.getUTCHours());