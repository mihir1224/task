"use strict";
const studentDetails = [
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
    dob: "23-02-2000",
    city: "surat",
    married: "no",
    children: "yes",
  },
  {
    name: "prince",
    email: "prince@gmail.com",
    address: "adajan",
    dob: "23-01-1997",
    city: "chikhli",
    children: "yes",
    married: "yes",
  },
  {
    name: "miaryan",
    email: "aryan@gmail.com",
    address: "vesu",
    dob: "23-03-2002",
    city: "surat",
    married: "yes",
    children: "no",
  },
];

// /////////////////////////////////
console.log("----1st answer----");
const marriedStudent = (object) => {
  const arrayOfStudents = [];
  studentDetails.map((a) => {
    if (a.married === object) {
      arrayOfStudents.push(a);
    }
  });
  return arrayOfStudents;
};

console.log(marriedStudent("yes"));

// // /////////////////////////////////
console.log("----2nd answer----");
const marriedAndChildren = (object1, object2) => {
  const array = [];
  studentDetails.map((x) => {
    if (x.married === object1 && x.children === object2) {
      array.push(x);
    }
  });
  return array;
};
// const marriedYesAndNoChildren = marriedAndChildren("yes", "no");
// console.log(marriedYesAndNoChildren);
console.log(marriedAndChildren("yes", "no"));

// // /////////////////////////////////
// // console.log("----3rd answer----");
// // const birthDate = (date1, date2) => {
// //   const birthDateArray = [];
// //   studentDetails.map((d) => {
// //     if (d.dob > date1 && d.dob < date2) {
// //       birthDateArray.push(d);
// //     }
// //   });
// //   return birthDateArray;
// // };
// // // const studentBirthDateBetweenThere = birthDate("23-01-1994", "23-03-2002");
// // // console.log(studentBirthDateBetweenThere);
// // console.log(birthDate("23-01-1994", "23-03-2002"));

// // /////////////////////////////////
// // console.log("----4th answer----");
// // const firstElementOfStudentName = (string) => {
// //   const studentArray = [];
// //   studentDetails.map((c) => {
// //     if (c.name.startsWith(string)) {
// //       studentArray.push(c);
// //     }
// //   });
// //   return studentArray;
// // };
// // // const studentDetailsNameStartsWith = firstElementOfStudentName("m");
// // // console.log(studentDetailsNameStartsWith);
// // console.log(firstElementOfStudentName("m"));

const assignTo = [
  {
    class_id: ["61f4ca2469540b32a365f51e"],
    status: "Evaluated",
    _id: "61f4e14269540b32a365fb45",
    student_id: "61f4c72469540b32a365f24b",
    school_id: "61f3b9056992fe58b6805c75",
    comment: null,
  },
  {
    class_id: null,
    status: "Pending",
    _id: "61f762dd69540b32a366327e",
    student_id: "61f5318569540b32a366129d",
    school_id: null,
  },
  {
    class_id: null,
    status: "Re-work",
    _id: "61f762dd69540b32a366327f",
    student_id: "61f531f969540b32a366132a",
    school_id: null,
  },
  {
    class_id: null,
    status: "Submitted",
    id: "61f762dd69540b32a366327e",
    student_id: "61f5318569540b32a366129d",
    school_id: null,
  },
  {
    class_id: null,
    status: "Submitted",
    _id: "61f762dd69540b32a366327f",
    student_id: "61f531f969540b32a366132a",
    school_id: null,
  },
  {
    class_id: ["61f4ca2469540b32a365f51e"],
    status: "Evaluated",
    _id: "61f4e14269540b32a365fb46",
    student_id: "61f4c74269540b32a365f285",
    school_id: "61f3b9056992fe58b6805c75",
    comment: null,
  },
];

const countPending = (object) => {
  let count = 0;
  let index = assignTo.map((x) => {
    return x.status === object;
  });
  if (index != -1) {
    count = assignTo[index].status.length;
  }
  return count;
};
console.log(countPending("Pending"));

// // const countPending = (ab) => {
// //   let count = 0;
// //   for (let i = 0; i <= assignTo.length; i++) {
// //     if (assignTo.status === ab);
// //   }
// //   return count++;
// // };
// // console.log(countPending("Pending"));

// // const countPending = (object) => {
// //   const abc = assignTo
// //     .filter((x) => x.status === object)
// //     .map((x) => x.student_id);

