import React from 'react'
import './Science.scss'
import ScienceCard from '../ScienceCard/ScienceCard'

const Science = ({ science }) => {

  const scienceArticles = science.map((sci) => {
    return (
      <ScienceCard title={sci.title} abstract={sci.abstract} url={sci.url} datePublished={sci.published_date} author={sci.byline} key={sci.created_date}/>
    )
})

  return (
    <>
      <div className='science-page'>
        <h1 className='science-title'>The Science</h1>
        <div className='science-article-container'>{scienceArticles}</div>
      </div>
    </>
  )
}

export default Science