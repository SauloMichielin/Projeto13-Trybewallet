import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    valor: 0,
    cambio: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { valor, cambio } = this.state;
    return (
      <>
        <div>Header</div>
        <div data-testid="email-field">
          Email:
          { email }
        </div>
        <div data-testid="total-field">
          Despesa total:
          { valor }
        </div>
        <div data-testid="header-currency-field">
          Moeda:
          { cambio }
        </div>
      </>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => (
  { email: state.user.email }
);

export default connect(mapStateToProps)(Header);
