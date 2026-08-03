let daftarRestoran =[
    {
        nama: "Restoran A",
        rating: 4.5,
        status: "Buka"
    },
    {
        nama: "Restoran B",
        rating: 4.2,
        status: "Tutup"
    },
    {
        nama: "Restoran C",
        rating: 4.8,
        status: "Buka"
    }
];

function filterRestoran(daftarRestoran) {
    for (let i = 0; i < daftarRestoran.length; i++) {
       if (daftarRestoran[i].status === "Buka" && daftarRestoran[i].rating >= 4.5) {
        console.log(`${daftarRestoran[i].nama} || Rating : ${daftarRestoran[i].rating},status : ${daftarRestoran[i].status} (Direkomendasikan)`);
       } else if (daftarRestoran[i].status === "Buka" && daftarRestoran[i].rating < 4.5) {
                console.log(`${daftarRestoran[i].nama} || Rating : ${daftarRestoran[i].rating} ,status : ${daftarRestoran[i].status}  (Tidak direkomendasikan)`);
            }
}
}
filterRestoran(daftarRestoran);