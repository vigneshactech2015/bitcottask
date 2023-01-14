import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Module/Home';
import Series from '../Module/Series';
import Movies from '../Module/Movies';
import ErrorComponent from './ErrorComponent';
function Router() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/series" element={<Series/>}/>
    <Route exact path="/movies" element={<Movies/>}/>
    <Route exact path="*" element={<ErrorComponent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router