// //   return abc;
// // };
// // console.log(countPending("Pending"));

// const self = {
//   file: [
//     "https://gravity-dev1.s3.ap-south-1.amazonaws.com/1643438401653th%20%281%29.jpg",
//     "https://gravity-dev1.s3.ap-south-1.amazonaws.com/1643438402020th.jpg",
//   ],
//   forward: "false",
//   links: [],
//   startDate: "2022-01-28T18:30:00.000Z",
//   StartTime: "2022-01-29T06:37:00.000Z",
//   EndTime: "2022-01-31T06:37:00.000Z",
//   EndDate: "2022-01-30T18:30:00.000Z",
//   dueDate: "2022-01-30T18:30:00.000Z",
//   publish_date: "2022-01-29T06:40:01.912Z",
//   like_by: [],
//   archive_status: "Yes",
//   assignment_started: [],
//   going: [],
//   not_going: [],
//   going_by_parent: [],
//   not_going_by_parent: [],
//   going_by_teacher: [],
//   not_going_by_teacher: [],
//   acknowledge_started_by: [],
//   createdAt: "2022-01-29T04:19:48.674Z",
//   updatedAt: "2022-01-29T04:19:48.674Z",
//   repository: [
//     {
//       id: "61f3b9056992fe58b6805c75",
//       repository_type: "School",
//       branch: "",
//       class_id: "",
//       school_id: "",
//     },
//   ],
//   activity_status: "none",
//   forwarded_teacher_id: [],
//   _id: "61f4e14269540b32a365fb44",
//   activity_type: "Assignment",
//   title: "Assignment 1 29 Jan 12.07",
//   teacher_id: {
//     secondary_class: [],
//     _id: "61f4dce169540b32a365f91f",
//     username: "7022304303",
//     name: "Imran",
//     mobile: 7022304303,
//     profile_type: "5fd2f18f9cc6537951f0b35c",
//     school_id: "61f3b9056992fe58b6805c75",
//     branch_id: "growon",
//     primary_class: "",
//   },
//   like: 0,
//   view: 2,
//   publishedWith: "You",
//   subject: "Computer science",
//   coin: 20,
//   description: "assignment for feedback option",
//   status: "Evaluated",
//   assignTo_you: [],
//   assignTo_parent: [],
//   assignTo: [
//     {
//       class_id: ["61f4ca2469540b32a365f51e"],
//       status: "Evaluated",
//       _id: "61f4e14269540b32a365fb45",
//       student_id: "61f4c72469540b32a365f24b",
//       school_id: "61f3b9056992fe58b6805c75",
//       comment: null,
//     },
//     {
//       class_id: [],
//       status: "Pending",
//       _id: "61f762dd69540b32a366327e",
//       student_id: "61f5318569540b32a366129d",
//       school_id: null,
//     },
//     {
//       class_id: [],
//       status: "Re-work",
//       _id: "61f762dd69540b32a366327f",
//       student_id: "61f531f969540b32a366132a",
//       school_id: null,
//     },
//     {
//       class_id: [],
//       status: "Submitted",
//       _id: "61f762dd69540b32a366327e",
//       student_id: "61f5318569540b32a366129d",
//       school_id: null,
//     },
//     {
//       class_id: [],
//       status: "Submitted",
//       _id: "61f762dd69540b32a366327f",
//       student_id: "61f531f969540b32a366132a",
//       school_id: null,
//     },
//     {
//       class_id: ["61f4ca2469540b32a365f51e"],
//       status: "Evaluated",
//       _id: "61f4e14269540b32a365fb46",
//       student_id: "61f4c74269540b32a365f285",
//       school_id: "61f3b9056992fe58b6805c75",
//       comment: null,
//     },
//   ],
//   submited_by: [
//     {
//       submitted_date: "2022-01-30T06:44:10.660Z",
//       _id: "61f4e23b69540b32a365fb9f",
//       student_id: "61f4c72469540b32a365f24b",
//       message: [
//         {
//           file: [
//             "https://gravity-dev1.s3.ap-south-1.amazonaws.com/16434386508651639559501314null-20211214-WA0004.jpg",
//           ],
//           submitted_date: "2022-01-29T06:44:10.660Z",
//           evaluator: false,
//           _id: "61f4e23b69540b32a365fba0",
//           text: "Assignment submitted by Aster gates",
//         },
//       ],
//     },
//     {
//       submitted_date: "2022-01-31T07:55:44.333Z",
//       _id: "61f4f30069540b32a365fd6f",
//       student_id: "61f4c74269540b32a365f285",
//       message: [
//         {
//           file: null,
//           submitted_date: "2022-01-29T07:55:44.333Z",
//           evaluator: false,
//           _id: "61f4f30069540b32a365fd70",
//           text: "submitted by maria",
//         },
//       ],
//     },
//   ],
//   options: [],
//   selected_checkList: [],
//   selected_livepool: [],
//   acknowledge_by: [],
//   acknowledge_by_parent: [],
//   acknowledge_by_teacher: [],
//   comment: [],
//   __v: 0,
//   rewardsData: {},
// };

