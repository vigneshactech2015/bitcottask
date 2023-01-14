import React from 'react'
import facebook from '../../assets/social/facebook-white.svg'
import twitter from '../../assets/social/twitter-white.svg'
import instagram from '../../assets/social/instagram-white.svg'
import appstore from '../../assets/store/app-store.svg'
import playstore from '../../assets/store/play-store.svg'
import windowsstore from '../../assets/store/windows-store.svg'
function Footer() {
  return (
    <div className="footer-container">
    <p className="footer-firstline">Home | Terms and conditions | Privacy policy | Collection Statement | Help | Manage Account </p>
   <p className='footer-secondline'>CopyRight &#169; 2016 DEMO Streaming.All Rights Reserved.</p>
   <div className='footer-thirdlinecontainer'>
   <div className='footer-thirdlineleft'>
   <img src={facebook} alt="facebook"  className="footericon"/>
   <img src={twitter} alt="twitter" className="footericon"/>
   <img src={instagram} alt="instagram" className="footericon"/>
   </div>
   <div className='footer-thirdlineright'>
   <img src={appstore} alt="ios"  className="footericonright"/>
   <img src={playstore} alt="android" className="footericonright"/>
   <img src={windowsstore} alt="windows"  className="footericonmicrosoft"/>
   </div>
  </div>
    </div>
  )
}

export default Footer