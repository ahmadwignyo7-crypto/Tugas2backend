function gajiMinggu(jamKerja) {
  let totalJamKerja = 0;
  const gajiDasar = 50000;
  const gajiLembur = 75000;
  let totalGaji = "";
for(let i =0; i < jamKerja.length; i++){
  totalJamKerja += jamKerja[i];
  if (totalJamKerja > 40) {
    const jamLembur = totalJamKerja - 40;
    totalGaji = (40 * gajiDasar) + (jamLembur * gajiLembur);
  } else {
    totalGaji = totalJamKerja * gajiDasar;
  }
}
return {
    totalJamKerja,
    totalGaji
};0
}
const hasil = gajiMinggu([8, 9, 8, 10, 9, 4, 7]);
console.log(`Total jam kerja selama seminggu: ${hasil.totalJamKerja} jam`);
console.log(`total gaji jam kerja normal: ${hasil.totalJamKerja - (hasil.totalJamKerja - 40)} jam || Rp ${hasil.totalGaji - (hasil.totalJamKerja - 40) * 75000}`);
console.log(`total gaji jam kerja lembur: ${hasil.totalJamKerja - 40} jam || Rp ${(hasil.totalJamKerja - 40) * 75000}`);
console.log(`Total gaji bersih mingguan: Rp ${hasil.totalGaji}`);