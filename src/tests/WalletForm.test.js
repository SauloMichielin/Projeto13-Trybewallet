import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../components/WalletForm';
import { renderWithRedux } from './helpers/renderWith';

describe('Testes do componente WalletForm', () => {
  it('verifica funcionalidades do formulário', async () => {
    renderWithRedux(<WalletForm />);
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const currency = screen.getByTestId('currency-input');
    const method = screen.getByTestId('method-input');
    const tag = screen.getByTestId('tag-input');
    const botao = screen.getByRole('button');
    userEvent.type(value, '100');
    userEvent.type(description, 'Descrição');
    userEvent.type(currency, 'USD');
    userEvent.type(method, 'Dinheiro');
    userEvent.type(tag, 'Alimentação');
    userEvent.click(botao);
  });
});
