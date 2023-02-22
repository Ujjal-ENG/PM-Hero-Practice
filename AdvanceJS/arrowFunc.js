let js = {
  name: "JS",
  libraries: ["React", "Angular", "Vue"],
  printLib: () => {
    js.libraries.forEach((el) => console.log(js.name + " lover " + el));
  },
  education: {
    degree: "Bsc",
    sub: ["CSE", "EEE", "TEX"],
  },
};

const {
  education: { sub },
} = js;
console.log(sub);
