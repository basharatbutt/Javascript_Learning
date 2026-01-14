let obj = {
    name: "Basharat",
    Car:"Civic",
    Model:2003,
    DaysofDriving:["Monday","Sunday"]
}
// console.log(obj)
let tinderuser={};
tinderuser.name="Basharat"
tinderuser.class=12

// console.log(tinderuser)

let obj1 = {
    1:"a",
    2:"b"
}
let obj2 = {
    2:"c",
    3:"d"
}
let obj3 = {...tinderuser,...obj1, ...obj2,};
// console.log(obj3)

console.log(Object.values(obj))