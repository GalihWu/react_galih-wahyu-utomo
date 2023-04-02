import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../../store/features/product-slice';

const FormProduct = () => {
  const dataProduct = useSelector((state) => state.product.products);
  // console.log(dataProduct);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    productName: '',
    productCategory: '',
    imageFile: '',
    productCondition: '',
    additionalDescription: '',
    productPrice: 0,
  });

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
    const image = inputImageRef.current.files[0];
    const productFreshness = getValues('productCondition');
    const additionalDescription = getValues('additionalDesciption');
    const productPrice = getValues('productPrice');
    const newProduct = {
      productName,
      productCategory,
      image: image.name,
      productFreshness,
      additionalDescription,
      productPrice,
    };
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8 mt-5">
        <h3>Detail Product</h3>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mb-3 col-md-8">
            <label htmlFor="productName" className="form-label">
              Product name
            </label>
            <input
              className="form-control"
              type="text"
              id="productName"
              aria-label="productName"
              name="productName"
              {...register('productName', {
                required: 'Product Name harus diisi',
                pattern: {
                  value: /^[A-Za-z ]*$/,
                  message: 'Gunakan karakter huruf saja pada Product Name',
                },
              })}
            />
            <div className="form-text text-danger">
              {errors?.productName?.message}
            </div>
          </div>

          <div className="mb-3 col-md-5">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              name="productCategory"
              aria-label="productCategory"
              className="form-select"
              {...register('productCategory', {
                required: 'Product Category harus diisi',
              })}
            >
              <option value="">Choose...</option>
              <option value="Ipsum">Ipsum</option>
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
              <label className="form-check-label" htmlFor="flexRadioDefault1">
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
              <label className="form-check-label" htmlFor="flexRadioDefault2">
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
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Refufbished
              </label>
            </div>
            <div className="form-text text-danger">
              {errors?.productCondition?.message}
            </div>
          </div>

          <div className="mb-2">
            <label htmlFor="additionalDesciption" className="form-label">
              Additional Description
            </label>
          </div>
          <div className="form-floating mb-2">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              name="additionalDesciption"
              id="additionalDesciption"
              aria-label="additionalDesciption"
              style={{ height: 100 }}
              defaultValue={''}
              {...register('additionalDesciption', {})}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input
              className="form-control"
              name="productPrice"
              id="productPrice"
              type="number"
              placeholder="$ 1"
              aria-label="productPrice"
              {...register('productPrice', {
                required: 'Product Price harus diisi',
                max: {
                  value: 50,
                  message: 'Harga produk tidak boleh lebih dari 50$',
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
            style={{ marginTop: 100, width: '100%' }}
          />
        </form>
      </div>
      <div className="col-md-3" />
    </div>
  );
};
export default FormProduct;
