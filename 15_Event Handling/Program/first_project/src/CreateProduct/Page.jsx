import './style.css';
import './bootstrap/bootstrap.min.css';
import iconBootstrap from './img/Bootstrap.png';
import { article } from './article';
import { useState } from 'react';
import Navbar from './component/navbar';

export default function Page() {
  let noProduct = 1;
  const validateForm = () => {
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
  };

  const addToTable = () => {
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addToTable();
    }
  };

  const [errMsg, setErrMsg] = useState('');
  const [inputNameProduct, setInputNameProduct] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 10) {
      setErrMsg('Product name tidak boleh lebih dari 10 karakter');
    } else {
      setErrMsg('');
    }
    setInputNameProduct(value);
  };

  const randomNumber = () => {
    console.log(Math.floor(Math.random() * 11));
  };

  return (
    <>
      <Navbar />
      {/* content */}
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <img
                className="img-fluid mx-auto d-block"
                style={{ display: 'inline-block', marginTop: 20, width: 80 }}
                src={iconBootstrap}
                alt="img-bootstrap"
              />
              <div className="mt-3">
                <div className="text-center">
                  <h2>{article.title.en}</h2>
                  <p>{article.description.en}</p>
                </div>

                <br />
                <br />
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-8">
                    <h3>Detail Product</h3>
                    {/* Membuat form */}
                    <form>
                      {/* input data text */}
                      <div className="mb-3 col-md-8">
                        <label htmlFor="productname" className="form-label">
                          Product name
                        </label>
                        <input
                          className="form-control"
                          id="produkname"
                          type="text"
                          aria-label="default input example"
                          onChange={handleChange}
                        />
                        <span style={{ color: 'red' }}>{errMsg}</span>
                      </div>
                      {/* input data selection */}
                      <div className="mb-3 col-md-5">
                        <label htmlFor="productcategory" className="form-label">
                          Product Category
                        </label>
                        <select name="" id="category" className="form-select">
                          <option selected="">Ipsum</option>
                          <option selected="">Choose...</option>
                        </select>
                      </div>
                      {/* input data gambar */}
                      <div className="mb-3  col-md-5">
                        <label
                          htmlFor="image"
                          id="imgProduct"
                          className="form-label pimary"
                        >
                          Image of Product
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="imgProduct"
                        />
                      </div>
                      {/* Input data tipe radio */}
                      <div className="mb-3" id="freshness">
                        <label htmlFor="freshness" className="form-label">
                          Product Freshness
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productCondition"
                            id="flexRadioDefault1"
                            defaultValue="Brand New"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Brand New
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productCondition"
                            id="flexRadioDefault2"
                            defaultValue="Second Hand"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Second Hand
                          </label>
                        </div>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productCondition"
                            id="flexRadioDefault3"
                            defaultValue="Refufbished"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Refufbished
                          </label>
                        </div>
                      </div>
                      {/* input data textarea */}
                      <div className="mb-2">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Additional Description
                        </label>
                      </div>
                      <div className="form-floating mb-2">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="additional"
                          style={{ height: 100 }}
                          defaultValue={''}
                        />
                      </div>
                      {/* input data number */}
                      <div className="mb-2">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Product Pice
                        </label>
                        <input
                          className="form-control"
                          id="price"
                          type="number"
                          placeholder="$ 1"
                          aria-label="default input example"
                        />
                      </div>
                      {/* button untuk submit */}
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="submitbtn"
                        style={{ marginTop: 100 }}
                        onClick={handleFormSubmit}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabel daftar yang akan diisi melalui input data */}
      <section style={{ marginBottom: 400 }}>
        <h2 className="text-center">List Product</h2>
        <table className="table table-striped" id="tableInput">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category </th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Desciption</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
        </table>
        <input
          className="form-control"
          type="text"
          placeholder="Search by Product Name"
          aria-label="default input example"
          style={{ width: 220 }}
        />
        {/* button untuk delete dan search */}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-primary">
            Deletion
          </button>
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
        </div>
        <div style={{ width: '240px', marginTop: '24px' }}>
          <button className="btn btn-primary" onClick={randomNumber}>
            Random Number
          </button>
        </div>
      </section>
    </>
  );
}
