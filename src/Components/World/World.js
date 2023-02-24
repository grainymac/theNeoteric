import React from 'react'
import './World.scss'
import WorldCard from '../WorldCard/WorldCard'

const World = ({ world }) => {

  let counter = 0
  let noInfo = 'there is no available information for this title yet'

  const worldArticles = world.map((article) => {
    counter++
    if (!article.title) {
      return <WorldCard noInfo={noInfo} counter={counter}/>
    }
    return (
      <WorldCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={counter}/>
    )
})

  return (
    <>
      <div className='world-page'>
        <h1 className='world-title'>The World</h1>
        <div className='world-article-container'>{worldArticles}</div>
      </div>
    </>
  )
}

export default World