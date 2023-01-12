import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { currency } from '../redux/actions';

class Wallet extends React.Component {
  // The big boss!!!
  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => {
        const dataApi = Object.keys(data).filter((value) => value !== 'USDT');
        const { dispatch } = this.props;
        dispatch(currency(dataApi));
      });
  }

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
