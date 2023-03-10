import React from 'react'
import './Science.scss'
import ScienceCard from '../ScienceCard/ScienceCard'

const Science = ({ science }) => {

  let counter = 0
  let noInfo = 'There is no available information for this article yet'

  const scienceArticles = science.map((sci) => {
    counter++
    if (!sci.title) {
      return <ScienceCard noInfo={noInfo} counter={counter}/>
    }
    return (
      <ScienceCard title={sci.title} abstract={sci.abstract} url={sci.url} datePublished={sci.published_date} author={sci.byline} key={counter}/>
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