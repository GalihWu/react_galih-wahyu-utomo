# Resume React Form

## 1. Basic Form

**Penggunaan Form**
Form dapat digunakan untuk _menghandle inputan_ dari user. Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.

**Macam Form**

- Element input
- Element textarea
- Element select
- Radio Button
- Checkbox

## 2. Controlled Component & Uncontrolled Component

Sebuah element HTML yang valuenya dikontrol oleh React disebut _controlled component_, selain itu disebut _uncontrolled component._

Pada sebagian besar kasus, disarankan untuk menggunakan _controlled component_ untuk mengimpementasikan form. Pada _controlled component_, data form ditangani oleh _komponen React_. Cara alternatifnya adalah menggunakan _uncontrolled component_, di mana data form akan ditangani oleh _DOM-nya sendiri_, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa _menggunakan ref_ untuk mendapatkan nilai form dari DOM.

**Apa yang membuat elemnt "Controlled"?**
Selain input, ada elemen bentuk lain, seperti checkboxes, radios, selects and textareas. Elemen formulir menjadi _"controlled"_ jika kita _menetapkan nilainya melalui prop._

Berikut perbedaan fitur pada uncontrolled & controlled :
| Fitur | uncontrolled | controlled |
| ------ | ------ | ------ |
| one-time value retrieval (e.g. on submit) | v | v |
| validating on submit | v | v |
| instant field validation | x | v |
| conditionally disabling submit button | x | v |
| enforcing input format | x | v |
| several inputs for one piece of data | x | v |
| dynamic inputs | x | v |

## 3. Basic Validation

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan :

- Mencari input data yang benar dan sesuai format.
- Melindungi akun pengguna.
- Melindungi sistem/aplikasi.

**Tipe Validasi Data**
**1. Client-side validation**
Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.

Kelebihan validasi sisi klien ialah _user-friendly_, karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi. Client-side validation terbagi atas dua bagian :

- **Built-in form validation**, yaitu menggunakan fitur validasilangsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup ‘kaku’.Built-in validation meliputi required, minlength, maxlength, min, max, type
  dan pattern
  **Menggunakan Javascript**. Ini membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.

**2. Server-side Validation**
Server-side bertugas untuk _memvalidasi data kembali_, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

Berbeda dengan validasi sisi klien, validasi ini _tidak user-friendly_. Karena, koreksi kesalahan akan dikirimkan, _setelah form di-submit_.
