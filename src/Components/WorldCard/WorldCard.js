import React from 'react'
import './WorldCard.scss'
import { Link } from 'react-router-dom'

const WorldCard = ({ title, abstract, url, datePublished, author, noInfo }) => {
  return (
    <>
      <Link target='_blank' className='world-link' to={url}>
        <div className='world-card-container'>
          <h1 className='world-title'>{title}</h1>
          <h1 className='world-error'>{noInfo}</h1>
          <small className='world-date'>Published: {datePublished}</small>
          <small className='world-byline'>{author}</small>
          <p className='world-abstract'>{abstract}</p>
        </div>
      </Link>
    </>
  )
}

export default WorldCard