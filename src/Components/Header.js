import React, { Component } from 'react';

class Header extends Component {

   render() {

      return (
         <header id="home" >

            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Experience</a></li>
                  <li><a className="smoothscroll" href="#skills">Skills</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                  <li><a className="smoothscroll" href="#accomplishments">Accomplishments</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Recommendation</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>
            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <div className="flexbox">
                     <div className="col">
                        <img src="images/Amit_Maurya_image.jpg" alt="Amit Maurya" />
                     </div>
                     <div className="col">
                        <div>
                           <h1 className="green-paragraph">Amit  Maurya </h1>
                           <h6>Sneior Engineer At L&T Technology Services Limited </h6>
                           <ul className="address">
                              <li>
                                 <ul className="address-text">
                                    <li>
                                       <b> NAME</b> <span style={{ paddingLeft: "61px" }}>Amit Maurya</span>
                                    </li>
                                    <li>
                                       <b> QUAL </b> <span style={{ paddingLeft: "61px" }}>B.Tech(CSE)</span>
                                    </li>
                                    <li>
                                       <b> EXP</b> <span style={{ paddingLeft: "73px" }}> 4 Years</span>
                                    </li>
                                    <li>
                                       <b> MOBILE</b> <span style={{ paddingLeft: "40px" }}>+91 8898538058</span>
                                    </li>
                                    <li>
                                       <b> EMAIL</b>  <span className="span-fix">AMITMAURYA700@GMAIL.COM</span>
                                    </li>
                                    <li>
                                       <b> ADDRESS</b> <span style={{ paddingLeft: "33px" }}> Mumbai (India)</span>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div>

                  </div>
                  <ul className="social">
                     <li key="facebook">
                        <a href="https://www.facebook.com/amitfgiet" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                     </li>
                     <li key="twitter">
                        <a href="https://twitter.com/amittwiter1947" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                     </li>
                     <li key="linkedin">
                        <a href="https://www.linkedin.com/in/amit-maurya-64a648136/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                     </li>
                     <li key="github">
                        <a href="https://github.com/amitgithub1947" target="_blank" title="Github" rel="noopener noreferrer"><i className="fa fa-github" rel="noopener noreferrer"></i></a>
                     </li>
                     <li key="skype">
                        <a href="http://skype.com" target="_blank" title="SkypeId: amitskype1947" rel="noopener noreferrer"><i className="fa fa-skype" rel="noopener noreferrer"></i></a>
                     </li>
                     <li key="stackoverflow">
                        <a href="https://stackoverflow.com/users/7435731/amit-maurya" title="Stackoverflow" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
                     </li>
                     <li key="youtube">
                        <a href="https://www.youtube.com/channel/UCqdv310Jq0mDbnVhwyKi8Qg?view_as=subscriber" title="Youtube" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
                     </li>
                  </ul>
               </div>
            </div>
            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>
         </header>
      );
   }
}

export default Header;
