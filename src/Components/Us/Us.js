import React from 'react'
import './Us.scss'
import UsCard from '../UsCard/UsCard'

const Us = ({ us }) => {

  let counter = 0
  let noInfo = 'there is no available information for this title yet'
  
  const usArticles = us.map((article) => {
    counter++
    if (!article.title) {
      return <UsCard noInfo={noInfo} counter={counter}/>
    }
    return (
      <UsCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={counter}/>
    )
})

  return (
    <>
      <div className='us-page'>
        <h1 className='us-title'>The United States</h1>
        <div className='us-article-container'>{usArticles}</div>
      </div>
    </>
  )
}

export default Us