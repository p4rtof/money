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
    let jumlahHariMasuk = Number(document.getElementById('jumlahHariMasuk').value) || 0;
    let lembur = Number(document.getElementById('lembur').value) || 0;

    let totalLembur = lembur * 100000;
    let totalGajiFix = (gajiHarian * jumlahHariMasuk) + totalLembur - hutang;

    console.log("Gaji Harian:", gajiHarian); // Cek di console
    console.log("Total:", totalGajiFix);

    document.getElementById('totalGajiFix').innerText = "Rp. " + totalGajiFix.toLocaleString('id-ID');
}