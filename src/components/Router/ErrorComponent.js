import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import notfound from '../../assets/404.jpg'
function ErrorComponent() {
  return (
    <div >
    <Header/>
    <section className='errorpagecontainer'>
    <img src={notfound} alt="404" className="pagenotfoundimage"/>
    </section>
    <Footer/>
    </div>
  )
}

export default ErrorComponent