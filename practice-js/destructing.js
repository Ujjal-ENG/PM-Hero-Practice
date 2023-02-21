// const resturant = {
//   name: "Classico Italiano",
//   location: "Via Angela",
//   categories: ["Italian", "Pizzeria", "Vegetraian", "Organic"],
//   startMenu: ["Focaccia", "Bruschesta", "Garlic Bread", "Capress Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
// };

let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },

          { location: "St Lorence" },
        ],
      },
    ],
  },
};

console.log(data.Sophia.study[1].secondary[1].location, school_name);
