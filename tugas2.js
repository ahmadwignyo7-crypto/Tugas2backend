const nilai = 3.7;
let pendapatanOrtu = 7000000;
let ststus = 0;

function seleksi(nilai, pendapatanOrtu) {
    if (nilai >= 3.5 && pendapatanOrtu <= 5000000) {
        status("lolos")
    } else {
        console.log("tidak lolos")
    }
}

console.log(`Nilai : ${nilai}`);
console.log(`Pendapatan orang tua : ${pendapatanOrtu}`);
seleksi(nilai, pendapatanOrtu);