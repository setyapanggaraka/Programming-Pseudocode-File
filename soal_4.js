// Soal nomor 5

let x = 2005;
let satuan = [
  "",
  "Satu",
  "Dua",
  "Tiga",
  "Empat",
  "Lima",
  "Enam",
  "Tujuh",
  "Delapan",
  "Sembilan",
];
let belasan = [
  "",
  "",
  "Dua Puluh",
  "Tiga Puluh",
  "Empat Puluh",
  "Lima Puluh",
  "Enam Puluh",
  "Tujuh Puluh",
  "Delapan Puluh",
  "Sembilan Puluh",
];
let ratusan = [
  "",
  "Seratus",
  "Dua Ratus",
  "Tiga Ratus",
  "Empat Ratus",
  "Lima Ratus",
  "Enam Ratus",
  "Tujuh Ratus",
  "Delapan Ratus",
  "Sembilan Ratus",
];
let ribuan = [
  "",
  "Seribu",
  "Dua Ribu",
  "Tiga Ribu",
  "Empat Ribu",
  "Lima Ribu",
  "Enam Ribu",
  "Tujuh Ribu",
  "Delapan Ribu",
  "Sembilan Ribu",
];
let hasil = "";

let ribu = Math.floor(x / 1000);
let ratus = Math.floor((x % 1000) / 100);
let belas = Math.floor((x % 100) / 10);
let satu = x % 10;

if (ratus === 0) {
  hasil += ribuan[ribu] + " ";
} else {
  hasil += ribuan[ribu] + " ";
  hasil += ratusan[ratus] + " ";
}

if (belas === 1) {
  if (satu === 0) {
    hasil += "Sepuluh";
  } else if (satu === 1) {
    hasil += "Sebelas";
  } else {
    hasil += satuan[satu] + " Belas ";
  }
} else {
  if (ratus === 0) {
    if (belas > 0) {
      hasil += belasan[belas] + " ";
      hasil += satuan[satu];
    } else {
      hasil += belasan[belas];
      hasil += satuan[satu];
    }
  } else {
    hasil += belasan[belas] + " ";
    hasil += satuan[satu];
  }
}
console.log(hasil);
