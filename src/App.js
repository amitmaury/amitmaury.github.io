import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Recommendation from './Components/Recommendation';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import Accomplishments from  './Components/Accomplishments';

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Experience/>
        <Skills/>
        <Portfolio/>
        <Accomplishments />
        <Recommendation />
        <Contact/>
        <Footer />
        <a href="#home" id="toTop" style={{"display": "block"}}>
          <span id="toTopHover" style={{"opacity": "1"}}> </span>
        </a>
      </div>
    );
  }
}

export default App;
