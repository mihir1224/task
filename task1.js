const recipe = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0002",
    type: "donut",
    name: "Raised",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0003",
    type: "donut",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
];

// function object(typeName) {
//   for (let i of recipe) {
//     for (let j of i.batters.batter)
//       if (j.type == typeName) {
//         console.log(i);
//       }
//   }
// }
// object("Regular");

// //1)
// const donutHavingThatTopping = (toppingName) => {
//   const obj = [];
//   recipe.map((x) => {
//     for (const i of x.topping) {
//       if (i.type == toppingName) {
//         obj.push(x);
//       }
//     }
//   });
//   return obj;
// };
// const donutName = donutHavingThatTopping("Maple");
// console.log(donutName);

// function f1(toppingName) {
//   for (let a of recipe) {
//     for (let i of a.topping) {
//       if (i.type == toppingName) {
//         console.log(a);
//       }
//     }
//   }
// }
// f1("Sugar");

// function abc(idNo) {
//   for (let m of recipe) {
//     for (let n of m.batters.batter) {
//       if (n.id == idNo) {
//         console.log(m.topping);
//       }
//     }
//   }
// }
// abc("1001");

const abc = (IdNo) => {
  let a = [];
  for (let m of recipe) {
    for (let n of m.batters.batter) {
      if (n.id == IdNo) {
        a.push(m.topping);
      }
    }
  }
  return a;
};
console.log(abc("1004"));

// function countOfTopping(toppingName) {
//   for (let x of recipe) {
//     // for (let y of topping) {
//     if (x.name == toppingName) {
//       console.log(x.topping.length);
//     }
//   }
// }

// countOfTopping("Cake");

// //2)
// console.log("*************************");
// const getToppingCount = (name) => {
//   let count = 0;
//   let index = recipe.findIndex((x) => {
//     return x.name === name;
//   });
//   if (index != -1) {
//     count = recipe[index].topping.length;
//   }
//   return count;
// };
// console.log(getToppingCount("Cake"));

// //3)
// console.log("*************************");
// const func = (batterName) => {
//   const obj = [];
//   recipe.filter((x) => {
//     for (let i of x.batters.batter) {
//       if (i.type == batterName) {
//         obj.push(x);
//       }
//     }
//   });
//   return obj;
// };
// const ac = func("Chocolate");
// console.log(ac);

// //4)
// console.log("*************************");
// const donutCountBasedOnBatters = (name) => {
//   let counter = 0;
//   for (const i of recipe) {
//     if (i.batters.batter) {
//       console.log(i.batters.batter);
//       for (const batter of i.batters.batter) {
//         if (batter.type == name) {
//           counter++;
//         }
//       }
//     }
//   }
//   return counter;
// };
// const donutObj = donutCountBasedOnBatters("Blueberry");
// console.log(donutObj);

// //5)
// console.log("*************************");
// const ppuRange = (to, form) => {
//   const ppuDetailsInThatRange = recipe.filter(
//     (x) => x.ppu > to && x.ppu < form
//   );
//   return ppuDetailsInThatRange.length;
// };
// console.log(ppuRange(0, 10));

// //6)
// console.log("*************************");
// var chocolates = [];
// var glazed = [];
// function getChocolateAndGlazed(list) {
//   recipe.map((x) => {
//     if (x.type === "Chocolate") {
//       chocolates.push(l);
//     } else if (x.type === "Glazed") {
//       glazed.push(x);
//     } else {
//     }
//   });
// }
// // data.map((d) => getChocolateAndGlazed(d.topping));
// // console.log("chocolates=>", chocolates);
// // console.log("glazed=>", glazed);
// const final = [...chocolates, ...glazed];
// console.log(final);

// //////////////////////////////////////////////////////////////////////////////
// //functions
// // console.log(car(2, 3));
// // function car(ab, cd) {
// //   const output = `mihir have ${ab} car and prince have ${cd} car.`;
// //   return output;
// // }

// // const car1 = function (ab, cd) {
// //   const output = `mihir have ${ab} car and prince have ${cd} car.`;
// //   return output;
// // };
// // console.log(car1(2, 3));

// // const car2 = (ab, cd) => {
// //   const output = `mihir have ${ab} car and prince have ${cd} car.`;
// //   return output;
// // };
// // console.log(car2(2, 3));

// const data = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const ab = data.reduce((x, y) => {
//   return x.concat(y);
// });
// console.log(ab);

// //function calling another function
// const carPrice = (price) => {
//   return price * 2;
// };

// const carName = (Tesla, Audi) => {
//   const TeslaPrice = carPrice(Tesla);
//   const AudiPrice = carPrice(Audi);

