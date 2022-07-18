var string = "Welcome to Glory Autotech";

function reverseWords(str) {
  let reverseWordArr = string
    .split(" ")
    .map((word) => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
console.log(reverseWords());

const reverseAll = () => {
  let reverseString = [];
  for (let a of string) {
    reverseString = a + reverseString;
  }
  return reverseString;
};
console.log(reverseAll());

// let array = [1, 2, 3, 4];

// console.log(array.concat(array)); //in array
// console.log(...array, ...array); // not in array

// const mul = (a,b,c)=>{

// }
// function xyz(x) {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     };
//   };
// }
// console.log(xyz(5)(4)(3));

//anagram
// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let a = str1.split("").sort().join("");
//   let b = str2.split("").sort().join("");

//   const result = a === b;
//   return result;
// };
// console.log(anagram("Glory", "ryoGl"));

// function WordCount(str, letter) {
//   var count = 0;
//   for (let i = 0; i < str.length; i++)
//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   return count;
// }

// console.log(WordCount("occurrence", "r"));

// function countChars(text) {
//   return text.split("").reduce((map, char) => {
//     return {
//       ...map,
//       [char]: (map[char] || 0) + 1,
//     };
//   }, {});
// }
// console.log(countChars("occurrence"));

// const countChar = (str) => {
//   const counts = {};
//   for (let s of str) {
//     if (counts[s]) {
//       console.log(s);
//       counts[s]++;
//     } else {
//       counts[s] = 1;
//     }
//   }
//   return counts;
// };

// console.log(countChar("occurrence"));

// const brackets = (str) => {
//   const string = str.split("");
//   let counter = 0;
//   for (let i = 0, len = string.length; i < len; i++) {
//     if (string[i] === "(") {
//       counter++;
//     } else if (string[i] === ")") {
//       counter--;
//     }
//     if (counter < 0) {
//       return false;
//     }
//   }
//   if (counter === 0) {
//     return true;
//   }
//   return false;
// };
// console.log(brackets("{a[bc]([ca]}"));

// function validBraces(braces) {
//   let opening = ["(", "[", "{"];
//   let closing = [")", "]", "}"];
//   let arr = [];

//   for (let i = 0; i < braces.length; i++) {
//     if (opening.includes(braces[i])) {
//       arr.push(braces[i]);
//     } else if (
//       closing.indexOf(braces[i]) === opening.indexOf(arr[arr.length - 1])
//     ) {
//       arr.pop();
//     } else return false;
//   }
//   return arr.length === 0;
// }
// console.log(validBraces("{a[bc]([ca])}"));

// function validBraces(braces) {
//   let opening = ["(", "[", "{"];
//   let closing = [")", "]", "}"];
//   let temp = [];

//   obj = {
//     "{": "}",
//     "(": ")",
//     "[": "]",
//   };

//   for (let i = 0; i < braces.length; i++) {
//     if (opening.includes(braces[i])) {
//       temp.push(braces[i]);
//     } else if (closing.includes(braces[i])) {
//       if (temp.length == 0) {
//         return false;
//       }

//       if (obj[temp.pop()] !== braces[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(validBraces("{a[bc]([ca]}"));

// const ab = ("a" + "b" + +"b" + "b" + "b").toLowerCase();
// console.log(ab);
