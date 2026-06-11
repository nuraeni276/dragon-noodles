// 1. Logika Simulasi Pembaruan Data Dashboard dari Form Input
document.getElementById('form-aksi').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman bawaan form

    // Ambil elemen angka dashboard
    const labelTerjual = document.getElementById('stat-terjual');
    const labelLimbah = document.getElementById('stat-limbah');
    const labelBenih = document.getElementById('stat-benih');
    const labelKota = document.getElementById('stat-kota');

    // Ambil nilai pilihan status dari input formulir
    const statusAksi = document.getElementById('input-status').value;

    // Konversi teks angka dashboard saat ini ke tipe data Integer (Angka)
    let totalTerjual = parseInt(labelTerjual.innerText);
    let totalLimbah = parseInt(labelLimbah.innerText);
    let totalBenih = parseInt(labelBenih.innerText);
    let totalKota = parseInt(labelKota.innerText);

    // Jalankan kalkulasi penambahan data simulasi
    totalTerjual += 1; 
    totalLimbah += 1; // Asumsi per kemasan mengolah sekian porsi limbah

    if (statusAksi === 'tanam') {
        totalBenih += 1; // Ditambah jika memilih opsi sudah menanam
    }

    // Simulasi penambahan jumlah kota berpartisipasi secara acak kecil
    if (Math.random() > 0.7) {
        totalKota += 1;
    }

    // Render/tampilkan kembali hasil angka baru ke struktur HTML website
    labelTerjual.innerText = totalTerjual;
    labelLimbah.innerText = totalLimbah;
    labelBenih.innerText = totalBenih;
    labelKota.innerText = totalKota;

    // Memunculkan pesan sukses interaktif kepada user
    alert('Terima kasih! Laporan aksi hijau Anda berhasil terekam secara digital. Angka pada Dashboard Lingkungan telah diperbarui secara langsung!');
    
    // Reset isian formulir agar bersih kembali
    document.getElementById('form-aksi').reset();
});

// 2. Efek Otomatis Menu Navigasi Aktif Mengikuti Posisi Scroll Layar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#main-nav a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});