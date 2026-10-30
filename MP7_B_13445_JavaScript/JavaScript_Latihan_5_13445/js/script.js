function fn_ValForm() {
    var sNama = document.getElementById("nama").value;
    var sEmail = document.getElementById("email").value;
    var sUmur = document.getElementById("umur").value;
    var sKategori = document.getElementById("kategori").value;

    var sPesan = "";

    if (sNama == "") {
        sPesan += "Anda belum mengisikan nama\n";
    }
    if (sEmail == "") {
        sPesan += "Anda belum mengisikan email\n";
    }
    if (sUmur == "") {
        sPesan += "Anda belum mengisikan umur\n";
    }
    if (sKategori == "") {
        sPesan += "Anda belum memilih paket member\n";
    }

    if (sPesan != "") {
        alert(sPesan);
        return false;
    }

    var oPolaEmail = /^[a-z0-9][a-z0-9\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (!oPolaEmail.test(sEmail)) {
        alert("Format email salah! Harus menggunakan huruf kecil.");
        return false;
    }

    var iUmur = parseInt(sUmur);
    if (isNaN(iUmur) || iUmur < 17 || iUmur > 65) {
        alert("Umur harus berupa angka di antara 17 sampai 65 tahun.");
        return false;
    }

    var sInfo = "";
    if (iUmur <= 25) {
        sInfo = "Paket Pelajar";
    } else {
        sInfo = "Paket Umum";
    }

    var sPilihanPaket = "";
    switch (sKategori) {
        case "S":
            sPilihanPaket = "Silver";
            break;
        case "G":
            sPilihanPaket = "Gold";
            break;
        case "P":
            sPilihanPaket = "Platinum";
            break;
    }

    alert("Terima kasih " + sNama + "! Anda terdaftar di paket " + sPilihanPaket + " (" + sInfo + ").");
    return true;
}
