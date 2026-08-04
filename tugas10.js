const daftarPendaftar = [
  "budi@gmail.com",
  "siti.aminah@yahoo.co.id",
  "andi@domain",      
  "rudihotmail.com",  
  "eka@sekolah.sch.id",
  "tanpa-format"      
];

function validasiDaftarEmai(daftarPendaftar){
    for(let i = 0; i < daftarPendaftar.length; i++){
        let simbol1 = daftarPendaftar[i].includes("@");
        let simbol2 = daftarPendaftar[i].includes(".");
        if(simbol1 == true && simbol2 == true){
            console.log(`Dafftar email :${daftarPendaftar[i]} || status email : valid`)
        } else {
           console.log(`Dafftar email :${daftarPendaftar[i]} || status email : tidak valid`) 
        }
    }
}
validasiDaftarEmai(daftarPendaftar)