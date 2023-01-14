import React from 'react'
import Navbar from '../UI/Navbar';
import Header from './../UI/Header';
import SeriesSection from './SeriesSection';
import { useEffect,useState } from 'react';
import Footer1 from '../UI/Footer1';
function Series() {
  const[error,setError] = useState(false)
  const[isLoading,setIsLoading] = useState(true)
  const[totaldata,setTotaldata] = useState([])
  function getData(){
    fetch('./db.json').then((data)=>data.json()).then((res)=>{
      setError(false)
      setIsLoading(false)
      setTotaldata(res.entries.filter((data)=>data.programType==='series' && data.releaseYear>=2010).sort((a,b)=>a.title.localeCompare(b.title)).slice(0,21))}).catch((err)=>{
        setIsLoading(false)
        setError(true)})
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
    <Header/>
    <Navbar seriestitle={'Series'}/>
    {!isLoading && !error && <SeriesSection series={totaldata}/>  }
    {isLoading && <p className="loading">Loading...</p>}
    {error && <p className="errortext">Oops,something went wrong...</p>}
    {!isLoading && !error && <Footer1/>}
    </div>
  )
}

export default Series