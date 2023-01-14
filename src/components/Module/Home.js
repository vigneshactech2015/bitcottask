import React from 'react'
import Header from '../UI/Header'
import Navbar from '../UI/Navbar'
import placeholder from '../../assets/placeholder.webp'
import {useNavigate} from 'react-router-dom';
import Footer from '../UI/Footer'

function Home() {
  const navigate = useNavigate()

  function onseriesnavigate(){
    navigate('/series')
  }

  function onmoviesnavigate(){
    navigate('/movies')
  }

  return (
    <div>
    <Header/>
    <Navbar hometitle={'home'}/>
    {/* >>>>Movies and series Container>>>>> */}
    <div className="homecontainer">
    <div>
    <img src={placeholder} alt="series" className="placeholderimage" onClick={onseriesnavigate}/>
    <p className="hometext" onClick={onseriesnavigate}>Popular Series</p>
    </div>
    <div className="popularmovies">
    <img src={placeholder} alt="movies" className="placeholderimage" onClick={onmoviesnavigate}/>
    <p className='hometext' onClick={onmoviesnavigate}>Popular Movies</p>
    </div>
    </div>
    {/* >>>>Movies and series Container>>>>> */}
    <Footer/>
    </div>
  )
}

export default Home