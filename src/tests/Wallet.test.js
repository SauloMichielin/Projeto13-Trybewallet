import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WalletForm from '../components/WalletForm';
import { renderWithRedux } from './helpers/renderWith';
import { initialExpenses } from '../../cypress/utils/constants';
import Header from '../components/Header';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

const CURRENCY_USD_BRL = 'Dólar Americano/Real Brasileiro';

const fillExpenseForm = ({ description, value, method, tag }, editor = false) => {
  const valueInput = screen.getByTestId('value-input');
  const descriptionInput = screen.getByTestId('description-input');
  const methodInput = screen.getByTestId('method-input');
  const tagInput = screen.getByTestId('tag-input');
  const buttonSubmit = screen.getByRole('button', { name: editor ? 'Editar despesa' : 'Adicionar despesa' });
  userEvent.type(valueInput, value);
  userEvent.type(descriptionInput, description);
  userEvent.selectOptions(methodInput, method);
  userEvent.selectOptions(tagInput, tag);
  userEvent.click(buttonSubmit);
};

const nome = async (a) => {
  expect(await screen.findByRole('cell', {
    name: a,
  })).toBeInTheDocument();
};

const mockFetch = () => Promise.resolve({
  json: () => Promise.resolve(mockData),
});

describe('Testes do componente WalletForm', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockFetch);
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
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
  it('Verifica se uma despesa é adicionada', async () => {
    renderWithRedux(<Wallet />);
    fillExpenseForm(initialExpenses[0]);
    const verificacao = {
      ...initialExpenses[0],
      value: '50.00',
      currency: CURRENCY_USD_BRL,
    };
    Object.values(verificacao).forEach(nome);
  });

  it('Verifica se uma despesa é deletada', async () => {
    renderWithRedux(<Wallet />);
    fillExpenseForm(initialExpenses[0]);
    const botaoDel = await screen.findByRole('button', { name: 'Excluir' });
    expect(botaoDel).toBeInTheDocument();
    userEvent.click(botaoDel);
    expect(botaoDel).not.toBeInTheDocument();
  });
  it('Verifica se uma despesa é editada', async () => {
    renderWithRedux(<Wallet />);
    fillExpenseForm(initialExpenses[0]);
    const botaoEdit = await screen.findByRole('button', { name: 'Editar' });
    expect(botaoEdit).toBeInTheDocument();
    userEvent.click(botaoEdit);
    fillExpenseForm({ ...initialExpenses[1], currency: 'USD' }, true);
    const verificacao = {
      ...initialExpenses[1],
      value: '50.00',
      currency: CURRENCY_USD_BRL,
    };
    Object.values(verificacao).forEach(nome);
  });
});
