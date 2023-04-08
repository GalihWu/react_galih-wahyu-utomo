# Summary - Introduction GraphQL and Apollo Client Setup

## 1. Penjelasan

**GraphQL** adalah bahasa yang digunakan untuk _query API_. GraphQL adalah bahasa query dan runtime sisi server untuk Application Programming Interfaces (API) yang memprioritaskan untuk memberi klien data sesuai dengan apa yang mereka minta. Pada intinya, GraphQL merupakan bahasa untuk query database dari aplikasi sisi klien
Terdapat 3 karakteristik utama di dalam GraphQl, yaitu:

- Memungkinkan klien untuk menentukan data yang dibutuhkan secara spesifik.
- Mudah untuk mengumpulkan data dari berbagai sumber.
- Menggunakan GraphQL type system untuk menggambarkan data.

**Appolo client** adalah state management library komprehensif untuk JavaScript yang memungkinkan Anda _mengelola data lokal dan remote data_ dengan GraphQL. Digunakan untuk fetch, meng-cache, dan memodifikasi data aplikasi, sambil memperbarui UI Anda secara otomatis.

## 2. Fitur Utama GraphQL

1. Query = untuk mendapatkan (get) data
2. Mutation = untuk memanipulasi data, berupa insert, update dan delete
3. Sibscription = digunakan untuk mendapatklan data paling update, jadi dapat membuat apliksi dengan data yang realtime

## 3. Keuntungan menggunakan GraphQl

- Tipe data akan terdefinisi dengan baik sehingga dapat mengurangi miskomunikasi antara klien dan server.
- Memungkinkan API aplikasi untuk berkembang tanpa memecah kueri yang ada.
- Memiliki banyak ekstensi yang bersifat open source sehingga beberapa fitur yang tidak tersedia dapat ditambahkan.
- Bersifat introspective. Klien dapat melakukan permintaan list tipe data yang tersedia sehingga sangat ideal untuk auto-generating documentation.
- Klien mendapat apa yang mereka minta tanpa over fetching atau menerima lebih banyak data dari yang dibutuhkan.
