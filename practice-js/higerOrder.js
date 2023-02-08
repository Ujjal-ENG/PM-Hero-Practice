// higher order function

function hello() {
  return () => {
    console.log("higer order function");
  };
}

hello()();
