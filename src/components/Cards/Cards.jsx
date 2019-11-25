import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css'

const Cards = ({ img, alt, text, url, info, title }) => (
  <article className='card-list'>
    <img src={img} alt={alt} />
    <strong>{title}</strong>
    <p>{text}</p>
    <Link className='card-link' to={url}>{info}</Link>
  </article>
)


export default Cards;