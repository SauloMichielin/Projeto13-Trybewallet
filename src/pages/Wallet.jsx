import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <WalletForm />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Wallet);
