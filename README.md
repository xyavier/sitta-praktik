# SITTA UT - Sistem Tracking & Informasi Bahan Ajar Universitas Terbuka

Repositori ini berisi kode sumber antarmuka (*frontend*) untuk **SITTA UT** (Sistem Informasi Bahan Ajar Universitas Terbuka), sebuah aplikasi berbasis web yang dirancang untuk mengelola inventaris stok bahan ajar serta melacak status pengiriman (*Tracking DO*) secara *real-time*.

---

## 🚀 Fitur Utama

1. **Dashboard Interaktif**
   - Menampilkan ucapan selamat datang dinamis berdasarkan waktu lokal pengguna.
   - Sistem autentikasi pengguna dengan hak akses (*role*) berbasis *local storage*.
2. **Informasi Stok Bahan Ajar**
   - Manajemen data bahan ajar menggunakan *reactive framework* (Vue.js).
   - Fitur interaktif seperti melihat detail bahan ajar (dengan *double-click*), menambah, mengedit, hingga menghapus data stok beserta unggah sampul buku.
3. **Tracking Pengiriman (Delivery Order)**
   - Sistem pelacakan nomor DO secara instan.
   - Visualisasi perjalanan paket (*timeline*) yang informatif dan terstruktur.

---

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan pendekatan modern yang memisahkan struktur statis dan manajemen reaktif data:
- **HTML5 & CSS3**: Struktur dasar halaman dan *styling* responsif (didukung oleh *Custom CSS* dan *Flexbox*).
- **JavaScript (ES6+)**: Logika aplikasi dan manipulasi data.
- **Vue.js (v3.4)**: *Progressive JavaScript Framework* yang bertindak sebagai jembatan reaktif (*reactive bridge* / `v-for`) untuk merender data secara dinamis ke dalam *DOM*.
- **SweetAlert2**: Pustaka eksternal untuk menampilkan kotak dialog (*popup alert*) yang modern dan intuitif.
- **FontAwesome**: Pustaka ikon vektor untuk mempercantik antarmuka tombol dan navigasi.

---

## 📁 Struktur Direktori Proyek

```text
fe-sitta-ut/
│
├── css/
│   └── style.css            # Berkas gaya utama aplikasi
├── img/                     # Aset gambar, ikon, dan sampul bahan ajar
├── js/
│   ├── data.js              # Kumpulan data dummy pengguna dan resi tracking
│   ├── dataBahanAjar.js     # Kumpulan data dummy stok bahan ajar
│   ├── script.js            # Logika umum (autentikasi & popup global)
│   ├── stock-app.js         # Logika reaktif Vue.js untuk halaman stok
│   └── tracking-app.js      # Logika reaktif Vue.js untuk halaman tracking
│
├── dashboard.html           # Halaman utama setelah login
├── stock.html               # Halaman informasi dan manajemen stok bahan ajar
├── tracking.html            # Halaman pelacakan pengiriman DO
└── login.html               # Halaman masuk sistem
```

---

## ⚙️ Cara Menjalankan Proyek (Installation & Usage)

Karena proyek ini menggunakan arsitektur *frontend-only* dengan pemuatan pustaka melalui CDN, Anda tidak memerlukan proses instalasi rumit seperti Node.js atau NPM *bundler* (`npm install`).

1. **Unduh atau *Clone* repositori ini:**
   ```bash
   git clone https://github.com/username-anda/fe-sitta-ut.git
   ```
2. **Buka folder proyek** di komputer Anda.
3. **Jalankan aplikasi:**
   - Disarankan menggunakan ekstensi **Live Server** di Visual Studio Code agar file berjalan melalui protokol lokal (`http://127.0.0.1`).
   - Atau, cukup klik dua kali pada berkas `login.html` untuk membukanya langsung di peramban web (*browser*).

---

## 👥 Akun Simulasi Login (Credentials)

Untuk menguji fitur login di dalam sistem, Anda dapat menggunakan salah satu akun berikut yang tersedia di `js/data.js`:

- **Admin Pusat:**
  - *Email:* `admin@ut.ac.id`
  - *Password:* `admin123`
- **UPBJJ Jakarta:**
  - *Email:* `ceker@ut.ac.id`
  - *Password:* `ceker123`

---

## 💡 Catatan Pengembangan (*Refactoring*)
Repositori ini telah melalui tahap *refactoring* dengan migrasi dari manipulasi *DOM* imperatif tradisional (Vanilla JS) menuju *declarative rendering* berbasis komponen reaktif Vue.js. Hal ini dilakukan untuk mengeliminasi *dead code*, mencegah *Null Reference Exception*, serta meningkatkan efisiensi performa penelusuran data pada halaman web.