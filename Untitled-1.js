const details = [
  {
    name: "abc",
    email: "abc@gmail.com",
    address: "adajan",
    dob: "23-01-1994",
    city: "surat",
    married: "yes",
    children: "no",
  },
  {
    name: "mihir",
    email: "mihir@gmail.com",
    address: "nanpura",
    dob: "23-01-2001",
    city: "surat",
    married: "no",
    children: "yes",
  },
  {
    name: "prince",
    email: "prince@gmail.com",
    address: "adajan",
    dob: "23-01-2005",
    city: "chikhli",
    married: "yes",
    children: "yes",
  },
  {
    name: "miaryan",
    email: "aryan@gmail.com",
    address: "vesu",
    dob: "23-01-2009",
    city: "surat",
    married: "yes",
    children: "no",
  },
];
//1)
console.log("------1st Question------");
const marriedPeoples = (object) => {
  const marriedPeople = details.filter((x) => x.married === object);
  return marriedPeople;
};
// const marriedPeople = marriedPeoples("yes");
// console.log(marriedPeople);
console.log(marriedPeoples("yes"));

//2)
console.log("------2nd Question------");
const marriedAndChildren = (obj1, obj2) => {
  const marriedYesChildrenNoPeoples = details.filter(
    (x) => x.married === obj1 && x.children === obj2
  );
  return marriedYesChildrenNoPeoples;
};
// const childrenNoMarriedYes = marriedAndChildren("yes", "no");
// console.log(childrenNoMarriedYes);
console.log(marriedAndChildren("yes", "no"));

//3)
console.log("------3rd Question------");
const birthDate = (fDate, lDate) => {
  const dateOfBirth = details.filter((x) => x.dob > fDate && x.dob < lDate);
  return dateOfBirth;
};
// const birthDateBetweenThere = birthDate("23-01-1994", "23-01-2009");
// console.log(birthDateBetweenThere);
console.log(birthDate("23-01-1994", "23-01-2009"));

//4)
console.log("------4th Question------");
const firstLetterOfName = (ele) => {
  const nameStartsWithElement = details.filter((x) => x.name.startsWith(ele));
  return nameStartsWithElement;
};
// const nameStartsWithThis = firstLetterOfName("m");
// console.log(nameStartsWithThis);
console.log(firstLetterOfName("m"));

///////
// const arr = function (name) {
//   return name.startsWith('a');
// };
// const oo = arr('mihir');
// console.log(oo);

// let dobYear = abc.map(a => a.dob);
// console.log(dobYear);
// for (const dobD of dobYear) console.log(dobD.split('-').slice(-1));
