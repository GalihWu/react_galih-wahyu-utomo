import useDelete from '../hooks/useDelete';
import useUpdate from '../hooks/useUpdate';
import empty from './../../assets/img/empty.png';
import useSubs from '../hooks/useSubs';

const StoreManagement = () => {
  const { data, loading, error } = useSubs();
  const { updateProduct, loadingUpdate } = useUpdate();
  const { deleteProduct, loadingDelete } = useDelete();

  if (loading || loadingDelete || loadingUpdate)
    return (
      <h2
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Loading...
      </h2>
    );
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
    <div className="m-5">
      <h2 className="text-center" style={{ margin: '90px 0' }}>
        Store Management
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '75px',
        }}
      >
        {data.store_product.map((product) => (
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
    </div>
  );
};
export default StoreManagement;
