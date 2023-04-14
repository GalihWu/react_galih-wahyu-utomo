import { useSubscription } from '@apollo/client';
import { SubscriptionProduct } from '../../apis/data-product';

export default function useSubs() {
  const { data, loading, error } = useSubscription(SubscriptionProduct);

  return {
    data,
    loading,
    error,
  };
}
