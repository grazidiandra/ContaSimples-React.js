import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { api } from '../../services/api';
import './Extrato.css'


class Extrato extends Component {
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
    const { name, bankStatement, card } = this.state.user

    return (
      <div >
        <NavBar url={this.props.match.url} nameUser={name} />
        <span className='extrato-container'>
        <div  className='card-container' >
          {card? card.map((ele,id) => (
            <Fragment key={id} >
            <p>Titular: {ele.name}</p>
            <p>CPF: {ele.cpf}</p>
            <p>Número do cartão: {ele.numberCar}</p>
            <p>Limite do cartão: R$ {ele.limit}</p>
            <Link to='/home' className='extrato-link'>Home</Link>
            </Fragment>
          )) : null}
          
        </div>
        <div className='bankStatement-container'>
          {bankStatement ? bankStatement.map((ele, id) => (
            <span className='bankStatement-list' key={id}>
              <p> {ele.date} </p>
              <p> {ele.institute}</p>
           {ele.type === 'crédito' ? <strong style={{color: 'green'}}> {ele.type}</strong> : <strong style={{color: 'red'}}> {ele.type}</strong> } 
              <p> {ele.amount}</p>
            </span>
          )) : null}
        </div>
        </span>
      </div>
    );
  }
}

export default Extrato;