import React from 'react'
import './Us.scss'
import UsCard from '../UsCard/UsCard'

const Us = ({ us }) => {
  
  const usArticles = us.map((article) => {
    return (
      <UsCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={article.created_date}/>
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