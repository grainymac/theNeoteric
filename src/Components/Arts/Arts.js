import React from 'react'
import './Arts.scss'
import ArtsCard from '../ArtsCard/ArtsCard'

const Arts = ({ arts }) => {

  const artArticles = arts.map((art) => {
    return (
      <ArtsCard title={art.title} abstract={art.abstract} url={art.url} datePublished={art.published_date} author={art.byline} key={art.created_date}/>
    )
  return artArticles
})

  return (
    <div className='arts-page'>
      <h1 className='arts-title'>The Arts</h1>
      <div className='arts-article-container'>{artArticles}</div>
    </div>  
  )
}

export default Arts