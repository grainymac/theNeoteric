import React from 'react'
import './Us.scss'
import UsCard from '../UsCard/UsCard'

const Us = ({ us }) => {
  
  const usArticles = us.map((us) => {
    return (
      <UsCard title={us.title} abstract={us.abstract} url={us.url} datePublished={us.published_date} author={us.byline} key={us.created_date}/>
    )
  return usArticles
})

  return (
    <>
      <div className='us-page'>
        <h1 className='us-title'>The Neoteric</h1>
        <div className='us-article-container'>{usArticles}</div>
      </div>
    </>
  )
}

export default Us