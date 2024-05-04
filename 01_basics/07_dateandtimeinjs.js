// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof(myDate));



// const myCreatedDate = new Date(2024 , 0 , 4 , 20 , 19);
// const myCreatedDate = new Date("04-05-2024");
 const myCreatedDate = new Date('05-04-2024');
// console.log(myCreatedDate.toLocaleString());


// const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));



const newDate = new Date();
console.log(newDate.getUTCHours());
console.log(newDate.getMonth() + 1);

console.log(`Today is ${newDate.getDay()} and date is ${newDate.getDate()} and month is ${newDate.getMonth()+1} and year is ${newDate.getFullYear()}`);