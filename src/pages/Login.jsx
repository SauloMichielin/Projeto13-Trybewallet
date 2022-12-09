import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    disabledOption: true,
    email: '',
    senha: '',
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
    dispatch(addLogin(this.state));
  };

  render() {
    const { disabledOption, email, senha } = this.state;
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
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
