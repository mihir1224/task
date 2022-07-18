// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// let count = 1;

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i + 1; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // creating spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // creating numbers
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += k;
  }
  string += "\n";
}
console.log(string);
