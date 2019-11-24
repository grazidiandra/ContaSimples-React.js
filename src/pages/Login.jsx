import React, { Component, Fragment } from 'react';
import Input from '../components/Input/Input';
import { login } from '../services/api'
import { setToken } from '../services/auth';
import NavBar from '../components/NavBar/NavBar';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      cpf: '',
      error: ''
    }

    this.handleFormEdit = this.handleFormEdit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleFormEdit(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleLogin(e) {
    e.preventDefault();
    const { email, password, cpf } = this.state;
    if (!email || !password || !cpf) {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      try {
        const { accessToken } = await login(email, password, cpf);
        setToken(accessToken);
        this.props.history.push("/home");
      } catch (err) {
        this.setState({ error: "Ocorreu um erro ao tentar fazer o acesso" });
      }
    }
  }

  render() {
    return (
      <Fragment>
          <NavBar />
        <div>
          <form onSubmit={this.handleLogin} method="POST">
            {this.state.error && <p>{this.state.error}</p>}
            <Input type="text" placeholder="CPF" name="cpf" value={this.state.password} handleChange={this.handleFormEdit} />
            <Input type="text" placeholder="email" name="email" value={this.state.email} handleChange={this.handleFormEdit} />
            <Input type="password" placeholder="Senha" name="password" value={this.state.password} handleChange={this.handleFormEdit} />
            <button type="submit">ACESSAR</button>
          </form>
          <img src='/images/conta-digital-pj.jpg' alt='mobile' />
        </div>
      </Fragment>
    );
  }
}


export default Login;