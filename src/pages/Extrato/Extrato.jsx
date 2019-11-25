import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { api } from '../../services/api';


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
    const { name } = this.state.user
    return (
      <div>
        <NavBar url={this.props.match.url} nameUser={name} />
        <div>
          
        </div>
      </div>
    );
  }
}

export default Extrato;