import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  // async componentDidMount() {
  //   taxasApi();
  // }

  // getCurrency = () => {
  //   const { dispatch } = this.props;
  //   dispatch(updatedTable(this.state));
  // };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = async (event) => {
    const { dispatch } = this.props;
    const {
      id,
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
    event.preventDefault();
    const api = await fetch('https://economia.awesomeapi.com.br/json/all');
    const retorno = await api.json();
    // parseFloat(value);
    const objeto = {
      id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: retorno,
    };
    dispatch(addDespesa(objeto));
    this.setState({
      id: (id + 1),
    }, () => {
      this.setState({
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
      });
    });
    // let soma = 0;
    // const valores = lancamentos.map((a) => +a.valor);
    // soma = valores.reduce((acumulador, numero) => {
    //   return acumulador += numero;
    // }, 0);
    // dispatch(addSoma(soma));
  };

  render() {
    const {
      value,
      currency,
      method,
      tag,
      description } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form action="">
          <label htmlFor="value">
            Valor:
            <input
              type="number"
              name="value"
              id="value"
              value={ value }
              onChange={ this.handleChange }
              min="0"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              { currencies.map((a) => <option key={ a }>{ a }</option>) }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              name="method"
              id="method"
              value={ method }
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              id="tag"
              data-testid="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              data-testid="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <input
            type="submit"
            value="Adicionar despesa"
            onClick={ this.handleClick }
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  lancamentos: state.wallet.expenses,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