//   const car = `tesla price is ${TeslaPrice} and audi price is ${AudiPrice}`;
//   return car;
// };

// console.log(carName(4, 5));

// const calcAverage = (a, b, c) => {
//   return a + b + c / 3;
// };
// console.log(calcAverage(44, 23, 71));

// // const calcAverage1 = () => {
// //   console.log(44 + 23 + 71 / 3);
// // };
// // calcAverage1();

// const scoreDolphins = calcAverage(4444, 23, 71);
// const scoreKoalas = calcAverage(65, 544, 109);
// console.log(scoreDolphins, scoreKoalas);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} Vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} Vs. ${avgDolphins})`);
//   } else {
//     console.log("no one win the trophy");
//   }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// //challenge
// // function calcTip(bill) {
// //   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// // }
// // const bills = [125, 555, 44];
// // const total = [
// //   calcTip(bills[0]),
// //   calcTip(bills[1]),
// //   calcTip(bills[bills.length - 1]),
// // ];
// // console.log(total);

// // const self = {
// //   firstName: "mihir",
// //   lastName: "kahar",
// //   age: 21,
// //   hobby: function (hobby) {
// //     console.log("hello");
// //   },
// // };

// // const abc = prompt("Hello! How Are You? Choose Any One...");
// // console.log(self[abc]);

// //challenge
// // const introJohn = {
// //   name: "John Smith",
// //   mass: 78,
// //   height: 1.69,
// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };
// // const introMark = {
// //   name: "Mark Miller",
// //   mass: 92,
// //   height: 1.95,
// //   calcBMI: function () {
// //     this.bmi = this.mass / this.height ** 2;
// //     return this.bmi;
// //   },
// // };

// // introJohn.calcBMI();
// // introMark.calcBMI();

// // console.log(introJohn.bmi, introMark.bmi);

// // if (introJohn.bmi > introMark.bmi) {
// //   console.log(
// //     `${introJohn.name} BMI (${introJohn.bmi}) is higher than ${introMark.name} (${introMark.bmi})`
// //   );
// // } else {
// //   console.log(
// //     `${introJohn.name} BMI (${introJohn.bmi}) is greater than ${introMark.name} (${introMark.bmi})`
// //   );
// // }

// // for (let i = 0; i <= 100; i++) {
// //   console.log(`${i} bottle vodka, kam mera roj ka.`);
// // }

// // for (let a = 1; a < 4; a++) {
// //   console.log(`----Starting Exercise----${a}`);

// //   for (let j = 1; j <= 5; j++) {
// //     console.log(`repetation sets number ${j}`);
// //   }
// // }

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i <= bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

// const output = pets.reduce((obj, pet) => {
//   if (!obj[pet]) {
//     obj[pet] = 1;
//   } else {
//     obj[pet]++;
//   }
//   return obj;
// }, {});
// console.log(output);

// var officers = [
//   { id: 20, name: "Captain Piett" },
//   { id: 24, name: "General Veers" },
//   { id: 56, name: "Admiral Ozzel" },
//   { id: 88, name: "Commander Jerjerrod" },
// ];

// const a = officers.map((x) => x.id);
// console.log(a);

// const arr = [5, 1, 3, 2, 6];

// const b = arr.map((x) => x * 2);
// const c = arr.map((x) => x * 3);
// const d = arr.map((x) => x.toString(2));
// console.log(b, c, d);

// const e = arr.filter((x) => x % 2 !== 0);
// console.log(e);

// const sum = arr.reduce((acc, val) => {
//   return (acc = acc + val);
// }, 0);
// console.log(sum);

// const max = arr.reduce((acc, curr) => {
//   acc = acc > curr;
//   return curr;
// }, 0);
// console.log(max);

// const users = [
//   { firstName: "akshay", lastName: "saini", age: 26 },
//   { firstName: "donald", lastName: "trump", age: 75 },
//   { firstName: "elon", lastName: "musk", age: 50 },
//   { firstName: "deepika", lastName: "padukon", age: 26 },
// ];

// const fullName = users.map((x) => x.firstName + " " + x.lastName);
// console.log(fullName);

// const Ages = users.reduce((obj, ages) => {
//   if (!obj[ages.age]) {
//     obj[ages.age] = 1;
//   } else {
//     obj[ages.age]++;
//   }
//   return obj;
// }, {});
// console.log(Ages);

// const outputs = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(outputs);

// const only = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc = [...acc, curr.firstName];
//   }
//   return acc;
// }, []);
// console.log(only);