// // console.log(self.dueDate.toString());
// // for (let c of self.submited_by) {
// //   console.log(c.submitted_date);
// // }

// // function getStudentId() {
// //   let a = [];
// //   for (let y of self.submited_by) {
// //     if (self.dueDate > y.submitted_date) {
// //       // console.log(y);
// //       a.push(y);
// //     }
// //   }
// //   return a.length;
// // }
// // console.log(getStudentId());

// // function getStudentData() {
// //   const ab = self.submited_by.filter((x) => {
// //     if (self.dueDate > x.submitted_date) {
// //       return true;
// //     }
// //     return false;
// //   });
// //   console.log(ab);
// // }
// // getStudentData();

// ///////////////////////////////////////////////////

// // fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((x) =>
// //   console.log(x)
// // );

// // let ABC = function getStudentData() {
// // var promise = new Promise((resolve, reject) => {
// //   const ab = self.submited_by.filter((x) => {
// //     if (self.dueDate > x.submitted_date) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   });
// //   if (ab.length == 0) resolve(ab);
// //   else reject("no data");
// //   // console.log(ab);
// // });
// // // };
// // promise
// //   .then(function (data) {
// //     console.log("yup!", data);
// //   })
// //   .catch(function (data) {
// //     console.log("nope ", data);
// //   });

// /////////////////////////////////////////////////////////////////

// // function getStudentId() {
// //   let promise = new Promise((resolve, reject) => {
// //     let a = [];
// //     for (let y of self.submited_by) {
// //       if (self.dueDate > y.submitted_date) {
// //         a.push(y);
// //         resolve;
// //       }
// //     }
// //   });
// //   return a.length;
// // }
// // console.log(getStudentId());

// // var date1 = new Date("2022-01-28T18:30:00.000Z");
// // console.log(date1.getUTCMinutes());
// // console.log(date1.getUTCSeconds());
// // console.log(date1.getUTCMonth() + 1);
// // console.log(date1.getUTCFullYear());
// // console.log(date1.getUTCDate());
// // console.log(date1.getUTCHours());
// // console.log(date1.toString());
// // console.log(date1.toLocaleString());

// // console.log("************************************************");
// // const StartTime = new Date("2022-01-29T06:37:00.000");
// // console.log(StartTime.getHours());
// // console.log(StartTime.getMinutes());
// // console.log(StartTime.getSeconds());
// // console.log(StartTime.getMonth() + 1);
// // console.log(StartTime.getFullYear());
// // console.log(StartTime.getDate());

// // const studentId = (object) => {
// //   const abc = self.assignTo
// //     .filter((x) => x.class_id == object)
// //     .map((x) => x.status);

// //   return abc;
// // };

// // console.log(studentId("61f4ca2469540b32a365f51e"));

// // (function studentId() {
// //   for (let i of self.assignTo) {
// //     if (i.class_id.length) {
// //       console.log(i.status);
// //     } else {
// //       console.log("empty");
// //     }
// //   }
// // })();

// // const countPending = (object) => {
// //   const abc = self.assignTo
// //     .filter((x) => x.status === object)
// //     .map((x) => x.student_id);

// //   return abc;
// // };
// // console.log(countPending("Pending"));

// // const studentData = [
// //   {
// //     student_id: "61f4c72469540b32a365f24b",
// //     name: "mihir",
// //     address: "nanpura",
// //   },
// //   {
// //     student_id: "61f5318569540b32a366129d",
// //     name: "prince",
// //     address: "adajan",
// //   },
// //   {
// //     student_id: "61f4c74269540b32a365f285",
// //     name: "harsh",
// //     address: "cozway",
// //   },
// //   {
// //     student_id: "",
// //     name: "parshva",
// //     address: "adajan",
// //   },
// //   {
// //     student_id: "",
// //     name: "meet",
// //     address: "valsad",
// //   },
// // ];

