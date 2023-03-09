const getID = (id) => document.getElementById(id);

getID("addItem").addEventListener("click", (e) => {
  e.preventDefault();
  getItem();
});

const getItem = () => {
  const item = getID("itemName").value;
  const quantity = getID("quantity").value;
  showItem(item, quantity);
  setILocalStore(item, quantity);
};

const showItem = (item, quantity) => {
  const container = getID("showItem");
  container.innerHTML += `<li> ${item}: ${quantity}`;
};

const getStroredShoopingCart = () => {
  let cart = {};
  const stroredCard = localStorage.getItem("cart");
  if (stroredCard) {
    cart = JSON.parse(stroredCard);
  }
  return cart;
};

const setILocalStore = (key, item) => {
  const cart = getStroredShoopingCart();
  cart[key] = item;
  const cartStringFy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringFy);
};
