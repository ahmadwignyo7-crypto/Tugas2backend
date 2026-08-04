let mahasiswa = [ nilai = 4.7 , pendapatanOrtu =700000, status= "" ];
function seleksi(nilai , pendapatanOrtu) {
    
    if (nilai >= 3.5 && pendapatanOrtu <= 5000000) {
        status = "lolos"
    } else {
        status = "tidak lolos"
    }
}

console.log(`Nilai : ${nilai}`);
console.log(`Pendapatan orang tua : ${pendapatanOrtu}`);
seleksi(mahasiswa.nilai, mahasiswa.pendapatanOrtu);
console.log(`${status}`)