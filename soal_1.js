//// Soal nomor 1
let number = 50;
let text;
while (number <= 100) {
  if (number <= 60) {
    text = `${number} KURANG`;
  } else if (number > 60 && number <= 70) {
    text = `${number} CUKUP`;
  } else if (number > 70 && number <= 80) {
    text = `${number} BAIK`;
  } else if (number > 80) {
    text = `${number} LUAR BIASA`;
  }
  console.log(text);
  number += 5;
}
