import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletForm extends Component {
  state = {
    valor: 0,
    moeda: 'USD',
    metodo: 'Dinheiro',
    categoria: 'Alimentação',
    descricao: '',
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

  render() {
    const {
      valor,
      moeda,
      metodo,
      categoria,
      descricao } = this.state;
    const { currencies } = this.props;
    return (
      <>
        <div>WalletForm</div>
        <form action="">
          <label htmlFor="valor">
            Valor:
            <input
              type="number"
              name="valor"
              id="valor"
              value={ valor }
              onChange={ this.handleChange }
              min="0"
              data-testid="value-input"
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              name="moeda"
              id="moeda"
              value={ moeda }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              { currencies.map((a) => <option key={ a }>{ a }</option>) }
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento:
            <select
              name="metodo"
              id="metodo"
              value={ metodo }
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select
              name="categoria"
              id="categoria"
              data-testid="tag-input"
              value={ categoria }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              name="descricao"
              id="descricao"
              data-testid="description-input"
              value={ descricao }
              onChange={ this.handleChange }
            />
          </label>
          <input type="submit" value="Adicionar despesa" />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
