// Mendefinisikan variabel global untuk nomor produk
let noProduct = 1;

// Fungsi untuk melakukan validasi pada setiap form
function validateForm() {
  const productName = document.getElementById('produkname').value;
  const productCategory = document.getElementById('category').value;
  const imageProduct = document.getElementById('imgProduct').value;
  let productFreshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  const additionalDescription = document.getElementById('additional').value;
  const productPrice = document.getElementById('price').value;

  if (productName.length > 25) {
    alert('Last Name must not exceed 25 characters.');
    return false;
  } else if (productName.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    alert('Name must not contain symbols.');
    return false;
  } else if (
    productName === '' ||
    productCategory === '' ||
    imageProduct === '' ||
    !productFreshness ||
    additionalDescription === '' ||
    productPrice === ''
  ) {
    alert('Please fill in all required fields.');
    return false;
  }
  return true;
}

// Fungsi untuk menambahkan data input ke dalam tabel HTML
function addToTable() {
  const productName = document.getElementById('produkname').value;
  const productCategory = document.getElementById('category').value;
  let productFreshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  const additionalDescription = document.getElementById('additional').value;
  const productPrice = document.getElementById('price').value;

  const tabel = document.getElementById('tableInput');
  const row = tabel.insertRow(-1);
  for (let i = 0; i < 7; i++) {
    row.insertCell(i);
  }

  // Menambahkan nilai input ke dalam isi tabel HTML
  row.cells[0].innerHTML = noProduct;
  row.cells[1].innerHTML = productName;
  row.cells[2].innerHTML = productCategory;
  row.cells[3].innerHTML = 'dolor';
  row.cells[4].innerHTML = productFreshness.value;
  row.cells[5].innerHTML = additionalDescription;
  row.cells[6].innerHTML = productPrice;

  noProduct++;
}

// Fungsi utama untuk menangani event click pada tombol Submit
function handleFormSubmit(event) {
  event.preventDefault();
  // melakukan validasi pada setiap form
  if (validateForm()) {
    addToTable();
  }
}

// Menambahkan event listener ke tombol Submit
document
  .getElementById('submitbtn')
  .addEventListener('click', handleFormSubmit);
