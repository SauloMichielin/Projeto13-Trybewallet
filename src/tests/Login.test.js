import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes do arquivo App.js', () => {
  it('Testando rota "/"', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input');
    const senha = screen.getByTestId('password-input');
    const botao = screen.getByRole('button');
    // const { user: { email } } = store.getState();
    userEvent.type(emailInput, 'saulo@saulo.com');
    userEvent.type(senha, 'Saulo1');
    userEvent.click(botao);
    // expect(email).toBe('saulo@saulo.com');
  });
});
