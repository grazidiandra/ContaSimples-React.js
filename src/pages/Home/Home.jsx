import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { api } from '../../services/api';
import Cards from '../../components/Cards/Cards';
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  async componentDidMount() {
    const response = await api.get('/users')
    this.setState({ user: response.data[0] })
  }



  render() {
    const { name } = this.state.user
    return (
      <div>
        <NavBar url={this.props.match.url} nameUser={name} />
        <div className='card-container'>
          <Cards img={'/images/icon3.png'} alt={'icon3'} title={'Conta Corrente'} text={'Consulte aqui seu extrato bancário dos últimos dias'} url={'/extrato'} info={'Exibir'}/>
          <Cards img={'/images/icon5.png'} alt={'icon5'} title={'Cartão de Crédito'} text={'Consulte aqui seu extrato bancário dos últimos dias'} url={'/home'} info={'Em breve'} />
          <Cards img={'/images/icon2.png'} alt={'icon2'} title={'Investimento'} text={'Consulte aqui seu home bancário dos últimos dias'} url={'/home'} info={'Em breve'}/>
          <Cards img={'/images/icon4.png'} alt={'icon4'} title={'Transferências'} text={'Consulte aqui seu home bancário dos últimos dias'} url={'/home'} info={'Em breve'} />
        </div>

      </div>
    );
  }
}

export default Home;