// find out the ticket price

function ticketPrice(number) {
  let price = 1;
  if (number < 100) {
    price = number * 100;
  } else if (number > 100 && number < 200) {
    price = number * 100;
  } else {
    price = number * 70;
  }
  return price;
}

console.log(ticketPrice(90));
