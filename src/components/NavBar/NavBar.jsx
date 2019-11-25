import React from 'react';
import './NavBar.css'

const NavBar = ({ url, nameUser }) => (
  <div className='NavBar-container'>
    <figure className='NavBar-figure'>
    <img src='/images/logo-conta-simples.svg' alt='logo' />
    </figure>
    <ul className='NavBar-ul'>
      <li><a href='https://contasimples.com/beneficios'>BENEFÍCIOS</a></li>
      <li><a href='https://contasimples.com/cartao-de-credito/'>CARTÃO</a></li>
      <li><a href='https://contasimples.com/gestao-de-cobranca/'>COBRANÇA</a></li>
      <li><a href='https://contasimples.com/tarifas/'>TARIFAS</a></li>
      <li><a href='https://contasimples.com/blog/'>BLOG</a></li>
      {url === '/' ? <a href='https://contasimples.com/pedir-convite' className='NavBar-ul-btn'>FAÇA SEU CARTÃO</a> : <li className='NavBar-user'> Olá, {nameUser} </li>}
    </ul>
  </div>
)

export default NavBar;