import React from 'react'
import './Arts.scss'
import ArtsCard from '../ArtsCard/ArtsCard'

const Arts = ({ arts }) => {

  let counter = 0

  const artArticles = arts.map((art) => {
    counter++
    return (
      <ArtsCard title={art.title} abstract={art.abstract} url={art.url} datePublished={art.published_date} author={art.byline} key={counter} />
    )
})

  return (
    <div className='arts-page'>
      <h1 className='arts-title'>The Arts</h1>
      <div className='arts-article-container'>{artArticles}</div>
    </div>  
  )
}

export default Arts