import React from 'react'
import './UsCard.scss'
import { Link } from 'react-router-dom'

const UsCard = ({ title, abstract, url, datePublished, author }) => {
    return (
        <>
            <Link target='_blank' className='us-link' to={url}>
                <div className='us-card-container'>
                    <h1 className='us-title'>{title}</h1>
                    <small className='us-date'>Published: {datePublished}</small>
                    <small className='us-byline'>{author}</small>
                    <p className='us-abstract'>{abstract}</p>
                </div>
            </Link>
        </>
    )
}

export default UsCard