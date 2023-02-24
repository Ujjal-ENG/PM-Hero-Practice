const data = [
  {
    _id: "60795d4e0489a32f948c4167",
    name: "Honda Sedan",
    price: "132",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
    imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
  },
  {
    _id: "60795e440489a32f948c4168",
    name: "MitoSedan",
    price: "221",
    description:
      "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
  },
  {
    _id: "60795fc20489a32f948c4169",
    name: "Isuzu Tacoma",
    price: "105",
    description:
      "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
    imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
  },
  {
    _id: "6079615d0489a32f948c416a",
    name: "Chevrolet Crossover",
    price: "434",
    description:
      "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",
  },
];

const containerDiv = document.getElementById("container");

data.map((el) => {
  // console.log(el.name);
  // console.log(el.price);
  // console.log(el.description);
  // console.log(el.imageURL);
  const newDiv = document.createElement("div");

  newDiv.innerHTML = `
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="${
    el.imageURL === undefined ? "./person-1.jpeg" : `${el.imageURL}`
  }" alt="${el.name}" /></figure>
  <div class="card-body">
    <h2 class="card-title">CarName: ${el.name}</h2>
    <p>Car Details: ${el.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Car Price: ${el.price}</button>
    </div>
  </div>
</div>
  `;
  containerDiv.appendChild(newDiv);
});
