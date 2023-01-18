import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
        <WalletForm />
        <Table />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect()(Wallet);
