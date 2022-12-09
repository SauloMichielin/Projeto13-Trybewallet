import React from 'react';
import { connect } from 'react-redux';
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
    const { dispatch } = this.props;
    console.log(dispatch);
    dispatch(addLogin(this.state));
  };

  render() {
    const { disabledOption, email, senha } = this.state;
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <h1>Faça Login</h1>
        <label htmlFor="emailInput" data-testid="email-input">
          Email
          <input
            type="email"
            name="email"
            value={ email }
            id="emailInput"
            onChange={ this.onHandleChange }
          />
        </label>
        <label htmlFor="senhaInput" data-testid="password-input">
          Senha
          <input
            type="password"
            name="senha"
            value={ senha }
            id="senhaInput"
            onChange={ this.onHandleChange }
          />
        </label>
        <button type="submit" disabled={ disabledOption }>Enviar</button>
      </form>
    );
  }
}

export default connect()(Login);
