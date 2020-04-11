import React, { Component } from 'react';

class Experience extends Component {
  render() {

    return (
      <section id="resume">
      <div className="row education">
      <h1 className="green-paragraph" style={{textTransform:"unset"}}>My Experience </h1>
          <div className="three columns header-col">
         </div> 
         <div className="nine columns main-col">
           <div className="row item">
            <div className="experience-block">
              <div className="experience-coloumn" >
                <h4>L&T Technology Services Limited </h4>
                <span className="experience-year-info"> Feb'19- Til Now</span>
                  <ul>
                    <li className="company-bullet"> Contribute core features across entire stack</li>
                    <li className="company-bullet">Manage front-end development, creating and documenting app-wide design system</li>
                    <li className="company-bullet">Guide best practices, train the people on React.js & Vue.js</li>
                    <li className="company-bullet">Taken intiative to integrated third party application Twilio for Video, Audio Calls </li>
                  </ul>
              </div>
              <br/>
              <div className="experience-coloumn">
              <h4>Qfix Infocomm Pvt Ltd</h4>
              <span className="experience-year-info"> Oct'17-Jan'19</span>
                <ul>
                    <li className="company-bullet">Taking Care of Hybrid Mobile App and Front-End development </li>
                    <li className="company-bullet">Design, Development and Deployment of Android & iOS on Play store & App Store respectively</li>
                    <li className="company-bullet">Got Experience in working culture of product based startup</li>
                  </ul>
              </div>
            </div>
            <br/>
            <div className="experience-block">
              <div className="experience-coloumn" >
                <h4>Robinhood Capital Services Pvt Ltd </h4>
                <span className="experience-year-info"> March'17-Oct'17</span>
                  <ul>
                    <li className="company-bullet">Desgin and developed in-house mobile app for salse person of organization </li>
                    <li className="company-bullet">Enhanced and implemented cordova plugin like contacts, file-storage, background-sync etc.</li>
                    <li className="company-bullet">Optimize performance and reduced size of application</li>
                  </ul> 
                </div>
              <br/>
              <div className="experience-coloumn" >
                <h4>Unotech Softaware Pvt Ltd </h4>
                <span className="experience-year-info"> Feb'16- March'17</span>
                <ul>
                    <li className="company-bullet">Changed the entire code base of Stepathlon from cordova/jquery to Ionic/Cordova/Angular </li>
                    <li className="company-bullet">Implemented the pedometer plugin to count steps for Android & iOS</li>
                    <li className="company-bullet">Redesign the entire code base of Stepathlon Web app from PHP to Angular</li>
                  </ul> 
              </div>
            </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Experience;
