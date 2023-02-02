function reverStr(text) {
  
  let arr = []
  for (let i = text.length-1; i >= 0; i--){
    arr.push(text[i])
  }
  return arr
}

const res = reverStr("helllo");

console.log(res);
