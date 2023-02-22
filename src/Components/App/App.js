import './App.scss';
import { getHomeArticles, getArtsArticles, getScienceArticles, getUsArticles, getWorldArticles } from '../../apiCalls'
import React, { useState, useEffect } from 'react'

const App = () => {
  const [home, setHome] = useState([])
  const [arts, setArts] = useState([])
  const [science, setScience] = useState([])
  const [us, setUs] = useState([])
  const [world, setWorld] = useState([])
  const [e, setError] = useState('')

  const getAllArticles = () => {
    getHomeArticles()
      .then(data => setHome(data.results))
      .catch(e => setError(e))

    getArtsArticles()
      .then(data => setArts(data.results))
      .catch(e => setError(e))

    getScienceArticles()
      .then(data => setScience(data.results))
      .catch(e => setError(e))

    getUsArticles()
      .then(data => setUs(data.results))
      .catch(e => setError(e))

    getWorldArticles()
      .then(data => setWorld(data.results))
      .catch(e => setError(e))
  }

  useEffect(() => {
    getAllArticles()
  },[])

  console.log(science, 'what is this')

  return (
    <div className="app-page">

    </div>
  );
}

export default App;
