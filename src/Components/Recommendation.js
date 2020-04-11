import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
   dots: true,
   infinite: true,
   speed: 5,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 1500
 };

class Recommendation extends Component {
  render() {
    const linkedInLogo =  <> <a href="https://www.linkedin.com/in/amit-maurya-64a648136/" style={{'fontSize':'36px'}} title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
       </>
    return (
      <section id="testimonials">
         <div style={{textAlign:"center"}}>
           <h2 align="center" className="green-paragraph">Nice Words By Some Awesome Folks </h2>
        </div >
        
      <div className="text-container">
         <div className="row row-testimonials">
         <div className="two columns header-col">
            </div>
            <div className="ten columns flex-container recommendation-slider">
               <Slider {...settings} >
               <div>
                  <ul>
                     <li>
                     <blockquote>
                        <p>"He has a good conceptual knowledge of web app and mobile apps and also an efficient hardworking guy. I have worked with him and I believe this guy can be asset to any organization."</p>
                        <cite>Swapanil Domde <br/>
                           Worked Together at Unotech Software Pvt Ltd
                        </cite>
                     </blockquote>
                     {linkedInLogo}
                     </li>
                  </ul>
               </div>
               <div>
               <ul>
                     <li>
                     <blockquote>
                        <p>"I know Amit personally, he is a dedicated and hard working guy with very good technical skills. He is a great  programmer. He have very good analytical and problem solving skill."</p>
                        <cite>Ankur Singh <br/>
                           Studied Together at Feroze Gandhi Insitute Of Engg & Technology 
                        </cite>
                     </blockquote>
                     {linkedInLogo}
                     </li>
                  </ul>
               </div>
               <div>
               <ul>
                 <li>
                     <blockquote>
                        <p>"Amit is hardworking and self starter but good team player. Good Expertise on JS Based frameworks And advaced frontend lover."</p>
                        <cite>Manoj Barapatre <br/>
                        Worked Together at Unotech Software Pvt Ltd
                        </cite>
                     </blockquote>
                     {linkedInLogo}
                     </li>
                  </ul>
               </div>
                </Slider>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Recommendation;
