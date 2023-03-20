// Code your solutions in this file

/*

for (let age = 30; age < 40; age++) {
  console.log(`I'M ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(names, event) {
  const newArray = [];
  for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
  }
  return newArray;
}

console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

console.log("");
console.log("");

function countDown(num) {
  let i = num;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);
