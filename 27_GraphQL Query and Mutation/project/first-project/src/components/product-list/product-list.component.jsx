import { useQuery, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import empty from './../../assets/img/empty.png';
import {
  GetProducts,
  DeleteProduct,
  UpdateProduct,
} from '../../apis/data-product';

const ProductList = () => {
  const { loading, error, data } = useQuery(GetProducts);
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DeleteProduct,
    { refetchQueries: [GetProducts] }
  );
  const [updateProduct, { loading: loadingUpdate }] = useMutation(
    UpdateProduct,
    { refetchQueries: [GetProducts] }
  );
  if (loading || loadingDelete || loadingUpdate) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const updateHandle = (id, newName) => {
    updateProduct({
      variables: {
        id: id,
        product_name: newName,
      },
    });
  };

  const deleteHandle = (idx) => {
    deleteProduct({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <>
      <h2>Product List</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '75px',
        }}
      >
        {data.store_product
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <div key={product.id}>
              <div className="card" style={{ width: '220px', height: '450px' }}>
                <img
                  src={empty}
                  className="card-img-top"
                  alt="empty"
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.product_name}</h5>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateHandle(product.id, e.target.productName.value);
                      e.target.productName.value = '';
                    }}
                  >
                    <input type="text" name="productName" />
                    <button type="submit" className="btn btn-primary">
                      Change name
                    </button>
                  </form>
                  <p>{product.aditional_information}</p>
                  <div className="text-end mt-auto">
                    <span>{product.product_freshness}</span>
                    <span className="text-warning"> ${product.price}</span>
                  </div>
                  <div
                    className="btn btn-danger position-absolute top-0 end-0"
                    onClick={() => deleteHandle(product.id)}
                  >
                    X
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-end mt-4">
        <Link className="btn btn-primary " to="/storage">
          learn more
        </Link>
      </div>
    </>
  );
};

export default ProductList;