// // const check = self.assignTo.student_id == studentData.class_id;
// // console.log(check);

// // function getStudentNameId(object) {
// //   for (let i of self.assignTo) {
// //     for (let j of studentData) {
// //       if (i.student_id == j.student_id && i.student_id == object) {
// //         return j;
// //       }
// //     }
// //   }
// // }
// // console.log(getStudentNameId("61f5318569540b32a366129d"));

// // const getName = (id) => {
// //   for (let a of studentData) {
// //     if (a.student_id == id) {
// //       return a;
// //     }
// //   }
// // };
// // console.log(getName(""));

// // const getObject = (ID) => {
// //   const def = studentData.filter((x) => x.student_id == ID);
// //   return def;
// // };
// // console.log(getObject(""));

// // function getStatus(studentName) {
// //   for (let i of studentData) {
// //     for (let j of self.assignTo) {
// //       if (i.student_id === j.student_id && i.name === studentName) {
// //         return j.status;
// //       }
// //     }
// //   }
// // }
// // console.log(getStatus("harsh"));

// // const array1 = [1, 2, 3, 4, 5];
// // const array2 = [4, 5, 6, 7, 8];

// // let array3 = [...array1, ...array2];
// // let output = [...new Set(array3)];
// // console.log(output);

// // let output = [...array1, ...array2];

// // let output = [].concat(array1, array2);
// // console.log(output);

// // function mergeNoDuplicates(...arrays) {
// //   let mergedArray = [];

// //   arrays.forEach((array) => {
// //     mergedArray = [...mergedArray, ...array];
// //   });

// //   const mergedUnique = mergedArray.filter(
// //     (item, index) => mergedArray.indexOf(item) === index
// //   );
// //   return mergedUnique;
// // }
// // console.log(mergeNoDuplicates(array1, array2));

// // const output = array1.concat(array2);
// // const hi = output.filter((a, b) => output.indexOf(a) === b);
// // console.log(hi);

// // console.log(Array.from(new Set(array1.concat(array2))));

// // const arr3 = [...new Set([...array1, ...array2])];
// // console.log(arr3);

// // let arr = [];
// // let diff = ans.filter((ele) => (!arr.includes(ele) ? arr.push(ele) : ""));
// // console.log(arr);

// // let a = ["abc", "xyz"];
// // let b = ["xyz"];
// // let c = ["pqr"];

// // // let c = [...a, ...b];
// // // console.log(c);

// // console.log(a + b + c);
// // console.log("*************");
// // const d = a.concat(...b, ...c);
// // const e = d.join("");
// // console.log(e);

// // var s = ["Wind", "Water", "Fire"];
// // console.log(s.join(""));

// // const a = [];
// // const b = [];
// // console.log(typeof a);
// // console.log(a == b);
// // console.log(a === b);

// // console.log(a.length === 0);
// // console.log(!a.length === 0);

// // const array = [
// //   {
// //     id: 1,
// //   },
// //   {
// //     id: 2,
// //   },
// //   {
// //     id: 3,
// //   },
// //   {
// //     id: 4,
// //   },
// //   {
// //     id: 5,
// //   },
// // ];
// // console.log(a.indexOf(3));

// // const index = array.findIndex((x) => x.id == 3);
// // console.log("index:" + index);

// // const years = [2001, 2002, 2003, 2004, 2005, 2006, 2008, 2007, 2009, 2010];

// // let arrayOfData = [];
// // for (let year of years) {
// //   const Obj = {};
// //   Obj["year"] = year;
// //   Obj["Is Leap year"] = isPrimeNumber(year);
// //   arrayOfData.push(Obj);
// // }
// // function isPrimeNumber(year) {
// //   return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
// // }
// // console.log(arrayOfData);

// // ////////////////////////////////////////////////////////////

// // function checkLeapYear() {
// //   let a = [];

// //   for (let x of years) {
// //     if ((x % 4 == 0 && x % 100 != 0) || x % 400 == 0) {
// //       a.push("year:" + x + " " + "isLeapYear:" + Boolean(x));
// //     } else {
// //     }
// //   }
// //   return a;
// // }
// // console.log(checkLeapYear());

