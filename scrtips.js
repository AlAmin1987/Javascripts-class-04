// Type conversion
// const inputNumber = "7500";
// console.log(inputNumber + 10);
// console.log(Number(inputNumber));

// const bitthYear = 1990;
// console.log(bitthYear);
// console.log(typeof bitthYear);
// console.log(String(bitthYear));
// console.log(typeof bitthYear);

// const country = "Bangladesh";
// // console.log(Number(country));
// // console.log(typeof country);
// console.log(Boolean(country));

// console.log(Boolean(inputNumber));

// 2 Javascript Type coercion
// let bookNumber = 5;
// console.log(" I have" + " " + bookNumber + " story book");

// console.log("20" - 4);
// // console.log("20" + 6); [Note : Differnt only plus]
// console.log("20" * 5);
// console.log("20" / 4);
// console.log("20" - "5");
// console.log(50 + 10 - 5 + 3 - 4 + "6");

// 3.Javascript Truthy & Falsy value

// [Note : kind of 5 differnt type flasy value]

// 1.0;
// 2.""
// 3.null;
// 4.undefined
// 5.Nan;

// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(2));
// console.log(Boolean("Country"));

// let job = 0;
// if (job) {
//   console.log("I have a good salary");
// } else {
//   console.log("I can't good salary");
// }
// let job = 1;
// if (job) {
//   console.log("I have a good salary");
// } else {
//   console.log("I can't good salary");
// }

// let salary;
// if (salary) {
//   console.log("My salary Is High");
// } else {
//   console.log("My salary in't high");
// }
// let salary = 30000;
// if (salary) {
//   console.log("My salary Is High");
// } else {
//   console.log("My salary in't high");
// }

// 4.Conditional  Statement
// let earning = 50000;
// if (earning > 35000) {
//   console.log("His earning is very good ammount");
// } else {
//   console.log("His earning is not very good ammount");
// }

// let salary = 36000;

// if (salary <= 30000) {
//   console.log("His montly income is very poor");
// } else {
//   console.log("His monthly income in very high");
// }

// let salary = 20000;

// if (salary > 20000) {
//   console.log("His life is very comfortable");
// } else {
//   console.log("His life is't very comfortable");
// }

// if (salary > 20000) {
//   console.log("Its very good ammount to maintanant for live");
// } else if (salary <= 10000) {
//   console.log("Its very poor ammount for live");
// } else if (salary > 20000) {
//   console.log("Its not bad");
// } else {
//   console.log("Its very very bad ammount for living");
// }

// 5.Nested condition

// let messi = 10;

// if (10 < 11) {
//   console.log("Messi Will Post the goal bar");
// }
// if (10 > 11) {
//   console.log("Messi Will play full time");
// }
// if (11 == 10) {
//   console.log("Messi will not playing eleven");
// } else {
//   console.log("Messi will goal from planty cick");
// }

// 6. swith statement
let day = "Monday";

switch (day) {
  case "Saturday":
    console.log("Today 9pm is our main live class");
    break;
  case "Sunday":
    console.log("Today 9 pm is our main support class");
    break;

  case "Monday":
    console.log("Today 9 pm is our main live class");
    break;

  case "Twesday":
    console.log("Today 9 pm is our main support class");
    break;
  case "Wednessday":
    console.log("Today 9 pm is our main live class");
    break;

  case "Thirsday":
    console.log("Today 9 pm is our main support class");
    break;
  default:
    console.log("Today is our Holiday");
}
