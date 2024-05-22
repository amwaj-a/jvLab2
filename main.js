// -----------------------------------Qu1
console.log("-----------------------------------Qu1--------------");
for (let index = 0; index < 25; index += 2) {
  console.log(`even Number ${index}`);
}

// -----------------------------------Qu2
console.log("-----------------------------------Qu2--------------");
for (let index = 0; index <= 10; index++) {
  console.log(`mul Number ${index * index}`);
}

// -----------------------------------Qu3
console.log("-----------------------------------Qu3--------------");
for (let index = 0; index < 20; index += 3) {
  console.log(`Odd Number ${index}`);
}

// -----------------------------------Qu4
console.log("-----------------------------------Qu4--------------");
let x = 0;
for (let index = 0; index <= 10; index++) {
  x = index;
  if (index == 0) {
    console.log(index);
  } else {
    // index = index - x;
    console.log(index + "index");
    x = -index;
    index = index + x;
    console.log(+"x");
  }
}

// -----------------------------------Qu5
console.log("-----------------------------------Qu5--------------");
for (let index = 1; index <= 3; index++) {
  for (let i = 0; i <= 10; i++) {
    console.log(`mul Number ${index}* ${i}= ${index * i} `);
  }
}
