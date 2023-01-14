import React from 'react'
import facebook from '../../assets/social/facebook-white.svg'
import twitter from '../../assets/social/twitter-white.svg'
import instagram from '../../assets/social/instagram-white.svg'
import appstore from '../../assets/store/app-store.svg'
import playstore from '../../assets/store/play-store.svg'
import windowsstore from '../../assets/store/windows-store.svg'
function Footer1() {
  return (
    <div className="actualfootercontainer">
    <p className="actualfooter-firstline">Home | Terms and conditions | Privacy policy | Collection Statement | Help | Manage Account </p>
    <p className='actualfooter-secondline'>CopyRight &#169; 2016 DEMO Streaming.All Rights Reserved.</p>
    <div className='actualfooter-thirdlinecontainer'>
    <div className="actualfooter-thirdlineleft">
    <img src={facebook} alt="facebook"  className="facebook"/>
   <img src={twitter} alt="twitter" className="twitter"/>
   <img src={instagram} alt="instagram" className="instagram"/>
    </div>
    <div className="actualfooter-thirdlineright">
    <img src={appstore} alt="ios"  className="appstore"/>
   <img src={playstore} alt="android" className="playstore"/>
   <img src={windowsstore} alt="windows"  className="windowsstore"/>
    </div>
    </div>
    </div>
  )
}

export default Footer1