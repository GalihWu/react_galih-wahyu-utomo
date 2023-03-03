let number = 1;

document.getElementById('submitbtn').addEventListener('click', function () {
  const productName = document.getElementById('produkname').value;
  const category = document.getElementById('category').value;
  const imageProduct = document.getElementById('imgProduct').value;
  let freshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  const additional = document.getElementById('additional').value;
  const productPrice = document.getElementById('price').value;

  event.preventDefault();
  if (productName.length > 25) {
    alert('Last Name must not exceed 25 characters.');
  } else if (productName.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    alert('Name must not contain symbols.');
  } else if (
    productName === '' ||
    category === '' ||
    imageProduct === '' ||
    !freshness ||
    additional === '' ||
    productPrice === ''
  ) {
    alert('Please fill in all required fields.');
  } else {
    const tabel = document.getElementById('tableInput');
    const row = tabel.insertRow(-1);
    for (let i = 0; i < 7; i++) {
      row.insertCell(i);
    }

    row.cells[0].innerHTML = number;
    row.cells[1].innerHTML = productName;
    row.cells[2].innerHTML = category;
    row.cells[3].innerHTML = 'dolor';
    row.cells[4].innerHTML = freshness.value;
    row.cells[5].innerHTML = additional;
    row.cells[6].innerHTML = productPrice;

    number++;
  }
});
