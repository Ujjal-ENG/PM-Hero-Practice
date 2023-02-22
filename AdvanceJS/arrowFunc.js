let js = {
  name: "JS",
  libraries: ["React", "Angular", "Vue"],
  printLib: () => {
    js.libraries.forEach((el) => console.log(js.name + " lover " + el));
  },
};

js.printLib();
