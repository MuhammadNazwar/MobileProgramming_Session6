# Session 6 - CRUD To Do List

## 1. Identitas Mahasiswa
**Muhammad Nazwar Abdillah Putra** 41155050240029

## 2. Deskripsi Proyek
<p align="justify">
CRUD To Do List merupakan proyek pengembangan aplikasi mobile sederhana menggunakan framework React Native dan Expo dengan memanfaatkan Firebase sebagai layanan basis data. Praktikum ini bertujuan untuk memahami penerapan konsep CRUD (Create, Read, Update, Delete) dalam pengembangan aplikasi mobile melalui pembuatan aplikasi pengelolaan daftar aktivitas atau tugas pengguna.
</p>
<p align="justify">
Dalam aplikasi ini, pengguna dapat menambahkan aktivitas baru, melihat daftar aktivitas yang tersimpan, mengubah informasi aktivitas, serta menghapus data yang sudah tidak diperlukan. Pengembangan aplikasi mencakup pembuatan antarmuka pengguna (User Interface), pengelolaan data, penerapan operasi CRUD, serta integrasi Firebase Cloud Firestore sebagai basis data untuk menyimpan dan mengelola informasi aktivitas. Dengan integrasi tersebut, perubahan data dapat diperbarui dan ditampilkan secara langsung pada aplikasi.
</p>

## 3. Fitur Utama
- **Create Activity:** Memungkinkan pengguna menambahkan aktivitas atau tugas baru ke dalam daftar To Do List.
- **Read Activity:** Menampilkan daftar aktivitas yang telah tersimpan pada Firebase Cloud Firestore.
- **Update Activity:** Memungkinkan pengguna mengubah informasi aktivitas yang sudah dibuat.
- **Delete Activity:** Memungkinkan pengguna menghapus aktivitas yang sudah tidak diperlukan.
- **Firebase Integration:** Menghubungkan aplikasi dengan Firebase Cloud Firestore sebagai basis data untuk menyimpan dan mengelola data aktivitas.
- **Real-Time Data Management:** Memperbarui tampilan data berdasarkan perubahan yang terjadi pada basis data Firebase.

## 4. Teknologi yang Digunakan
| Teknologi | Kegunaan |
|---|---|
| React Native | Framework untuk pengembangan aplikasi mobile |
| Expo | Platform dan tool untuk mempermudah pengembangan serta menjalankan aplikasi React Native |
| JavaScript | Bahasa pemrograman untuk implementasi logika dan komponen aplikasi |
| Firebase | Layanan Backend untuk mengelola dan menyimpan data aplikasi |
| Cloud Firestore | Basis data NoSQL untuk menyimpan dan mengelola data aktivitas |
| VSCodium | Code editor untuk menulis dan mengelola kode program |
| Node.js & npm | Lingkungan runtime dan pengelolaan dependency proyek |

## 5. Cara Instalasi dan Menjalankan Aplikasi
**Persyaratan:**
- Node.js dan npm.
- Expo CLI melalui NPX.
- VSCodium atau code editor lainnya.
- Expo Go pada perangkat Android atau emulator Android.
- Akun Firebase dan konfigurasi proyek Cloud Firestore.
**Langkah-langkah instalasi:**
1. Clone repository dari GitHub.
   ```bash
   git clone <URL_REPOSITORY>
   ```
2. Masuk ke direktori proyek.
   ```bash
   cd <NAMA_FOLDER_PROYEK>
   ```
3. Instal seluruh dependency yang dibutuhkan.
   ```bash
   npm install
   ```
4. Pastikan konfigurasi Firebase telah disesuaikan dengan proyek Firebase yang digunakan pada file `Config.js`.
5. Buka proyek menggunakan VSCodium.
   ```bash
   codium .
   ```
6. Jalankan aplikasi menggunakan Expo.
   ```bash
   npx expo start
   ```
7. Setelah Expo berhasil dijalankan, scan QR Code menggunakan aplikasi Expo Go atau jalankan melalui emulator Android.
8. Aplikasi CRUD To Do List siap digunakan untuk mengelola daftar aktivitas.

## 6. Repository
**File utama:**
| Nama File | Keterangan |
|---|---|
| `App.js` | File utama aplikasi yang mengatur struktur dan navigasi komponen aplikasi |
| `Config.js` | File konfigurasi untuk menghubungkan aplikasi dengan Firebase |
| `Screens/Home.js` | File yang berisi implementasi halaman utama dan daftar aktivitas |
| `Screens/Detail.js` | File yang berisi implementasi halaman detail aktivitas serta pengelolaan data aktivitas |

