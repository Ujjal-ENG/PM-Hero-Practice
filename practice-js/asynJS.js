const processOrder = (customer) => {
  console.log("Customer Place the oder..");

  setTimeout(() => {
    console.log("Processing the order in restaurant");
  }, 3000);

  console.log("Order Serve to the customer");
};

processOrder("")
