// const calcAge2 = (birthyear) => 2023 - birthyear;

// console.log(calcAge2(1998));

function cutFruitPices(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePices = cutFruitPices(apples);
  const orangePices = cutFruitPices(oranges);

  const juice = `Juice with ${applePices} apples and ${orangePices} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));
