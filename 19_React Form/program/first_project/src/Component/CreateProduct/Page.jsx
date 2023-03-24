import './page.css';
import iconBootstrap from './img/Bootstrap.png';
import Navbar from './Header/header';
import { article } from './Article/article';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Page() {
  const [product, setProduct] = useState([]);
  const inputImageRef = useRef(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = () => {
    const productName = getValues('productName');
    const productCategory = getValues('productCategory');
    const imgFile = inputImageRef.current.files[0];
    const productCondition = getValues('productCondition');
    const additionalDesciption = getValues('additionalDesciption');
    const productPrice = getValues('productPrice');
    const newProduct = {
      productName,
      productCategory,
      imageFile: imgFile.name,
      productCondition,
      additionalDesciption,
      productPrice,
    };
    setProduct([...product, newProduct]);
  };

  const removeField = () => {
    const id = 0;
    if (window.confirm('Apakah ingin menghapus data ini?')) {
      const copy = [...product];
      copy.splice(id, 1);
      setProduct(copy);
    }
  };

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
                    <form onSubmit={handleSubmit(handleOnSubmit)}>
                      <div className="mb-3 col-md-8">
                        <label htmlFor="productname" className="form-label">
                          Product name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="productName"
                          aria-label="default input example"
                          name="productName"
                          {...register('productName', {
                            required: 'Product Name harus diisi',
                            pattern: {
                              value: /^[A-Za-z ]*$/,
                              message:
                                'Gunakan karakter huruf saja pada Product Name',
                            },
                          })}
                        />
                        <div className="form-text text-danger">
                          {errors?.productName?.message}
                        </div>
                      </div>

                      <div className="mb-3 col-md-5">
                        <label htmlFor="productcategory" className="form-label">
                          Product Category
                        </label>
                        <select
                          name="productCategory"
                          className="form-select"
                          {...register('productCategory', {
                            required: 'Product Category harus diisi',
                          })}
                        >
                          <option selected="" value="">
                            Choose...
                          </option>
                          <option selected="" value="Ipsum">
                            Ipsum
                          </option>
                        </select>
                        <div className="form-text text-danger">
                          {errors?.productCategory?.message}
                        </div>
                      </div>
                      <div className="mb-3  col-md-5">
                        <label htmlFor="image" className="form-label pimary">
                          Image of Product
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          ref={inputImageRef}
                          accept=".jpg,.png"
                          required
                        />
                        <div className="form-text text-danger">
                          {errors?.image?.message}
                        </div>
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
                            id="flexRadioDefault1"
                            defaultValue="Brand New"
                            defaultChecked=""
                            {...register('productCondition', {
                              required: 'Product Condition harus diisi',
                            })}
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
                            {...register('productCondition', {
                              required: 'Product Condition harus diisi',
                            })}
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
                            {...register('productCondition', {
                              required: 'Product Condition harus diisi',
                            })}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Refufbished
                          </label>
                        </div>
                        <div className="form-text text-danger">
                          {errors?.productCondition?.message}
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
                          name="additionalDesciption"
                          style={{ height: 100 }}
                          defaultValue={''}
                          {...register('additionalDesciption', {})}
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
                          name="productPrice"
                          type="number"
                          placeholder="$ 1"
                          aria-label="default input example"
                          {...register('productPrice', {
                            required: 'Product Price harus diisi',
                            max: {
                              value: 50,
                              message:
                                'Harga produk tidak boleh lebih dari 50$',
                            },
                          })}
                        />
                        <div className="form-text text-danger">
                          {errors?.productPrice?.message}
                        </div>
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
                <td>{list.imageFile}</td>
                <td>{list.productCondition}</td>
                <td>{list.additionalDesciption}</td>
                <td>{list.productPrice}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={removeField}
                  >
                    Delete
                  </button>
                  <button type="button" className="btn btn-success">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
