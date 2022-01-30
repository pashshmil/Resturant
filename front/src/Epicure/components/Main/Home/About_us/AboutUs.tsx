import React from 'react';
import './AboutUs.scss';

function AboutUs() {
  return (
    <div className="about-us">
      {/* <div className='about-us-frame'> */}
        <label className='about-us-label'>About Us :</label>
        <div className='about-us-inner'>
          <p className='about-us-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
            eu ipsum. Cras porta malesuada eros, eget blandit
            turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
            dignissim a vestibulum.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
            eu ipsum. Cras porta malesuada eros.
          </p>
          <img className='about-us-img' src="./images/logo3.png"/><br/>
        </div>
        <div className='icons-frame'>
            <div className="apple-frame">
              <img className="icon" src="./images/icons/apple.png"/>
              <span className="Download-on-the-App">
                Download on the App Store
              </span>
            </div>
            <div className="android-frame">
              <img className="icon" src="./images/icons/android.png"/>
              <span className="Download-on-the-App">
                Get it on Google Play
              </span>
            </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default AboutUs
