import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDespesa, currencyAction, editItens } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    this.filtro();
  }

  requisicao = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    return data;
  };

  filtro = async () => {
    const { dispatch } = this.props;
    const objeto = await this.requisicao();
    delete objeto.USDT;
    const moedas = Object.entries(objeto).map((a) => a[0]);
    console.log(moedas);
    dispatch(currencyAction(moedas));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEdit = (event) => {
    event.preventDefault();
    const { dispatch, idItens, lancamentos } = this.props;
    const {
      value,
      currency,
      method,
      tag,
      description,
    } = this.state;
    const nextState = {
      id: idItens[0].id,
      value,
      currency,
      method,
      tag,
      description,
      exchangeRates: idItens[0].exchangeRates,
    };
    const novoArray = lancamentos.map((expense) => {
      if (expense.id === nextState.id) {
        return nextState;
      }
      return expense;
    });
    dispatch(editItens(novoArray));
  };

  handleAdd = async (event) => {
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
  };

  render() {
    const {
      value,
      currency,
      method,
      tag,
      description } = this.state;
    const { currencies, editor } = this.props;
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
          <button
            type="submit"
            onClick={ editor ? this.handleEdit : this.handleAdd }
          >
            { editor ? 'Editar despesa' : 'Adicionar despesa' }
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  lancamentos: state.wallet.expenses,
  idItens: state.wallet.idToEdit,
  editor: state.wallet.editor,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  lancamentos: PropTypes.arrayOf(PropTypes.string),
  idItens: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
