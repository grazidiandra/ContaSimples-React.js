import React, { Component, Fragment } from 'react';
import { login } from '../../services/auth'
import { setToken } from '../../services/auth';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';
import './Login.css'

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
          <NavBar url={this.props.match.url}/>
        <div className='login-container'>
          <form onSubmit={this.handleLogin} method="POST" className='login-form'>
            <h1 className='login-title'>A conta digital PJ feita para <strong>autônomos e pequenas empresas</strong><span className='login-dot'></span></h1>
            <p className='login-text'>Acesse agora sua conta, <strong>é fácil e rápido</strong>.</p>
            {this.state.error && <p>{this.state.error}</p>}
            <Input type="text" placeholder="CPF" name="cpf" value={this.state.cpf} handleChange={this.handleFormEdit} />
            <Input type="text" placeholder="email" name="email" value={this.state.email} handleChange={this.handleFormEdit} />
            <Input type="password" placeholder="Senha" name="password" value={this.state.password} handleChange={this.handleFormEdit} />
            <button className='login-btn' type="submit">ACESSAR</button>
          </form>
          <figure className='login-figure'>
          <img src='/images/conta-digital-pj.jpg' alt='mobile' className='login-img'/>
          </figure>
        </div>
      </Fragment>
    );
  }
}


export default Login;