// const resturant = {
//   name: "Classico Italiano",
//   location: "Via Angela",
//   categories: ["Italian", "Pizzeria", "Vegetraian", "Organic"],
//   startMenu: ["Focaccia", "Bruschesta", "Garlic Bread", "Capress Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

// let data = {
//   Sophia: {
//     id: 33,
//     study: [
//       {
//         primary: [
//           { school_name: "ABC primary school" },
//           { location: "Peters burg" },
//         ],
//       },
//       {
//         secondary: [
//           { school_name: "ABC secondary school" },

//           { location: "St Lorence" },
//         ],
//       },
//     ],
//   },
// };

// console.log(data.Sophia.study[1].secondary[1].location, school_name);

let data = [
  {
    pHeroCourses: {
      "course-x": "web development",
    },
  },
  {
    pHeroCourses: {
      "course-y": "phitron",
    },
  },
  {
    pHeroCourses: {
      "course-z": "acc",
    },
  },
  {
    pHeroCourses: {
      "course-xyz": "level-2",
    },
    locationField: {
      "en-US": {
        lat: 19.28563,
        lon: 72.8691,
      },
    },
  },
];

console.log(data[3].pHeroCourses["course-xyz"]);
console.log(data[3].locationField["en-US"]["lon"]);
