import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLogin } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    disabledOption: true,
  };

  onHandleChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value }, () => {
      const {
        email,
        senha,
      } = this.state;
      const textoMinimo = 6;
      const regex = /\S+@\S+\.\S+/;
      const disableState = regex.test(email)
        && senha.length >= textoMinimo;
      this.setState({ disabledOption: !disableState });
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(addLogin(this.state));
    history.push('/carteira');
  };

  render() {
    const { disabledOption, email, senha } = this.state;
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <h1>Faça Login</h1>
        <label htmlFor="emailInput">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            id="emailInput"
            onChange={ this.onHandleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="senhaInput">
          Senha
          <input
            type="password"
            name="senha"
            value={ senha }
            id="senhaInput"
            onChange={ this.onHandleChange }
            data-testid="password-input"
          />
        </label>
        <button type="submit" disabled={ disabledOption }>Entrar</button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.string,
  history: PropTypes.string,
}.isRequired;

export default connect()(Login);
