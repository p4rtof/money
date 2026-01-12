function formatUang(input) {
    let angka = input.value.replace(/\D/g, '');
    input.value = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

document.getElementById('hitung-gaji').onclick = function() {
    
    function ambilAngka(id) {
        let nilai = document.getElementById(id).value;
        return Number(nilai.replace(/\./g, '')) || 0;
    }

    let gajiHarian = ambilAngka('gajiHarian');
    let hutang = ambilAngka('hutang');
    let bonus = ambilAngka('bonus');
    let jumlahHariMasuk = Number(document.getElementById('jumlahHariMasuk').value) || 0;

    // let totalbonus = bonus * 100000;
    let totalGajiFix = (gajiHarian * jumlahHariMasuk) + bonus - hutang;

    console.log("Gaji Harian:", gajiHarian); // Cek di console
    console.log("Total:", totalGajiFix);

    document.getElementById('totalGajiFix').innerText = "Rp. " + totalGajiFix.toLocaleString('id-ID');
}