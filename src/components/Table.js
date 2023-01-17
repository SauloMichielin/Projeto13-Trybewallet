import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delLanc } from '../redux/actions';

class Table extends Component {
  render() {
    const { lancamentos, dispatch } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { lancamentos.map((a) => (
            <tr key={ a.id }>
              <td>
                { a.description }
              </td>
              <td>
                { a.tag }
              </td>
              <td>
                { a.method }
              </td>
              <td>
                { Number(a.value).toFixed(2) }
              </td>
              <td>
                { (a.exchangeRates[a.currency].name) }
              </td>
              <td>
                { Number(a.exchangeRates[a.currency].ask).toFixed(2)}
              </td>
              <td>
                { Number(a.value * a.exchangeRates[a.currency].ask)
                  .toFixed(2) }
              </td>
              <td>
                Real
              </td>
              <td>
                <button
                  type="button"
                >
                  Editar
                </button>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => dispatch(delLanc(a)) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  dispatch: PropTypes.string,
  lancamentos: PropTypes.arrayOf(PropTypes.objectOf),
}.isRequired;

const mapStateToProps = (state) => ({
  lancamentos: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
