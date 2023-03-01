# **Resume - Introduction Data Structures (javascript)**

## **A. Mengapa belajar structure data**

Sebagai software enginer **kualitas** dan **efisiensi** kode menjadi prioritas.

- mengerti kualitas kode yang di buat
- efisiensi

## **B. Pengertian Data Structure**

**Data** adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer (string, number, boolean, dll.)
**Data Structure** adalah cara-cara atau metode yang digunakan untuk menyimpan data di dalam memori komputer.

- read = membaca seperti mengeluarkan value dalam sebuah variabel
- search = mencari value di dalam variable
- insert = memasukkan satu data stucture kedalam sebuah object atau pun variabel
- delete =menghapus satu index ataupun variabel didalam data structure

## **C. Dua Jenis data Stucture**

**1). Array**
Digunakan untuk menyimpan **kumpulan nilai dalam satu variabe**
Array adalah structure data paling **dasar** atau paling sering digunakan, dan **serbaguna.**
Operasi pada Array
**Reading**

- Melihat nilai apa yang terkandung pada indeks tertentu di dalam array
- Operasi yang efisien
- Jenis operasi tercepat karena hanya membutuhkan 1 steps

Dalam oprasi reading ketika membaca sebuah value pada indeks tertentu memori
komputer dapat langsung melompat ke indeks yang dituju.

**Searching**

- Mencari apakah nilai tertentu ada didalam array atau tidak
- Kebalikan dari Reading
- Ketika melakukan operasi searching pada array komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu
- Komputer tidak bisa tahu begitu saja nilai apa yang terkandung pada setiap memori

Kekurangannya yaitu kurang efisien dibanding dengan reading karena memeriksa satu persatu cell dan juga membutuhkan banyak steps tergantung pada ukuran array atau banyak jumalh data
**Insertion**

- Efisiensi tergantung dimana kita memasukan value nya
- Memasukan value pada akhir dari array hanya membutuhkan 1 steps sedangkan
- Memasukan value baru di awal atau tengah array perlu menggeser data yang sudah ada pada array Sehingga akan membutuhkan steps tambahan

**Deletion**

- Operasi menghilangkan value pada indeks tertentu
- Membutuhkan jumlah N steps untuk array yang mengandung N data

**2). Set**
Bedanya dengan data array yaitu Set **tidak mengizinkan duplikasi value** didalamnya. Dari keempat operasi reading, searching, insertion, dan deletion terdapat **perbedaan** efisiensi pada **operasi insertion**. Sedangkan untuk operasi lainnya sama seperti array