## 7. Dokumentasi dan Demo
### A. Tampilan Utama (UI)
Tampilan awal aplikasi yang menampilkan daftar aktivitas pengguna sebagai halaman utama untuk mengelola To Do List.

<img width="591" height="625" alt="Tampilan Utama To Do List" src="https://github.com/user-attachments/assets/f9bb213b-bf12-4574-b87b-a4037e6d0bec" />

### B. Create (Menambahkan Data)
Proses penambahan aktivitas baru ke dalam aplikasi. Pengguna dapat mengisi informasi aktivitas melalui halaman yang disediakan, kemudian menyimpan data tersebut ke Firebase Cloud Firestore.

<img width="597" height="633" alt="Form Create Aktivitas" src="https://github.com/user-attachments/assets/3793286d-be40-4021-9d30-6ddb6255569c" />

<img width="595" height="630" alt="Hasil Create Aktivitas" src="https://github.com/user-attachments/assets/199f6c11-2440-444d-a2b6-01b1ab9e442d" />

### C. Read (Menampilkan Data)
Proses pengambilan dan penampilan data aktivitas yang telah tersimpan pada Firebase Cloud Firestore sehingga pengguna dapat melihat daftar tugas yang dimiliki.

<img width="595" height="630" alt="Tampilan Read Aktivitas" src="https://github.com/user-attachments/assets/0498f2a2-a8b5-42d5-8383-2c9acfabdd1d" />

### D. Update (Mengubah Data)
Proses perubahan informasi aktivitas yang telah tersimpan. Pengguna dapat memilih aktivitas, mengubah informasi yang diperlukan, kemudian menyimpan perubahan tersebut ke dalam basis data.

<img width="595" height="634" alt="Form Update Aktivitas" src="https://github.com/user-attachments/assets/edb037d2-ce4e-4afd-a841-18f84e03740d" />

<img width="591" height="638" alt="Proses Update Aktivitas" src="https://github.com/user-attachments/assets/c7567d76-e36a-4ad0-824c-bda54d1bf54f" />

<img width="594" height="627" alt="Hasil Update Aktivitas" src="https://github.com/user-attachments/assets/a0c8cb9a-30aa-402d-836c-f35a521e1f1c" />

### E. Delete (Menghapus Data)
Proses penghapusan aktivitas yang sudah tidak diperlukan. Setelah pengguna melakukan tindakan penghapusan, data aktivitas akan dihapus dari Firebase Cloud Firestore dan tidak lagi ditampilkan pada daftar aktivitas.

<img width="692" height="256" alt="Konfirmasi Delete Aktivitas" src="https://github.com/user-attachments/assets/e535bb29-be43-4db5-a8a4-b4458d626f48" />

<img width="591" height="625" alt="Hasil Delete Aktivitas" src="https://github.com/user-attachments/assets/546f0315-fe93-488b-8e37-98e9a47b89ca" />

### F. Integrasi Firebase
Dokumentasi Firebase Cloud Firestore yang digunakan sebagai basis data aplikasi untuk menyimpan dan mengelola informasi aktivitas pengguna.

<img width="940" height="151" alt="Database Firebase Cloud Firestore" src="https://github.com/user-attachments/assets/bbc28fbf-d03a-4013-901d-ebfb71f75794" />

---

## Kesimpulan
<p align="justify">
Melalui praktikum Session 6 ini, mahasiswa dapat memahami penerapan konsep CRUD (Create, Read, Update, Delete) menggunakan React Native dan Expo dalam pengembangan aplikasi mobile. Pembuatan aplikasi To Do List memberikan pemahaman mengenai proses penambahan, penampilan, perubahan, dan penghapusan data melalui antarmuka aplikasi. Selain itu, praktikum ini juga memberikan pengalaman dalam mengintegrasikan Firebase Cloud Firestore sebagai layanan basis data untuk menyimpan dan mengelola informasi secara online.
</p>
<p align="justify">
Proyek ini menjadi salah satu bentuk penerapan pengembangan aplikasi mobile yang menggabungkan antarmuka pengguna, pengelolaan data, serta integrasi layanan Backend. Dengan adanya penerapan operasi CRUD dan Firebase, aplikasi To Do List dapat digunakan untuk mengelola aktivitas pengguna secara lebih terstruktur dan efisien.
</p>
