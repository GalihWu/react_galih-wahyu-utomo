import { gql } from '@apollo/client';

export const GetProducts = gql`
  query MyQuery {
    store_product {
      id
      price
      product_category
      product_freshness
      product_name
      aditional_information
    }
  }
`;

export const UpdateProduct = gql`
  mutation MyMutation($id: Int!, $product_name: String!) {
    update_store_product_by_pk(
      pk_columns: { id: $id }
      _set: { product_name: $product_name }
    ) {
      id
      price
      product_category
      product_freshness
      product_name
      aditional_information
    }
  }
`;

export const DeleteProduct = gql`
  mutation MyMutation($id: Int!) {
    delete_store_product_by_pk(id: $id) {
      id
    }
  }
`;

export const SubscriptionProduct = gql`
  subscription MySubscription {
    store_product {
      aditional_information
      id
      price
      product_category
      product_freshness
      product_name
    }
  }
`;
