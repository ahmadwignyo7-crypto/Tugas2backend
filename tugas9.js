let skor =[956, 670, 899, 789, 498];
skor.sort((a,b) => b-a)
console.log(skor);
let status
function prosesLeaderboard (skor){
    for(let i =0; i<skor.length; i++){
        if(skor[i] >=900){
            status = "Gold Tier";
        } else if (skor[i] >=700) {
            status ="Silver tier"
        } else {
            status="Bronxe Tier"
        }
        console.log(`pemain ${i + 1} Skor ${skor[i]} : ${status}`)
    }
    }
prosesLeaderboard(skor)