import React from 'react'

function Navbar({movietitle,seriestitle,hometitle}) {
  return (
    <div className='navbar-container'>
    <h2 className="populartext">{movietitle &&'Popular Movies'}{seriestitle && 'Popular Series'}{hometitle && 'Popular Titles'}</h2>
    </div>
  )
}

export default Navbar