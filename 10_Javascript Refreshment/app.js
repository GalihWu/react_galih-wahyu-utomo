document.getElementById('submitbtn').addEventListener('click', function () {
  let productName = document.getElementById('produkname').value;
  let category = document.getElementById('category').value;
  let imageProduct = document.getElementById('imgProduct').value;
  let freshness = document.querySelector(
    'input[name="productCondition"]:checked'
  );
  let additional = document.getElementById('additional').value;
  let productPrice = document.getElementById('price').value;
  event.preventDefault();
  if (productName.length > 25) {
    alert('Last Name must not exceed 25 characters.');
    return;
  }
  if (productName === '') {
    alert('Please enter a valid Prouct name.');
    return;
  }
  if (productName.match(/[!@#$%^&*(),.?":{}|<>]/)) {
    alert('Name must not contain symbols.');
    return;
  }
  if (category === '') {
    alert('The Product Category field must be filled in.');
    return;
  }
  if (imageProduct === '') {
    alert('The Image of Product field must be filled in.');
    return;
  }
  if (!freshness) {
    alert('The Product Freshness field must be filled in.');
    return;
  }
  if (additional === '') {
    alert('The Additional Description field must be filled in.');
    return;
  }
  if (productPrice === '') {
    alert('Please enter a valid Product Price.');
    return;
  } else {
    alert(
      'Product Name: ' +
        productName +
        ' Product Category: ' +
        category +
        ' Additional: ' +
        additional +
        ' Product Price: ' +
        productPrice
    );
  }
});
