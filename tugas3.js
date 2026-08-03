function filterPlat(plat, tanggal) {
    for (let i = 0; i<plat.length; i++) {
        let angkaTerahir = plat[i] % 10;
        const jenisPlat = angkaTerahir % 2 === 0 ? "Genap" : "Ganjil";

        if(angkaTerahir % 2 === tanggal % 2) {
            console.log(`${plat[i]} || Digit terahir : ${angkaTerahir} => ${jenisPlat} => Diizinkan masuk`);
        }else {
            console.log(`${plat[i]} || Digit terahir : ${angkaTerahir } => ${jenisPlat} => Tidak diizinkan masuk`);
        }
    }
}
let plat = [1234,56789,98762,11113];
filterPlat(plat, 31);