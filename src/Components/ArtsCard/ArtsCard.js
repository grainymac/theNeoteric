import React from 'react'
import './ArtsCard.scss'
import { Link } from 'react-router-dom'

const ArtsCard = ({ title, abstract, url, datePublished, author }) => {
  return (
    <>
      <Link target='_blank' className='arts-link' to={url}>
        <div className='arts-card-container'>
          <h1 className='arts-title'>{title}</h1>
          <small className='arts-date'>Published: {datePublished}</small>
          <small className='arts-byline'>{author}</small>
          <p className='arts-abstract'>{abstract}</p>
        </div>
      </Link>
    </>
  )
}

export default ArtsCard