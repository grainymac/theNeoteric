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

  const getAllArticles = async () => {
    try {
      const homeData = await getHomeArticles();
      setHome(homeData.results);
  
      const artsData = await getArtsArticles();
      setArts(artsData.results);
  
      const scienceData = await getScienceArticles();
      setScience(scienceData.results);
  
      const usData = await getUsArticles();
      setUs(usData.results);
  
      const worldData = await getWorldArticles();
      setWorld(worldData.results);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getAllArticles()
  },[])

  return (
    <>
    {e && e}
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
