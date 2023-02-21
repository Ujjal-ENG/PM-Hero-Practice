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

// let data = [
//   {
//     pHeroCourses: {
//       "course-x": "web development",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-y": "phitron",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-z": "acc",
//     },
//   },
//   {
//     pHeroCourses: {
//       "course-xyz": "level-2",
//     },
//     locationField: {
//       "en-US": {
//         lat: 19.28563,
//         lon: 72.8691,
//       },
//     },
//   },
// ];

// console.log(data[3].pHeroCourses["course-xyz"]);
// console.log(data[3].locationField["en-US"]["lon"]);

let activities = {
  activity1: [
    {
      name: "listen on spotify",

      song_list: {
        song_1: "abc",
        song_2: "bcd",
      },
      id: 1,
    },
    {
      name: "listen music through bot",

      song_list: {
        song_1: "wxy",
        song_2: "xyz",
      },
      id: 2,
    },
  ],
};

console.log(activities.activity1[0]["song_list"]["song_1"]);
console.log(activities.activity1[1]["song_list"]["song_2"]);
