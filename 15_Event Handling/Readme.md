# Resume Event Handling

## 1. State

State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan. State hanya bisa dimodifikasi menggunakan **setState** dan akan terjadi render ulang ketika dirubah. State hanya dugunakan pada **class** dan bersifat **Asyncrhounous**.

Perbedaan state dan props
props diteruskan ke komponen (mirip dengan _function parameters_) sedangkan state dikelola dalam komponen (mirip dengan variabel yang dideklarasikan dalam suatu function).

## 2. Statefull & Stateless

- Stateful components adalah komponen yang _menggunakan state_. Sedangkan Stateless adalah komponen yang _tidak menggunakan state_.
- Stateful dibuat dengan _class_, kelebihannya adalah _memiliki lifecycle_
- Stateless umumnya dibuat dengan fuction karena codenya lebih ringkas
- Stateful components juga dikenal dengan sebutan Container dan Smart components.
- Stateless juga dikenal dengan sebutan Presentation dan Dumb Components.

| Stateless Component                             | Statefull Component                        |
| ----------------------------------------------- | ------------------------------------------ |
| tidak tahu tentang aplikasi                     | Mengerti dengan aplikasi                   |
| tidak melakukan data fetching(pengambilan data) | melakukan fetching                         |
| Tujuannya visalisasi                            | berinteraksi dengan aplikasi               |
| Dapat digunakan kembali                         | tidak dapat digunakan kembali              |
| Hanya berkomunikasi dengan induknya             | meneruskan status dan data ke anak-anaknya |

## 3. Handling Event

Handling event adalah suatu metode untuk _menangani event/kejadian_ yang diberikan pengguna kepada suatu komponen. Event sendiri merupakan _kejadian yang dipicu_ oleh pengguna, contohnya tombol diklik, melakukan scroll, form di submit dan lainnya.
Beberapa contoh list event :

- Clipboard event (promise terpenuhi)
- Form event (onChange, onSubmit)
- mouse event (onClick, onDoubleClick, onMouseOver)
- Generic event (onError, onLoad)
