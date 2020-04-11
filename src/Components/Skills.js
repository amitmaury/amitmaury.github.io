import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section id="skills">
          <div style={{textAlign:"center"}}>
         <h1 align="center" className="green-paragraph">My Skills </h1>
        </div >
        <div className="row">

         <div className="six columns">
         <div className="w3-container">
            <ul>
              <li><b className="bar-text">JavaScript</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"80%"}}>
                  80%</div>
                </div>
              </li>
              <li><b className="bar-text"> React</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"75%"}}>75%</div>
                </div>
              </li>
              <li><b className="bar-text">Vue.js</b>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"60%"}}>60%</div>
              </div>
              </li>
              <li><b className="bar-text">Angular 2+</b>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"70%"}}>70%</div>
              </div>
              </li>
              <li><b className="bar-text">Redux.js</b>
              <div className="w3-light-grey w3-round-xlarge">
                <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"70%"}}>70%</div>
              </div>
              </li>
              <li><b className="bar-text">Vuex</b>
              <div className="w3-light-grey w3-round-xlarge ">
                <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"50%"}}>50%</div>
              </div>
              </li>
              <li><b className="bar-text">Git</b>
              <div className="w3-light-grey w3-round-xlarge ">
                <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"75%"}}>75%</div>
              </div>
              </li>
            </ul>
          </div>
         </div>

         <div className="six columns main-col">
         <div className="w3-container">
            <ul>
              <li><b className="bar-text">Node</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"30%"}}>
                  20%</div>
                </div>
              </li>
              <li><b className="bar-text">REST API</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"80%"}}>
                  80%</div>
                </div>
              </li>
              <li><b className="bar-text">Ionic 1/2/3</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"75%"}}>
                  75%</div>
                </div>
              </li>
              <li><b className="bar-text">Cordova</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"75%"}}>
                  75%</div>
                </div>
              </li>
              <li><b className="bar-text">AWS S3 bucket</b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"50%"}}>
                  50%</div>
                </div>
              </li>
              <li><b className="bar-text">HTML </b>
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"60%"}}>
                  60%</div>
                </div>
              </li>
              <li><b className="bar-text">CSS</b> 
                <div className="w3-light-grey w3-round-xlarge">
                  <div className="w3-container w3-blue w3-round-xlarge bar-background" style={{width:"30%"}}>
                  30%</div>
                </div>
              </li>
              
           </ul>
            </div>
        </div>
            
        </div>
   </section>
    );
  }
}

export default Skills;