// // const arr = [
// //   [1, 3, 2],
// //   [4, 5, 1],
// //   [7, 8, 6],
// // ];
// // const mi = arr.flat();
// // let mihir = [];
// // const hii = mi.forEach((c) => {
// //   if (!mihir.includes(c)) {
// //     mihir.push(c);
// //   }
// // });
// // mihir.sort((a, b) => b - a);
// // console.log(mihir);

// const obj = [
//   {
//     closed: false,
//     color: "#DAEDD9",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "Left Voice Mail",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#E8E226",
//     default: "",
//     labelColor: "#FAFAFA",
//     status: "Follow Up",
//     Prototype: Object,
//   },
//   {
//     closed: true,
//     color: "#037401",
//     default: "",
//     labelColor: "#F7F7F7",
//     status: "Completed",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#FF0000",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "URGENT MATTER",
//     Prototype: Object,
//   },
//   {
//     closed: true,
//     color: "#29E0AC",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "Canceled",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#000000",
//     default: "",
//     labelColor: "#000000",
//     status: "Testing",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#110EEC",
//     default: "Test 2",
//     labelColor: "#FFFFFF",
//     status: "Test 2",
//     Prototype: Object,
//   },
// ];

// /////////////////////////////////////////////////////////

// const obj1 = [
//   {
//     closed: false,
//     color: "#E8E226",
//     default: "",
//     labelColor: "#FAFAFA",
//     status: "Follow Up",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#DAEDD9",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "right Voice Mail",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#FF0000",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "URGENT MATTER",
//     Prototype: Object,
//   },
//   {
//     closed: true,
//     color: "#037401",
//     default: "",
//     labelColor: "#F7F7F7",
//     status: "Completed",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#000000",
//     default: "",
//     labelColor: "#000000",
//     status: "Testing",
//     Prototype: Object,
//   },
//   {
//     closed: true,
//     color: "#29E0AC",
//     default: "",
//     labelColor: "#FFFFFF",
//     status: "not Canceled",
//     Prototype: Object,
//   },
//   {
//     closed: false,
//     color: "#110EEC",
//     default: "Test 2",
//     labelColor: "#FFFFFF",
//     status: "Test 2",
//     Prototype: Object,
//   },
// ];

// // function object(isBoolean) {
// //   const objectOfClosed = obj.filter((x) => x.closed == isBoolean);
// //   return objectOfClosed;
// // }
// // const closedObj = object(false);
// // console.log(closedObj);

// // function object(isBoolean) {
// //   let aa = [];
// //   // const objectOfClosed = obj.filter((x) => x.closed == isBoolean);
// //   for (let i of obj) {
// //     if (i.closed == isBoolean) aa.push(i);
// //   }
// //   return aa;
// // }
// // const closedObj = object(false);
// // console.log(closedObj);

// // console.log("************************************");

// // function getObj(labelColorValue) {
// //   for (let i of obj) {
// //     if (i.labelColor == labelColorValue) {
// //       return i;
// //     }
// //   }
// // }
// // const labelColorObj = getObj("#F7F7F7");
// // console.log(labelColorObj);

// ////////////////////////////////////////////////////////////////////

// // function colorObj(ele, array) {
// //   const aa = array.filter((x) => ele.includes(x.color));
// //   return aa;
// // }
// // console.log(colorObj(["#E8E226", "#E8E226", "#29E0AC"], obj));

// ////////////////////////////////////////////////////////////////////

// // function colorObj(ele) {
// //   let emptyArr = [];
// //   for (let i of obj) {
// //     for (let j = 0; j <= ele.length; j++) {
// //       if (ele[j] == i.color) {
// //         emptyArr.push(i);
// //       }
// //     }
// //   }

// //   return emptyArr;
// // }
// // console.log(colorObj(["#E8E226", "#29E0AC"]));

// /////////////////////////////////////////////////////////////////////
// // function colorObj(...ele) {
// //   let emptyArr = [];
// //   for (let i of obj) {
// //     for (let j = 0; j <= ele.length; j++) {
// //       if (ele[j] == i.color) {
// //         emptyArr.push(i);
// //       }
// //     }
// //   }
// //   return emptyArr;
// // }
// // function array() {
// //   return ["#E8E226", "#000000", "#29E0AC"];
// // }
// // console.log(colorObj(...array()));

