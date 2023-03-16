# Resume - React Routing

## 1. Apa itu Router pada React?

Routing adalah proses di mana pengguna diarahkan ke halaman yang berbeda berdasarkan tindakan atau permintaan mereka. Router ReactJS terutama digunakan untuk melakukan proses navigasi pada SPA (_Single Page Application_)

- _Multipage Page Application_(MPA) juga disebut tradisional web app merupakan jenis web app dimana perlu **memuat seluruh halaman** setiap kali membuat permintaan baru
- _Single Page Application_(SPA) hanya ada **1 halaman** untuk menangani seluruh aktivitas app tersebut.

**React Router**

```sh
npm install react-router-dom --save
```

## 2. URL Parameter

Merupakan suatu parameter yang nilainya ditetapkan **secara dinamis** di _URL_ halaman. Cara untuk mengakses params pada url yaitu dengan _this.props.match.params_
Kegunaan :

- Paginasi
- Penyortiran dan penyaringan
- Pencarian
- Menggambarkan

Perbadaan _Link_ dan _Redirect_

| Link                                 | Redirect                                |
| ------------------------------------ | --------------------------------------- |
| Dapat digunakan dikondisi apapun     | lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser | menimpa history pada browser            |
| Bereaksi dengan dick seperti a href  | bereaksi dengan suatu kondisi           |

## 3. Hook Routing

Hook yang digunakan pada Routing :

- useHistory
  memberi kita akses ke _instance riwayat_ yang dapat Anda gunakan untuk bernavigasi.
- useLocation
- useParams
  mengembalikan objek pasangan _kunci/nilai parameter_ URL. Gunakan untuk mengakses match.params dari <Route> saat ini.
- useRouteMath
  useRouteMatch mencoba _mencocokkan URL_ saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.
