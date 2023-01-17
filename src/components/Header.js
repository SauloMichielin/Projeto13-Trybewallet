import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    cambio: 'BRL',
  };

  render() {
    const { email, total } = this.props;
    const { cambio } = this.state;
    const arrayTotal = total.map((a) => (
      a.value * a.exchangeRates[a.currency].ask
    ));
    const somaTotal = arrayTotal.reduce((acc, sum) => acc + sum, 0);
    const somatoria = somaTotal.toFixed(2);
    return (
      <>
        <label htmlFor="email">
          Email:
          <div id="email" data-testid="email-field">
            { email }
          </div>
        </label>
        <label htmlFor="total">
          Despesa total:
          <div id="total" data-testid="total-field">
            { somatoria }
          </div>
        </label>
        <label htmlFor="Moeda">
          Moeda:
          <div id="Moeda" data-testid="header-currency-field">
            { cambio }
          </div>
        </label>
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => (
  { email: state.user.email,
    total: state.wallet.expenses,
  }
);

export default connect(mapStateToProps)(Header);
