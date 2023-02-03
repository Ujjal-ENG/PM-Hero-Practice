const names = ["abul", "babul", "cabul", "tubul", "mubul", "abul", "babul"];

const removeDup = (arrs) => {
  const unique = [];
  for (let i = 0; i < arrs.length; i++) {
    const name = arrs[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
};

console.log(removeDup(names));
