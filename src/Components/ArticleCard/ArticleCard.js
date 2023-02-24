import React from 'react'
import './ArticleCard.scss'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, abstract, url, datePublished, author, noInfo }) => {
  return (
    <>
      <Link target='_blank' className='article-link' to={url}>
        <div className='article-card-container'>
          <h1 className='article-title'>{title}</h1>
          <h1 className='article-error'>{noInfo}</h1>
          <small className='article-date'>Published: {datePublished}</small>
          <small className='article-byline'>{author}</small>
          <p className='article-abstract'>{abstract}</p>
        </div>
      </Link>
    </>
  )
}

export default ArticleCard