import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currency } from '../redux/actions';

class WalletForm extends Component {
  state = {
    arrayCurrencies: [],
  };

  componentDidMount() {
    this.currency();
  }

  currencyRequest = async () => {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };

  currency = async () => {
    const { dispatch } = this.props;
    const moedas = await this.currencyRequest();
    delete moedas.USDT;
    const currencies = Object.keys(moedas);
    this.setState({
      arrayCurrencies: currencies,
    });
    dispatch(currency(currencies));
  };

  render() {
    const { arrayCurrencies } = this.state;
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
              { arrayCurrencies.map((a) => <option key={ a }>{ a }</option>) }
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

WalletForm.propTypes = {
  dispatch: PropTypes.string,
}.isRequired;

export default connect()(WalletForm);
