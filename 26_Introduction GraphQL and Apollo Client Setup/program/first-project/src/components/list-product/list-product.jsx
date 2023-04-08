import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteProduct,
  fetchProduct,
} from '../../store/features/product-slice';
// import { removeProduct } from '../../store/features/product-slice';

const ListProduct = () => {
  const dataProduct = useSelector((state) => state.product.data);
  // console.log(dataProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // const [product, setProduct] = useState(dataProduct);
  const removeList = (remove) => {
    dispatch(deleteProduct(remove));
  };

  return (
    <section style={{ marginBottom: 400, marginTop: 50 }}>
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
          {dataProduct?.map((list, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{list.productName}</td>
              <td>{list.productCategory}</td>
              <td>{list.image}</td>
              <td>{list.productFreshness}</td>
              <td>{list.additionalDescription}</td>
              <td>{`$ ${list.productPrice}`}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    removeList(list.id);
                  }}
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
  );
};

export default ListProduct;
