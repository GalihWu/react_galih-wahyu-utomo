# Resume React Hook

## 1. Pengenalan React Hooks

Hook merupakan fitur baru di react 16.8. Dengan hook kita bisa menggunakan state dan fitur lain pada react tanpa menulus sebuah class.
Dengan Hooks, Anda **dapat mengekstrak logika stateful dari sebuah komponen** sehingga dapat diuji secara independen dan **digunakan kembali**. Hooks memungkinkan Anda menggunakan kembali logika stateful tanpa mengubah hierarki komponen Anda.

## 2. Aturan pada Hooks

- Hanya panggil hooks pada tingkat atas. Jangan memanggil hooks dari dalam loops, conditions, dan nested function
- Hanya pinggil hooks dari fungsi fungsi react. Jangan memanggil hooks dari fungsi-fungsi javascript biasa. Kita dapat memanggil Hooks dari komponen-komponen fungsi react dan dari custom Hooks

## 3. useState & useEffect

**useState()**
useState adalah cara baru untuk menggunakan kapabilitas yang sama persis dengan this.state yang diberikan di dalam sebuah class.

**useEffect()**

- Effect Hooks memungkinkan kita untuk melakukan efek samping (side effect) seperti data fetching, subscription, atau berinteraksi dengan DOM
- hampir sama dengan componentDidMount, componentWillUnMount dan componentDidUpdate
- ada 2 jenis yaitu butuh pembersihan dan tidak butuh pembersihan
