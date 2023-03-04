//membuat variabel untuk nomor pada produk
let noProduct = 1;

//membuat fungsi untuk berjalan ketika tombol submit di klik
document.getElementById('submitbtn').addEventListener('click', function () {
  // mengambil nilai input dari form
  const productName = document.getElementById('produkname').value;
  const productCategory = document.getElementById('category').value;
  const imageProduct = document.getElementById('imgProduct').value;
  let productFreshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  const additionalDescription = document.getElementById('additional').value;
  const productPrice = document.getElementById('price').value;
  // membuat web tidak direfresh ketika tombol submit diklik
  event.preventDefault();
  // melakukan validasi pada setiap form
  if (productName.length > 25) {
    alert('Last Name must not exceed 25 characters.');
  } else if (productName.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    alert('Name must not contain symbols.');
  } else if (
    productName === '' ||
    productCategory === '' ||
    imageProduct === '' ||
    !productFreshness ||
    additionalDescription === '' ||
    productPrice === ''
  ) {
    alert('Please fill in all required fields.');
  } else {
    //untuk menambahkan data input kedalam tabel jika sudah di validasi
    const tabel = document.getElementById('tableInput');
    const row = tabel.insertRow(-1);
    for (let i = 0; i < 7; i++) {
      row.insertCell(i);
    }
    // untuk mengambil nilai pada data input dan ditambahkan kedalam isi tabel HTML
    row.cells[0].innerHTML = noProduct;
    row.cells[1].innerHTML = productName;
    row.cells[2].innerHTML = productCategory;
    row.cells[3].innerHTML = 'dolor';
    row.cells[4].innerHTML = productFreshness.value;
    row.cells[5].innerHTML = additionalDescription;
    row.cells[6].innerHTML = productPrice;

    noProduct++;
  }
});
