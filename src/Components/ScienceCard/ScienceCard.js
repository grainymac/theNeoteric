import React from 'react'
import './ScienceCard.scss'
import { Link } from 'react-router-dom'

const ScienceCard = ({ title, abstract, url, datePublished, author }) => {
  return (
    <>
      <Link target='_blank' className='science-link' to={url}>
        <div className='science-card-container'>
          <h1 className='science-title'>{title}</h1>
          <small className='science-date'>Published: {datePublished}</small>
          <small className='science-byline'>{author}</small>
          <p className='science-abstract'>{abstract}</p>
        </div>
      </Link>
    </>
  )
}

export default ScienceCard