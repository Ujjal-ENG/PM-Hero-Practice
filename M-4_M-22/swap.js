let first = 5;
let second = 7;
let swap;

// 1st approach for swaping
// swap = first;
// first = second;
// second = swap;

// 2nd apporach for swaping
[first, second] = [second, first];

console.log(first, second);
