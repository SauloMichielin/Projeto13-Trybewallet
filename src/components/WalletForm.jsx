import React, { Component } from 'react';
import moedas from './Api';

class WalletForm extends Component {
  render() {
    return (
      <>
        <div>WalletForm</div>
        <form action="">
          <label htmlFor="number">
            Valor:
            <input type="number" name="number" id="number" data-testid="value-input" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select name="moeda" id="moeda" data-testid="currency-input">
              {/* API https://economia.awesomeapi.com.br/json/all */}
              
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento:
            <select name="metodo" id="metodo" data-testid="method-input">
              <option value="">Dinheiro</option>
              <option value="">Cartão de crédito</option>
              <option value="">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select name="categoria" id="categoria" data-testid="tag-input">
              <option value="">Alimentação</option>
              <option value="">Lazer</option>
              <option value="">Trabalho</option>
              <option value="">Transporte</option>
              <option value="">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              name="descricao"
              id="descricao"
              data-testid="description-input"
            />
          </label>
        </form>
      </>
    );
  }
}

export default WalletForm;
