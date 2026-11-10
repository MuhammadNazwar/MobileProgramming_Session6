# Tic Tac Toe - Session 5

## 1. Identitas Mahasiswa

**Muhammad Nazwar Abdillah Putra**

41155050240029

## 2. Deskripsi Proyek

<p align="justify">
Tic Tac Toe merupakan proyek pengembangan aplikasi permainan mobile sederhana menggunakan framework React Native dan Expo dengan memanfaatkan VSCodium sebagai lingkungan pengembangan. Praktikum ini bertujuan untuk memahami penerapan konsep pemrograman Front End dalam pengembangan aplikasi mobile melalui pembuatan permainan interaktif yang dapat dimainkan oleh dua pemain secara bergantian.
</p>

<p align="justify">
Dalam permainan ini, pemain menggunakan simbol X dan O untuk mengisi sembilan kotak pada papan permainan. Pengembangan aplikasi mencakup pembuatan antarmuka pengguna (User Interface), pengelolaan state untuk menyimpan kondisi permainan, penerapan logika permainan, serta pemeriksaan kondisi kemenangan dan hasil seri. Pengerjaan praktikum mengikuti instruksi dan ketentuan yang terdapat dalam dokumen TugasTTC.pdf.
</p>

## 3. Fitur Utama

- **Interactive Game Board:** Menampilkan papan permainan berukuran 3 × 3 yang dapat digunakan pemain untuk menempatkan simbol X dan O.
- **Two Player Mode:** Memungkinkan dua pemain bermain secara bergantian dalam satu perangkat.
- **Turn Management:** Mengatur pergantian giliran antara pemain X dan pemain O secara otomatis.
- **Win Detection:** Memeriksa kombinasi simbol untuk menentukan pemain yang berhasil memenangkan permainan.
- **Draw Detection:** Mendeteksi kondisi seri ketika seluruh kotak telah terisi tanpa adanya pemain yang menang.
- **Game Status:** Menampilkan informasi mengenai giliran pemain, kondisi kemenangan, atau hasil seri.

## 4. Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| React Native | Framework untuk pengembangan aplikasi mobile |
| Expo | Platform dan tool untuk mempermudah pengembangan serta menjalankan aplikasi React Native |
| TypeScript | Bahasa pemrograman untuk implementasi logika dan komponen aplikasi |
| VSCodium | Code editor untuk menulis dan mengelola kode program |
| Node.js & npm | Lingkungan runtime dan pengelolaan dependency proyek |

## 5. Cara Instalasi dan Menjalankan Aplikasi

**Persyaratan:**

- Node.js dan npm.
- Expo CLI melalui NPX.
- VSCodium atau code editor lainnya.
- Expo Go pada perangkat Android atau emulator Android.

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

4. Buka proyek menggunakan VSCodium.

   ```bash
   codium .
   ```

5. Jalankan aplikasi menggunakan Expo.

   ```bash
   npx expo start
   ```

6. Setelah Expo berhasil dijalankan, scan QR Code menggunakan aplikasi Expo Go atau jalankan melalui emulator Android.

7. Aplikasi Tic Tac Toe siap dimainkan.

## 6. Repository

**File utama:**

| Nama File | Keterangan |
|---|---|
| `src/app/index.tsx` | File utama yang berisi implementasi antarmuka, state management, dan logika permainan Tic Tac Toe |

## 7. Dokumentasi dan Demo

### A. Tampilan Utama (UI)

Tampilan awal permainan yang menampilkan papan Tic Tac Toe sebagai media interaksi antara dua pemain.

<img width="272" height="598" alt="Tampilan Utama Tic Tac Toe" src="https://github.com/user-attachments/assets/a1c6ca89-1c8a-478d-bd1c-dc19c8bab67f" />

### B. Kondisi Menang (Win)

Tampilan ketika salah satu pemain berhasil memperoleh kombinasi simbol yang sesuai dengan aturan kemenangan Tic Tac Toe.

<img width="270" height="597" alt="Kondisi Menang" src="https://github.com/user-attachments/assets/c51ee714-b0b5-4f7b-98ca-92e4fdbb3b59" />

### C. Kondisi Seri (Draw)

Tampilan ketika seluruh kotak pada papan permainan telah terisi, tetapi tidak terdapat kombinasi kemenangan dari kedua pemain.

<img width="270" height="601" alt="Kondisi Seri" src="https://github.com/user-attachments/assets/449d0449-4a22-41bd-a15c-7ff9b4827670" />

---

## 8. Kesimpulan
<p align="justify">
Melalui praktikum Session 5 ini, mahasiswa dapat memahami penerapan konsep pemrograman Front End menggunakan React Native dan Expo dalam pengembangan aplikasi mobile interaktif. Pembuatan permainan Tic Tac Toe memberikan pemahaman mengenai penggunaan komponen antarmuka, pengelolaan state, logika pemrograman, pergantian giliran pemain, serta pemeriksaan kondisi kemenangan dan hasil seri.
</p>

<p align="justify">
Proyek ini menjadi salah satu bentuk penerapan dasar pengembangan aplikasi mobile berbasis React Native yang menggabungkan desain antarmuka dan logika aplikasi sehingga menghasilkan permainan sederhana yang interaktif dan dapat digunakan oleh dua pemain.
</p>

---

**Author:** Muhammad Nazwar Abdillah Putra

**NIM:** 41155050240029
