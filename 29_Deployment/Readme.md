# Resume - Deployment

## 1. Build react App

Tujuan melakukan **build** pada aplikasi kita menjadi versi _production_ sehingga performanya lebih _cepat dan ringan_.

**Build React App**

Kalau menggunakan CRA

```sh
npm run build
```

**Run Optimizes App**

Untuk mengoptimalkan aplikasi di local komputer

```sh
//instal serve
npm install -g serve

//jalankan serve di lokal
serve - s build
```

## 2. Apa itu deployment

Deployment adalah kegiatan yang bertujuan untuk _menyebarkan aplikasi_ yang sudah kita buat.

**Deployment menggunakan Vercel**

Vercel deployment adalah platform cloud yang menyediakan layanan deployment untuk aplikasi web dan serverless. Vercel menyediakan berbagai fitur dan alat yang memudahkan proses deployment, seperti integrasi dengan platform Git dan dukungan untuk berbagai bahasa pemrograman dan kerangka kerja seperti Next.js, React, dan Vue.js.

## 3. Langkah-langkah deploy menggunakan vercel

- Buat akun Vercel dan login ke dashboard Vercel.
- Buat project baru pada dashboard Vercel.
- Setelah project dibuat, Vercel akan menawarkan beberapa cara untuk melakukan deployment, yaitu:
- Deploy secara manual menggunakan Vercel CLI.
- Deploy melalui repository Git pada Vercel.
- Deploy melalui Vercel integrasi pada platform Git, seperti GitHub atau GitLab.
- Pilih opsi yang paling sesuai untuk kebutuhan deployment Anda.
- Ikuti petunjuk pada opsi yang dipilih, seperti menghubungkan repository Git atau menginstall Vercel CLI pada komputer Anda.
- Setelah konfigurasi selesai, lakukan deploy dengan menjalankan perintah vercel pada terminal atau melalui integrasi pada platform Git.
- Tunggu hingga proses deploy selesai dan aplikasi dapat diakses melalui URL yang disediakan oleh Vercel.
