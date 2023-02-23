import React from 'react'
import './Home.scss'
import ArticleCard from '../ArticleCard/ArticleCard'

const Home = ({ home, filteredHome, handleSearch }) => {


  const articlesToRender = filteredHome.length > 0 ? filteredHome : home;

  let counter = 0

  const allArticles = articlesToRender.map((article) => {
    counter++
    return (
      <ArticleCard title={article.title} abstract={article.abstract} url={article.url} datePublished={article.published_date} author={article.byline} key={counter}/>
    )
})

  return (
    <>
      <div className='home-page'>
        <div className='title-search-container'>
          <h1 className='home-title'>The Neoteric</h1>
          <input className='search-bar' type="text" placeholder="Search articles..." onChange={handleSearch} />
        </div>
        <div className='article-container'>{allArticles}</div>
      </div>
    </>
  )
}

export default Home