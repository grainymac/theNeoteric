import React from 'react'
import './World.scss'
import WorldCard from '../WorldCard/WorldCard'

const World = ({ world }) => {

  const worldArticles = world.map((article) => {
    return (
      <WorldCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={article.created_date}/>
    )
  return worldArticles
})

  return (
    <>
      <div className='world-page'>
        <h1 className='world-title'>The Neoteric</h1>
        <div className='world-article-container'>{worldArticles}</div>
      </div>
    </>
  )
}

export default World