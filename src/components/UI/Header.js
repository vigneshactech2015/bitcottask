import React from 'react'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  return (
    <div className="header-container">
    <h1 className="demotext" onClick={()=>navigate('/')}>DEMO Streaming</h1>
    <section className="header-right">
    <h4 className='login-text'>Log in</h4>
    <button className='start-button'>Start your free trial</button>
    </section>
    </div>
  )
}

export default Header