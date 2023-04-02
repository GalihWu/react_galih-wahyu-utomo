import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormProduct from './form-product';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Form Product', () => {
  test('render form product', () => {
    render(
      <Provider store={store}>
        <FormProduct />
      </Provider>
    );
    expect(screen.getByText('Detail Product')).toBeInTheDocument();
    expect(screen.getByLabelText(/Product name/)).toBeInTheDocument();
  });
  test('render form product', () => {
    render(
      <Provider store={store}>
        <FormProduct />
      </Provider>
    );
    const inputProductName = screen.getByRole('textbox', {
      name: /productName/i,
    });
    const inputProductDesc = screen.getByRole('textbox', {
      name: /additionalDesciption/i,
    });
    const inputProductPrice = screen.getByRole('spinbutton', {
      name: /productPrice/i,
    });

    fireEvent.input(inputProductName, {
      target: { value: 'Barang' },
    });
    fireEvent.input(inputProductDesc, {
      target: { value: 'Deskripsi Barang' },
    });
    fireEvent.input(inputProductPrice, {
      target: { value: 21 },
    });

    expect(screen.getByLabelText(/Product name/)).toHaveValue('Barang');
    expect(screen.getByLabelText(/Additional Description/)).toHaveValue(
      'Deskripsi Barang'
    );
    expect(screen.getByLabelText(/Product Price/)).toHaveValue(21);
  });
});
