var devs = [
  {
    name: "A",
    age: 26,
    tech: ["JavaScript", "React"],
    addr: {
      country: "India",
      city: "Pune",
    },
  },
  {
    name: "B",
    age: 25,
    tech: ["Node", "AngularJs"],
    addr: {
      country: "USA",
      city: "NY",
    },
  },
  {
    name: "C",
    age: 27,
    tech: ["React", "AWS"],
    addr: {
      country: "UK",
      city: "London",
    },
  },
];

//const def = devs.filter(x=> x.tech.includes('React')).map(abc=> ;
//console.log(def)

const xyz = devs
  .filter((x) => x.tech.includes("React") && x.addr.country == "India")
  .map((x) => x.age);

console.log(xyz);
