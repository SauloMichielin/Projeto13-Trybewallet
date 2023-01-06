import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const {
      email,
      senha,
    } = this.props
    return (
      <>
        <div>TrybeWallet</div>
        <p>{ email }</p>
        <p>{ senha }</p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.user
  }
}

export default connect(mapStateToProps)(Wallet);
