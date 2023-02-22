import React from 'react'
import './ArticleCard.scss'
import { Link } from 'react-router-dom'

const ArticleCard = ({ title, abstract, url, datePublished, author }) => {
  return (
    <>
      <Link className='article-link' to={url}>
        <div className='article-card-container'>
          <h1 className='article-title'>{title}</h1>
          <div className='byline-container'>
            <small className='article-byline'>{author}</small>
            <date>{datePublished}</date>
          </div>
          <p className='article-abstract'>{abstract}</p>
        </div>
      </Link>
    </>
  )
}

export default ArticleCard