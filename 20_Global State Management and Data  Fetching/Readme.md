# Summary - Global State Management and Data fetching

## Global state

Global state adalah objek JavaScript yang menyimpan data yang digunakan oleh React untuk merender komponen dengan konten dinamis berdasarkan tindakan pengguna.

## Redux

Untuk mengubah state untuk redux bisa menggunakan Hooks dan Connect
Kapan saat yang tepat untuk menggunakan Redux :

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

**Redux Libraries dan Tools**

- React-Redux
- Redux Toolkit
- Redux DevTools Extension

**Komponen Penting di Redux**

- Actions : Digunakan untuk memberikan informasi dari app ke store
- Reducer :Pure javascript function yang mengambil state aplikasi saat ini dan object action lalu mnegembalikan state aplikasi terbaru
- Store : Objek central yang menyimpan state pada app

**Rangkuman**

1. Redux adalah library untuk manajemen state global
2. Redux menggunakan struktur "one-way data flow”
3. Redux menggunakan beberapa tipe code

## Redux Thunk

_Thunk middleware_ untuk redux yang memungkinkan kita untuk membuat _action createor_ yang mengembalikan function bukan action

Kenapa perlu Redux Thunk

- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

## Data Fetching

Data Fetching merupakan proses _request_ data dari App ke server, kemudian server akan melakukan _response_ berupa data yang akan ditampilkan di web
Cara-cara Fetching data di react :

- Fetch API
- Axios
- React Query Liberary
