# SITTA UT - Sistem Tracking & Informasi Bahan Ajar Universitas Terbuka

Repositori ini berisi kode sumber antarmuka (*frontend*) untuk **SITTA UT** (Sistem Informasi Bahan Ajar Universitas Terbuka), sebuah aplikasi berbasis web yang dirancang untuk mengelola inventaris stok bahan ajar serta melacak status pengiriman (*Tracking DO*) secara *real-time*.

---

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan pendekatan modern yang memisahkan struktur statis dan manajemen reaktif data:
- **HTML5 & CSS3**: Struktur dasar halaman dan *styling* responsif (didukung oleh *Custom CSS* dan *Flexbox*).
- **JavaScript (ES6+)**: Logika aplikasi dan manipulasi data.
- **Vue.js (v3.4)**: *Progressive JavaScript Framework* yang bertindak sebagai jembatan reaktif (*reactive bridge* / `v-for`) untuk merender data secara dinamis ke dalam *DOM*.
- **SweetAlert2**: Pustaka eksternal untuk menampilkan kotak dialog (*popup alert*) yang modern dan intuitif.
- **FontAwesome**: Pustaka ikon vektor untuk mempercantik antarmuka tombol dan navigasi.

---

##  Akun Simulasi Login (Credentials)

Untuk menguji fitur login di dalam sistem, Anda dapat menggunakan salah satu akun berikut yang tersedia di `js/data.js`:

- **Admin Pusat:**
  - *Email:* `admin@ut.ac.id`
  - *Password:* `admin123`
- **UPBJJ Jakarta:**
  - *Email:* `rina@ut.ac.id`
  - *Password:* `rina123`
