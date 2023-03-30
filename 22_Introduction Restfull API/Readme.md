# Summary - Introduction Restful API

## 1. Penjelasan API

**API** adalah singkatan dari _Application Programming Interface_ yaitu sebuah software yang memungkinkan para developer untuk _mengintegrasikan_ dan mengizinkan dua aplikasi yang berbeda secara bersamaan untuk _saling terhubung_ satu sama lain.

**Tujuan penggunaan dari API**

- saling berbagi data antar aplikasi yang berbeda tersebut,
- untuk mempercepat proses pengembangan aplikasi dengan cara menyediakan sebuah function yang terpisah sehingga para developer tidak perlu lagi membuat fitur yang serupa.

## 2. Perbedaan antara API, REST API, dan RESTful API

**REST API** merupakan salah satu dari _desain arsitektur_ yang terdapat di dalam API itu sendiri. Dan cara kerja dari _RESTful API_ yaitu REST client akan Melakukan akses pada data/resource pada REST server dimana masing-masing resource. Atau data/resource tersebut akan dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers)

Adapun metode HTTP yang secara umum dipakai dalam REST api adalah:

- GET, berfungsi untuk membaca data/resource dari REST server
- POST, berfungsi untuk membuat sebuah data/resource baru di REST server
- PUT, berfungsi untuk memperbaharui data/resource di REST server
- DELETE, berfungsi untuk menghapus data/resource dari REST serve
- OPTIONS, berfungsi untuk mendapatkan operasi yang disupport pada resource dari REST server.

## 3. Alasan mengapa memilih Web API

- Web API bersifat Open Source
- Saat kamu membutuhkan Web Service dan tidak perlu SOAP, maka ASP.NET Web API adalah solusi dan pilihan terbaik.
- Web API dapat digunakan untuk membangun Layanan HTTP sederhana, non-SOAP di atas WCF message pipeline.
- Konfigurasi yang mudah dan tidak seperti pada layanan WCF REST.
- Pembuatan Service dengan API Web cukup sederhana, Berbeda dengan Layanan WCF REST, pembuatan service menjadi cukup sulit.
- Berdasarkan HTTP sehingga mudah untuk didefinisikan, mengekspos dan mengkonsumsi dengan cara RESTful.
- Berdasarkan arsitektur RESTful yang ringan dan bagus untuk perangkat yang memiliki bandwidth terbatas seperti ponsel pintar.
