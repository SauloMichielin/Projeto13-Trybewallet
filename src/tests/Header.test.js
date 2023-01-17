import React from 'react';
import { screen } from '@testing-library/react';
import Header from '../components/Header';
import { renderWithRedux } from './helpers/renderWith';

describe('Testes do componente Header', () => {
  it('Verifica renderização do login', () => {
    renderWithRedux(<Header />);
    const email = screen.getByTestId('email-field');
    const somatoria = screen.getByTestId('total-field');
    const currency = screen.getByTestId('header-currency-field');
    expect(email).toBeInTheDocument();
    expect(somatoria).toBeInTheDocument();
    expect(somatoria).toHaveTextContent('0');
    expect(currency).toBeInTheDocument();
  });
});
