import React, { Component } from 'react';
import pdf from '../Resume_Amit_Maurya.pdf';

class About extends Component {
   render() {

      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="images/Amit_Maurya_Small_Image.jpg" alt="Tim Baker Profile Pic" />
                  <br /><br /><p>
                     <a href={pdf} className="button" download><i className="fa fa-download"></i> Resume</a>
                  </p>
               </div>
               <div className="nine columns main-col">
                  <h1 className="green-paragraph">Who is this guy? </h1>

                  <p>26 year old Web Developer, Hybrid Mobile App Developer, Trainer, Speaker and part time Youtuber. An Computer Science Engineer in B.Tech from Dr. APJ Abdul Kalam Technical University in 2015.
                  Lovers of JavaScript and its frameowrk with major focus in Front-End side and hands-on in Hybrid Mobile App Development with work in progress of backend side makes me 3D player of Software Industry.
            </p>
                  <h1 className="green-paragraph">What I Do? </h1>
                  <div className="row">

                     <div className="columns about-divider-first">

                        <div className="address">
                           <div className="hovicon effect-1 sub-a"><i className="fa fa-mobile"></i>
                           </div>
                           <h3>Develope Mobile Apps</h3>
                        </div>

                     </div>
                     <div className="columns about-divider-second">
                        <div className="address">
                           <div className="hovicon effect-1 sub-a"><i className="fa fa-globe" aria-hidden="true"></i>
                           </div>
                           <h3>Develope Web Apps</h3>
                        </div>
                     </div>
                     <div className="columns about-divider-third">
                        <div className=" address">
                           <div className="hovicon effect-1 sub-a"><i className="fa fa-book" aria-hidden="true"></i>
                           </div>
                           <h3>Technical Trainer</h3>
                        </div>
                     </div>
                     <div className="columns about-divider-fourth">
                        <div className="address">
                           <div className="hovicon effect-1 sub-a"><i className="fa fa-youtube-play" aria-hidden="true"></i>

                           </div>
                           <h3>You-tuber</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
