import './App.scss';
import { getHomeArticles, getArtsArticles, getScienceArticles, getUsArticles, getWorldArticles } from '../../apiCalls'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Arts from '../Arts/Arts'
import Science from '../Science/Science'
import Us from '../Us/Us'
import World from '../World/World'
import BadURL from '../BadURL/BadURL'


const App = () => {
  const [home, setHome] = useState([])
  const [arts, setArts] = useState([])
  const [science, setScience] = useState([])
  const [us, setUs] = useState([])
  const [world, setWorld] = useState([])
  const [e, setError] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredHome, setFilteredHome] = useState([]);

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

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredHomeArticles = home.filter((article) => article.title.toLowerCase().includes(query));
    setFilteredHome(filteredHomeArticles);
    setSearchQuery(query);
    };


  return (
    <>
      {e && e}
      <Routes>
        <Route path='/' index element={<Home home={home} filteredHome={filteredHome} handleSearch={handleSearch} /> } />
        <Route path='/arts' element={<Arts arts={arts}/> } />
        <Route path='/science' element={<Science science={science}/> } />
        <Route path='/us' element={<Us us={us} /> } />
        <Route path='/world' element={<World world={world}/> } />
        <Route path='/*' element={<BadURL />} />
      </Routes>
    </>
  );
}

export default App;
