const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"],
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"],
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ],
};

document.getElementById("changeNumber").innerHTML = person.message;
const containerDiv = document.getElementById("containerDiv");
person.result.map((el) => {
  // console.log(el.age);
  // console.log(el.name.common);
  // console.log(el.address.street);
  const creatDiv = document.createElement("div");
  creatDiv.classList.add("w-1/2");
  creatDiv.classList.add("m-9");
  creatDiv.innerHTML = `

  <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-col">

    <div class="w-full">
      <div class="bg-slate-100 w-full border-2">

        <h2 class="text-gray-900 text-lg title-font font-medium mb-3 p-1">Person Name: <span>${el.name.common}</span>
        </h2>
      </div>
      <p class="leading-relaxed text-base p-2">Age: <span class="font-bold text-gray-900
        ">${el.age}</span></p>
      <p class="leading-relaxed text-base p-2">Street: <span class="font-bold text-gray-900
        ">${el.address.street}</span></p>

    </div>
  </div>
  `;

  containerDiv.appendChild(creatDiv);
});
