import './App.scss';
import { getHomeArticles, getArtsArticles, getScienceArticles, getUsArticles, getWorldArticles } from '../../apiCalls'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Arts from '../Arts/Arts'
import Science from '../Science/Science'
import Us from '../Us/Us'
import World from '../World/World'


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

  return (
    <>
    <Routes>
      <Route path='/' index element={<Home home={home}/> } />
      <Route path='/arts' element={<Arts arts={arts}/> } />
      <Route path='/science' element={<Science science={science}/> } />
      <Route path='/us' element={<Us us={us}/> } />
      <Route path='/world' element ={<World world={world}/> } />
    </Routes>
    </>
  );
}

export default App;