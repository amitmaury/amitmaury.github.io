import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
     <div className="row">
        <div className="twelve columns">
        <ul className="social">
               <li key="facebook">
                  <a href="https://www.facebook.com/amitfgiet" title="Facebook" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
               </li>
               <li key="twitter">
                  <a href="https://twitter.com/amittwiter1947" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
               </li>
               <li key="linkedin">
                  <a href="https://www.linkedin.com/in/amit-maurya-64a648136/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
               </li>
               <li key="github">
                  <a href="https://github.com/amitgithub1947" target="_blank" title="Github" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
               </li>
               <li key="skype">
                  <a href="http://skype.com" target="_blank" title="SkypeId: amitskype1947" rel="noopener noreferrer"><i className="fa fa-skype"></i></a>
               </li>
               <li key="stackoverflow">
                  <a href="https://stackoverflow.com/users/7435731/amit-maurya" title="Stackoverflow" target="_blank" rel="noopener noreferrer"><i className="fa fa-stack-overflow"></i></a>
               </li>
               <li key="youtube">
                  <a href="https://www.youtube.com/channel/UCqdv310Jq0mDbnVhwyKi8Qg?view_as=subscriber" title="Youtube" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a>
               </li>
            </ul>
           <ul className="copyright">
              <li>&copy; Copyright 2020 </li>
              <li>Design by Amit Maurya </li>
           </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Go to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
