//try, catch and finally
// let a = 10;
// let b = 20;

// console.log(a + b);

// try {
//   a = 20;
//   console.log("yup!");
// } catch (error) {
//   console.log("error:you can't");
// } finally {
//   console.log("stop the execution part");
// }

// //1) ascending  and descending order
// const a = [10, 54, 25, 9, 66, 35, 2];

// const b = a.sort(function (a, b) {
//   return a - b;
// });
// console.log(b);

// const c = a.sort(function (a, b) {
//   return b - a;
// });
// console.log(c);

// ///////////////////////////////////////////////

// //2) asynchronous
// function abc() {
//   console.log("hello");
// }
// setTimeout(abc, 7000);
// console.log("hi");

// console.log("ye lo laddoo lo");

// //synchronous
// const asy = () => {
//   console.log("how are you");
// };
// asy();
// console.log("I'm fine");

// const obj = ["mihir", "prince", "meet", "abc", "kuchBhi"];

// // for(let i=0;i<obj.length;i++)
// for (let i in obj) console.log(i + obj[i]);
// console.log("========");

// // obj.forEach((i)=>{

// // })

//promises
// const output = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let roll_no = [1, 2, 3, 4, 5];
//     resolve(roll_no);
//     // reject(roll_no);
//   }, 3000);
// });

// const out = (index) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       (index) => {
//         let obj = {
//           name: "mihir",
//           age: 21,
//         };
//         resolve(
//           `My roll no is ${index}. My name is ${obj.name}. My age is ${obj.age}`
//         );
//       },
//       3000,
//       index
//     );
//   });
// };
// output
//   .then((rollNo) => {
//     console.log(rollNo);
//     return out(rollNo[1]);
//   })
//   .then((xyz) => {
//     console.log(xyz);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//async-await
// async function getData() {
//   const mi = await output;
//   console.log(mi);

//   const samsung = await out(mi[1]);
//   console.log(samsung);

//   return samsung;
// }
// const hey = getData().then((myname) => {
//   console.log(myname);
// });

//fetch()
// fetch("https://api.track-covid19.in/reports_v2.json")
//   .then((apiData) => {
//     return apiData.json();
//   })
//   .then((actualdata) => {
//     console.log(actualdatas.states);
//   })
//   .catch((error) => {
//     console.log(`the Error: ${error}`);
//   });

// const interview = (name) => {
//   if (name === "mihir") {
//     return function (topic) {
//       console.log(`hello ${name}. what is ${topic}?`);
//     };
//   }

//   if (name === "prince") {
//     return function (topic) {
//       console.log(`hello ${name}. what is ${topic}?`);
//     };
//   }
// };
// interview("mihir")("javaScript");
// interview("prince")("html");

// // for (let i = 99; i >= 0; i--) {
// //   console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
// //   console.log(
// //     `take one down and past in around, ${i - 1} bottles of beer on the wall.\n`
// //   );
// // }

// const person = (friend, friend2) => {
//   console.log(`i'm busy bcz i'm talking with ${friend}`);
//   friend2();
// };
// const person2 = () => {
//   console.log("i call you letter");
// };
// person("prince", person2);

// const self = {
//   name: "mihir",
//   age: 21,
//   interest: function (hobby) {
//     console.log(
//       `My name is ${this.name}. I'm ${this.age} years old. My hobby is ${hobby}`
//     );
//   },
// };
// const self1 = {
//   name: "prince",
//   age: 22,
// };

// self.interest.call(self1, "football");
// self.interest.apply(self1, ["gym"]);

// (function (name) {
//   console.log("hello " + name);
// })("mihir");

// (function (name) {
//   console.log("hello " + name);
// });
// ("mihir");

// const outer = (a) => {
//   let b = 4;
//   const inner = () => {
//     let sum = a + b;
//     console.log(`the two number of sum is ${sum}.`);
//   };
//   inner();
// };
// outer(4);

// const outer = (a) => {
//   let b = 4;
//   const inner = () => {
//     let sum = a + b;
//     console.log(`the sum of two number is ${sum}`);
//   };
//   return inner;
// };
// let innerFun = outer(4);
// console.log(innerFun);
// innerFun();

// const hey = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

// hey.forEach(function (index, n) {
//   console.log(index + "--" + n);
// });

// hey.forEach((n) => console.log(n));

// const array = [10, 20, 30, 50, 45, 67, 16, 84];

// const m = array.map((x) => x / 2);
// console.log(m);

// const h = array.map((x) => x.toString(2));
// console.log(h);

// const y = array.map((x) => x.toString(3));
// console.log(y);

// const c = array.findIndex((x) => x > 67);
// console.log(c);

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going to at ${this.speed} km/h.`);
};
car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going to at ${this.speed} km/h.`);
};

const out = new car("ab", 100);
const out1 = new car("de", 105);

out.accelerate();
out.break();

// const primeOrNot = (number) => {
//   let flag = 0;

//   for (let i = 2; i <= number / 2; i++) {
//     if (number % i == 0) {
//       flag = 1;
//       break;
//     }
//   }
//   if (flag == 0) {
//     console.log(number + " is Prime number");
//   } else {
//     console.log(number + " is not Prime number");
//   }
// };
// primeOrNot(10);
