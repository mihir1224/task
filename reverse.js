const string = "Hello How Are You";

const splits = string.split("").reverse().join("");
console.log(splits); // uoy erA woH olleH

const reverseString = string.split(" ").reverse().join(" ");
console.log(reverseString); // you Are How hello

const aa = string.split(" ").map((word) => word.split("").reverse().join(""));
console.log(aa.join(" ")); // olleh woH erA uoy
