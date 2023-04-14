import { useMutation } from '@apollo/client';
import { DeleteProduct } from '../../apis/data-product';
import { GetProducts } from '../../apis/data-product';

export default function useDelete() {
  const [deleteProduct, { loading: loadingDelete }] = useMutation(
    DeleteProduct,
    {
      refetchQueries: [GetProducts],
    }
  );

  return {
    deleteProduct,
    loadingDelete,
  };
}
