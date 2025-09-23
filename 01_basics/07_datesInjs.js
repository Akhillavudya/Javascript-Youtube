// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());


let myDate= new Date();  //2025-09-23T21:11:51.617Z 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//output
// Tue Sep 23 2025 21:13:11 GMT+0000 (Coordinated Universal Time)
// Tue Sep 23 2025
// 9/23/2025, 9:13:11 PM
// object

// let myCreatedDate = new Date(2023, 0, 23) // 1/23/2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })