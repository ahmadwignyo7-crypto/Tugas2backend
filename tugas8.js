function antreanPasien(kategoriUsia) {
    let kategori = "";
    for (let i = 0; i < kategoriUsia.length; i++) {
         if (kategoriUsia[i] > 60) {
            kategori = " prioritas Lansia";
    } else {
        kategori = "Antrean Reguler";
    }
    console.log(`pasien ${i + 1} dengan usia ${kategoriUsia[i]} loket : ${kategori}`);
}
}
antreanPasien([55, 88, 23, 62]);
