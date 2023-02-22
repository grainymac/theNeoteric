import React from 'react'
import './Home.scss'
import ArticleCard from '../ArticleCard/ArticleCard'

const Home = ({ home }) => {

  console.log(home, 'main data')

  const allArticles = home.map((article) => {
    return (
      <ArticleCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={article.created_date}/>
    )
  return allArticles
})

  return (
    <>
      <div className='home-page'>
        <h1 className='home-title'>The Neoteric</h1>
        <div className='article-container'>{allArticles}</div>
      </div>
    </>
  )
}

export default Home