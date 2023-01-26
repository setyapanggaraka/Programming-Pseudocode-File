// Soal nomor 2

let firstNumber = 0;
let secondNumber = 1;
let nextNumber;
let count = 20;
console.log(firstNumber);
console.log(secondNumber);
for (let i = 2; i < count; i++) {
  nextNumber = firstNumber + secondNumber;
  console.log(nextNumber);
  firstNumber = secondNumber;
  secondNumber = nextNumber;
}
