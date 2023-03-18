import './page.css';
import iconBootstrap from './img/Bootstrap.png';
import Navbar from './Header/header';
import { article } from './Article/article';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Page() {
  useEffect(() => {
    alert('Welcome');
  }, []);

  const [data, setData] = useState({
    productName: ' ',
    productCategory: '',
    productCondition: '',
    additionalDesciption: '',
    productPrice: 0,
  });
  const [product, setProduct] = useState([]);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.productPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productName: data.productName,
      productCategory: data.productCategory,
      productCondition: data.productCondition,
      additionalDesciption: data.additionalDesciption,
      productPrice: data.productPrice,
    };

    // console.log(newProduct);
    setProduct([...product, newProduct]);
  };
  // console.log(product);
  const removeInputFields = (index) => {
    const rows = [...data];
    rows.splice(index, 1);
    setData(rows);
  };

  // const randomNumber = () => {
  //   console.log(Math.floor(Math.random() * 11));
  // };

  return (
    <>
      <Navbar />
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
                <div className="text-center">
                  <Link to="/LandingPage" className="btn btn-primary">
                    Landing Page
                  </Link>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-2" />
                  <div className="col-md-8">
                    <h3>Detail Product</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3 col-md-8">
                        <label htmlFor="productname" className="form-label">
                          Product name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={onChange}
                          aria-label="default input example"
                          value={data.productName}
                          name="productName"
                        />
                      </div>

                      <div className="mb-3 col-md-5">
                        <label htmlFor="productcategory" className="form-label">
                          Product Category
                        </label>
                        <select
                          name="productCategory"
                          onChange={onChange}
                          className="form-select"
                        >
                          <option selected="">Choose...</option>
                          <option selected="">Ipsum</option>
                        </select>
                      </div>
                      <div className="mb-3  col-md-5">
                        <label
                          htmlFor="image"
                          // id="imgProduct"
                          className="form-label pimary"
                        >
                          Image of Product
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          // id="imgProduct"
                          name="imgProduct"
                        />
                      </div>
                      <div className="mb-3" id="freshness">
                        <label htmlFor="freshness" className="form-label">
                          Product Freshness
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productCondition"
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                          // id="additional"
                          name="additionalDesciption"
                          onChange={onChange}
                          style={{ height: 100 }}
                          defaultValue={''}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Product Price
                        </label>
                        <input
                          className="form-control"
                          // id="price"
                          name="productPrice"
                          type="number"
                          placeholder="$ 1"
                          onChange={onChange}
                          aria-label="default input example"
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn submit btn-primary"
                        id="submitbtn"
                        style={{ marginTop: 100 }}
                      />
                    </form>
                  </div>
                  <div className="col-md-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            {product.map((list, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{list.productName}</td>
                <td>{list.productCategory}</td>
                <td>none</td>
                <td>{list.productCondition}</td>
                <td>{list.additionalDesciption}</td>
                <td>{list.productPrice}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      const id = 0;
                      if (window.confirm('Apakah ingin menghapus data ini?')) {
                        const copy = [...product];
                        copy.splice(id, 1);
                        setProduct(copy);
                      }
                    }}
                  >
                    Deletion
                  </button>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*
<input
className="form-control"
type="text"
          placeholder="Search by Product Name"
          aria-label="default input example"
          style={{ width: 220 }}
          />
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
        */}
      </section>
    </>
  );
}
