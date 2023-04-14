import { useMutation } from '@apollo/client';
import { UpdateProduct } from '../../apis/data-product';
import { GetProducts } from '../../apis/data-product';

export default function useUpdate() {
  const [updateProduct, { loading: loadingUpdate }] = useMutation(
    UpdateProduct,
    {
      refetchQueries: [GetProducts],
    }
  );

  return {
    updateProduct,
    loadingUpdate,
  };
}
