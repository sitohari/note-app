# Web Catatan (React Notes App)

Aplikasi **Web Catatan** adalah sebuah aplikasi sederhana berbasis React yang memungkinkan pengguna untuk menambahkan, menghapus, dan melihat daftar catatan. Aplikasi ini dibuat sebagai submission untuk kelas React Developer, dengan memenuhi semua kriteria utama yang telah ditetapkan.

---

## 🌟 Fitur Utama

### 1. **Menampilkan Daftar Catatan**
- Aplikasi dapat menampilkan daftar catatan berdasarkan data awal (initial data) yang telah disediakan.
- Data catatan dikelola menggunakan state React.
- Daftar catatan dirender secara dinamis menggunakan metode `array.map`.

### 2. **Menambahkan Catatan**
- Pengguna dapat menambahkan catatan baru melalui form input.
- Form input menggunakan **controlled components** untuk mengelola nilai input secara real-time.
- Data catatan yang ditambahkan memiliki format berikut:
  {
    id: number | string,
    title: string,
    body: string,
    archived: boolean,
    createdAt: string,
  }

### 3. **Menghapus Catatan**
  - Terdapat tombol hapus pada setiap catatan untuk menghapus data catatan.
  - Jika tidak ada catatan yang tersisa, UI akan menampilkan pesan "Tidak ada catatan" untuk memberi tahu pengguna bahwa daftar catatan kosong.

  🛠️ Teknologi yang Digunakan
  - React.js: Framework utama untuk membangun antarmuka aplikasi.
  = JavaScript: Untuk logika bisnis dan pengelolaan data.
  - CSS: Untuk styling antarmuka pengguna.
  