// // function colorObj(ele) {
// //   let emptyArr = [];
// //   for (let i of obj) {
// //     if (ele === i.color) {
// //       emptyArr.push(i);
// //     }
// //   }
// //   return emptyArr;
// // }
// // console.log(colorObj(["#E8E226", "#29E0AC"]));

// /////////////////////////////////////////////////////////////////////

// // function merge(listOfItem1, listOfItem2) {
// //   let ab = [];
// //   return ab.concat(listOfItem1, listOfItem2);
// // }
// // console.log(merge(obj, obj1));

// // function getObject() {
// //   for (let i of obj) {
// //     for (let j of obj1) {
// //       if (i.status != j.status && i.color == j.color) {
// //         console.log(i, j);
// //       }
// //     }
// //   }
// // }
// // getObject();

// //////////////////////////////////////////////////////////////////

// // function comparer(otherarray) {
// //   return function (current) {
// //     return (
// //       otherarray.filter(function (other) {
// //         return other.status == current.status;
// //       }).length == 0
// //     );
// //   };
// // }
// // let aaa = obj.filter(comparer(obj1));
// // let bbb = obj1.filter(comparer(obj));

// // const result = aaa.concat(bbb);
// // console.log(result);

// //////////////////////////////////////////////////////////////////

// // const isSameUser = (obj, obj1) => obj.status == obj1.status;

// // const onlyInLeft = (left, right, compareFunction) =>
// //   left.filter(
// //     (leftValue) =>
// //       !right.some((rightValue) => compareFunction(leftValue, rightValue))
// //   );

// // const onlyInA = onlyInLeft(obj, obj1, isSameUser);
// // const onlyInB = onlyInLeft(obj1, obj, isSameUser);

// // const result = [...onlyInA, ...onlyInB];

// // console.log(result);

// // const intro = () => {
// //   setTimeout(() => {
// //     console.log("hey");
// //     const en_roll = [1, 2, 3, 4];
// //     console.log(en_roll);

// //     setTimeout(
// //       (enroll) => {
// //         const data = {
// //           name: "mihir",
// //           age: 21,
// //         };
// //         console.log(
// //           `Hello, My name is ${data.name}. I'm ${data.age} years old.`
// //         );

// //         setTimeout(
// //           () => {
// //             data.hobby = "cricket";
// //             console.log(
// //               `Hello, My name is ${data.name}. I'm ${data.age} years old. I love to play ${data.hobby}`
// //             );
// //           },
// //           2000,
// //           data.name
// //         );
// //       },
// //       2000,
// //       en_roll[1]
// //     );
// //   }, 1000);
// // };
// // intro();

// // let max = Math.max(1, 3, 5);
// // console.log(max);

// // max = Math.max.apply(null, [1, 3, 5]);
// // console.log(max);

// // console.log("i am a " + job);
// // var job = "Web Developer";
// // console.log("i am a " + job);

// // function whoAmI() {
// //   console.log("i am a " + job);
// //   var job = "Web Developer";
// //   console.log("i am a " + job);
// // }
// // whoAmI();

// // const abc = {
// //   name: "mihir kahar",
// //   age: 21,
// //   sum: function () {
// //     console.log(this.name);
// //     var add = 2 + 2;
// //     console.log("sum of two no. is " + add);
// //     console.log(this);
// //   },
// // };
// // abc.sum();

// // const a = [1, 2, 5, 6, 5, 7, 6, 6, 8, 4];
// // const out = a.filter((xyz) => xyz < 6);
// // const out1 = a.filter((x) => {
// //   let abc = x * 2;
// //   abc = 5;
// //   abc = abc - 2;
// //   return abc < 6;
// // });

// // const out2 = a.filter((x) => {
// //   if (x < 6) {
// //     return true;
// //   }
// //   return false;
// // });
// // let out3 = [];
// // for (let i of a) {
// //   if (i < 6) {
// //     out3.push(i);
// //   }
// // }

// // console.log(out);
// // console.log(out1);
// // console.log(out2);
// // console.log(out3);

// // const a = [1, 2, 5, 6, 5, 7, 6, 6, 8, 4];
// // const out = a.filter((xyz) => xyz < 6);
// // const out1 = a.filter((x) => {
// //   x < 6;
// // });

