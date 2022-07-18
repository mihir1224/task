let jsonData = [
  { id: 1, name: "Soda", price: 3.12, cost: 1.04, size: "4oz" },
  { id: 2, name: "Beer", price: 6.5, cost: 2.45, size: "8oz" },
  { id: 3, name: "Juice ", price: 7.89, cost: 3.45, size: "6oz" },
  { id: 4, name: "saffron", price: 24.5, cost: 12.05, size: "2oz" },
  { id: 5, name: "Margarita", price: 12.99, cost: 4.45, size: "12oz" },
];

const abc = (value) => {
  let array = [];
  for (let i of jsonData) {
    if (i.cost > 2.45) {
      array.push(i.name);
    }
  }
  return array;
};
console.log(abc(2.45));
