// let arr = [1, 2, 3, 6, 5, 8];

// let sum = arr.reduce((accum, curr) => accum + curr);

// console.log(sum);

const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

const petCounts = pets.reduce(function (obj, pet) {
  if (obj[pet]) {
    obj[pet] += 1;
  } else {
    obj[pet] = 1;
  }
  return obj;
}, {});

console.log(petCounts);

// var arr = [
//   { id: 1, name: "Android", score: 20 },
//   { id: 2, name: "Php", score: 10 },
//   { id: 3, name: "React", score: 40 },
//   { id: 4, name: "React Native", score: 30 },
// ];

// //calculate the score
// const out = arr.reduce((acc, arr) => {
//   return acc + arr.score;
// }, 0);
// console.log(out);

// find the highest score element from the array
/*const mb = arr.reduce(function(old,b){

            return (old.score || 0) > b.score ? old : b;

        },{});
        console.log(mb)*/

//searching data in array
// const bm = arr.reduce((result, item) => {
//   if (item.id === 2) {
//     result = item;
//   }
//   return result;
// }, null);
