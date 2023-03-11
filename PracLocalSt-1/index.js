document.getElementById("clearStorage").addEventListener("click", () => {
  localStorage.clear();
});

// document.getElementById("additem").addEventListener("click", () => {
//   let nameLocal = JSON.parse(localStorage.getItem("name")) || [];
//   let ageLocal = JSON.parse(localStorage.getItem("age")) || [];

//   // get the name and age inputs
//   const name = document.getElementById("nameInput").value;
//   const age = document.getElementById("ageInput").value;

//   // create a user object with name and age
//   let newName = { name: name };
//   let newAge = { age: age };

//   // push the user object to the array
//   nameLocal.push(newName);
//   ageLocal.push(newAge);

//   // store the array in local storage under a key
//   localStorage.setItem("name", JSON.stringify(nameLocal));
//   localStorage.setItem("age", JSON.stringify(ageLocal));
//   const showContainer = document.getElementById("itemContainer");
//   showContainer.innerHTML += `<li>Name: ${name} and Age: ${age}</li>`;
// });

document.getElementById("count").addEventListener("click", () => {
  const value = document.getElementById("countValue").innerText;
  let valueConver = Number(value);
  ++valueConver;
  document.getElementById("countValue").innerText = valueConver;
  localStorage.setItem("count", valueConver);
});

console.log(JSON.parse(localStorage.getItem("count")));

document.getElementById("countValue").innerText = JSON.parse(
  localStorage.getItem("count")
);

document.getElementById("addItem").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    if (e.target.id === "addName") {
      setItem("name", "nameInput");
    }
    if (e.target.id === "deleteName") {
      console.log("dName");
    }
    if (e.target.id === "addAge") {
      setItemAge("age", "ageInput");
    }
    if (e.target.id === "deleteAge") {
      deleteAge("age", "343");
    }
  } else return;
});

const setItem = (key, valueID) => {
  let NameContainer = JSON.parse(localStorage.getItem(key)) || [];
  const name = document.getElementById(valueID).value;
  let names = { name: name };
  NameContainer.push(names);
  localStorage.setItem(key, JSON.stringify(NameContainer));
  return;
};

const setItemAge = (key, valueID) => {
  let NameContainerage = JSON.parse(localStorage.getItem(key)) || [];
  const age = document.getElementById(valueID).value;
  let ages = { age: age };
  NameContainerage.push(ages);
  localStorage.setItem(key, JSON.stringify(NameContainerage));
  return;
};

const deleteAge = (key, value) => {
  let ages = JSON.parse(localStorage.getItem(key));

  // find the index of the item you want to delete
  let index = ages.findIndex(function (age) {
    return age.age === value;
  });

  // remove the item at that index using splice()
  ages.splice(index, 1);

  // store the modified array back to local storage under the same key
  localStorage.setItem("ages", JSON.stringify(ages));
};
