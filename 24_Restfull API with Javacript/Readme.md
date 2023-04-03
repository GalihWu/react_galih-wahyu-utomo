# Summary - Restful API

## 1. Restful API with Javascript

REST API yaitu salah satu arsitektur yang ada di API (_Application Programming Interface_). Untuk REST atau Representational State Transfer sendiri menggunakan **HTTP** (_Hypertext Transfer Protocol_) sebagai media pertukaran data.
Adapun metode HTTP yang secara umum dipakai dalam REST api adalah:

- GET, berfungsi untuk membaca data/resource dari REST server
- POST, berfungsi untuk membuat sebuah data/resource baru di REST server
- PUT, berfungsi untuk memperbaharui data/resource di REST server
- DELETE, berfungsi untuk menghapus data/resource dari REST serve
- OPTIONS, berfungsi untuk mendapatkan operasi yang disupport pada resource dari REST server.

## 2. Cara kerja restful API

1. Klien mengirimkan permintaan ke server. Klien mengikuti dokumentasi API untuk memformat permintaan dalam format yang dipahami oleh server.
2. Server mengautentikasi klien dan mengonfirmasi bahwa klien memiliki hak untuk membuat permintaan.
3. Server menerima permintaan dan memproses secara internal.
4. Server mengembalikan respons kepada klien. Respons berisi informasi yang memberitahu klien jika permintaannya berhasil. Respons juga termasuk informasi apa saja yang diminta klien.

## 3. Manfaat menggunakan restful API

- Front-end dan back-end developer mampu berkerja secara bersamaan
- Menemukan masalah lebih awal
- Fast feedback loop
- Memudahkan testing dan simulasi API