// // console.log(out);
// // console.log(out1);

// // let divisibleBy2 = [];
// // let divisibleBy3 = [];
// // let divisibleBy5 = [];
// // let divisibleBy7 = [];

// // let sumOf2 = 0;
// // let sumOf3 = 0;
// // let sumOf5 = 0;
// // let sumOf7 = 0;
// // let sum = [];

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2 == 0) {
// //     sumOf2 += i;
// //   }
// //   if (i % 3 == 0) {
// //     sumOf3 += i;
// //   }
// //   if (i % 5 == 0) {
// //     sumOf5 += i;
// //   }
// //   if (i % 7 == 0) {
// //     sumOf7 += i;
// //   }
// // }

// // sum.push(sumOf2, sumOf3, sumOf5, sumOf7);
// // console.log(sum);

// // function sumOfFib(num) {
// //   let sumOfOdd = 0;
// //   let sumOfEven = 0;

// //   let prev = 1;
// //   let curr = 1;
// //   let next = 2;

// //   while (next <= num) {
// //     prev = curr;
// //     curr = next;
// //     next = prev + curr;

// //     if (curr % 2 !== 0) {
// //       sumOfOdd += next;
// //     }
// //     if (curr % 2 == 0) {
// //       sumOfEven += next;
// //     }
// //   }
// //   return { sumOfOdd, sumOfEven };
// // }
// // console.log(sumOfFib(20));

// // let fib = [1, 2];
// // let even = [];
// // let odd = [];
// // let evenSum = 0;
// // let oddSum = 0;
// // for (let i = fib.length; i < 20; i++) {
// //   fib[i] = fib[i - 2] + fib[i - 1];
// //   if (fib[i] % 2 == 0) {
// //     even.push(fib[i]);
// //     evenSum += fib[i];
// //   } else {
// //     odd.push(fib[i]);
// //     oddSum += fib[i];
// //   }
// // }
// // console.log(fib, even, odd);
// // console.log(evenSum, oddSum);

// const array1 = [2, 5, 10, 1, 2];
// const array2 = [5, 10, 5, 2, 7];

// const multiplication = (arr1, arr2) => {
//   let sum = [];
//   for (let i = 0; i < array1.length; i++) {
//     // for (let j = 0; j < array2.length; j++) {
//     const arr = arr1[i] * arr2[i];
//     sum.push(arr);
//   }

//   return sum;
// };
// console.log(multiplication(array1, array2));

// const givenFactorial = (num) => {
//   let empty = [];
//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       empty.push(i);
//     }
//   }
//   return empty;
// };
// console.log(givenFactorial(20));

// const primeOrNot = (number) => {
//   for (let i = 2; i <= number; i++) {
//     if (number % i == 0) {
//       return number + " is not Prime number";
//     } else {
//       return number + " is Prime number";
//     }
//   }
// };
// console.log(primeOrNot(7));

// // const abcd = (number) => {
// //   let fib = [0, 1];
// //   let even = [];
// //   let odd = [];
// //   for (let i = 2; i < number; i++) {
// //     fib.push(fib[i - 2] + fib[i - 1]);
// //     if (fib[i] % 2 == 0) {
// //       odd.push(fib[i]);
// //     } else {
// //       even.push(fib[i]);
// //     }
// //   }
// //   return { fib, odd, even };
// // };
// // console.log(abcd(20));

// // const fibonacci = (n) => {
// //   let fib = [0, 1];
// //   for (let i = 2; i < n; i++) {
// //     fib.push(fib[i - 2] + fib[i - 1]);
// //   }
// //   console.log(fib);
// // };

// // // console.log(fibonacci(20));

// // const diffOddEven = () => {
// //   const aaaa = fibonacci(20);
// //   let oddArr = [];
// //   let evenArr = [];
// //   for (let j = 0; j < fib.length; j++) {
// //     if (fib[j] % 2 == 0) {
// //       evenArr.push(fib[j]);
// //     } else {
// //       oddArr.push(fib[j]);
// //     }
// //   }
// //   return { evenArr, oddArr };
// // };
// // console.log(diffOddEven());

// const getUserSync = require("./src/getUserSync");

// const userOne = getUserSync(1);
// console.log(userOne);

// const userTwo = getUserSync(2);
// console.log(userTwo);

// const sum = 1 + 33;
// console.log(sum);
