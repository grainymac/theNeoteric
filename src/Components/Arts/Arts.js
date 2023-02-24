import React from 'react'
import './Arts.scss'
import ArtsCard from '../ArtsCard/ArtsCard'

const Arts = ({ arts }) => {

  let counter = 0
  let noInfo = 'there is no available information for this title yet'

  const artArticles = arts.map((art) => {
    counter++
    if (!art.title) {
      return <ArtsCard noInfo={noInfo} counter={counter}/>
    }
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