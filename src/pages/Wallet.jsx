import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <div>TrybeWallet</div>
        <Header />
      </>
    )
  }
}

const mapStateToProps = () => {
  
}

export default connect(mapStateToProps)(Wallet);
