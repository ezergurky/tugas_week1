console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
console.log();

let namaPenjaga1 = "Judy Hopps";
let jarakLari1 = 3;
let totalJarak1 = 0;

let namaPenjaga2 = "Nick Wilde";
let jarakLari2 = 2;
let totalJarak2 = 0;

console.log("Jarak lari per hari: ");
console.log(namaPenjaga1 + ": " + jarakLari1, "km");
console.log(namaPenjaga2 + ": " + jarakLari2, "km");
console.log();

for(let i = 1; i <= 5; i++) {
    totalJarak1 += jarakLari1;
    totalJarak2 += jarakLari2;

    console.log("Hari " + i);
    console.log("- " + namaPenjaga1 + " lari " + jarakLari1, "km");
    console.log("- " + namaPenjaga2 + " lari " + jarakLari2, "km");
    console.log();
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(namaPenjaga1 + ": " + totalJarak1, "km");
console.log(namaPenjaga2 + ": " + totalJarak2, "km");