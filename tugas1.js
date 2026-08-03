const hargaBuku = [50000, 75000, 40000];

function hitungTotalBuku(daftarHarga) {
    let total = 0;

    for (let i = 0; i < daftarHarga.length; i++) {
        total += daftarHarga[i];
    }

    let diskon = 0;

    if (total > 150000) {
        diskon = total * 15 / 100;
    }

    let totalBayar = total - diskon;

    console.log("Total Belanja : Rp", total);
    console.log("Diskon        : Rp", diskon);
    console.log("Total Bayar   : Rp", totalBayar);

    return totalBayar;
}

hitungTotalBuku(hargaBuku);