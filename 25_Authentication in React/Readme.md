# Summary - Authentication in React

## 1. Penjelasan Authentication

Authentication berfungsi untuk _memberikan spesifik akses_ kepada orang yang benar untuk mendapatkan resource. Pada umumnya, authentication dilakukan menggunakan teknik **token-based authentication**, di mana client akan _memperoleh token_ setelah berhasil melakukan _login atau otentikasi_ pada server. Setelah token diperoleh, client dapat menggunakan token tersebut pada setiap request ke API untuk mengidentifikasi user dan memberikan akses pada sumber daya yang diizinkan. Pada setiap request, client akan menambahkan header Authorization pada request yang mengandung informasi autentikasi, seperti token akses atau kunci API.

## 2.Penggunaan JSON Web Token (JWT)

Dengan menggunakan JWT, server dapat _menghasilkan token_ setelah proses login dan kemudian _menyimpannya pada sisi client_ (local storage atau cookies). Setiap kali klien membuat permintaan ke server, token ini dikirimkan sebagai otorisasi dan diverifikasi oleh server untuk memberikan akses ke sumber daya yang diminta.

## 3. API Interceptor

_API Interceptor_ dapat digunakan sebagai _mekanisme untuk memantau dan memodifikasi_ setiap _request dan response_ dari API, sehingga memudahkan dalam melakukan autentikasi pada setiap request ke API. Dengan memanfaatkan teknik autentikasi yang tepat dan menjaga keamanan token dengan baik, dapat membantu meningkatkan keamanan dan kehandalan dari aplikasi React.
