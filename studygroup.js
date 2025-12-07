console.log("-------Ezer Raditia Nayanta Sembiring-------");
let saudara = [
    {
        nama: "Moza Elmoyna Sembiring",
        umur: 13
    },
    {
        nama: "Osaze Maleakhi Sembiring",
        umur: 8
    },
    {
        nama: "Axel Bastanta Sembiring",
        umur: 2
    }
];

// Banyak saudara dalam 1 keluarga
let uangSaku = 50000;

// looping
for(let i = 0; i < saudara.length; i++) {
    let namaSaudara = saudara[i].nama;
    let umur = saudara[i].umur;
    let pesan = "";

    //percabangan
    if(umur < 5) {
        pesan = "Ditanggung Ortu!";
    } else if(umur <= 12) {
        pesan = "Dipotong 35000, Jadi: " + (uangSaku - 35000);
    } else if(umur <= 16) {
        pesan = "Dipotong 20000, Jadi: " + (uangSaku - 20000);
    } else {
        pesan = "Uang Saku Full: " + uangSaku;
    }

    console.log("Nama Saudara : " + namaSaudara);
    console.log("Umur         : " + umur + " tahun");
    console.log("Pesan        : " + pesan);
    console.log("--------------------------------------------")
}