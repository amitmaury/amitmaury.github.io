import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
    <section id="contact">
     <div style={{textAlign:"center"}}>
           <h2 align="center" className="green-paragraph">React Out To Me </h2>
      </div >
      <div className="row  row-contact  education">
       <div className="four columns main-col">
            <div className="rowitem">
            <div className="contact-block">
              <div className="contact-coloumn contact-heading" >
              <i className="fa fa-home contactus-icon" aria-hidden="true"></i>
                <h4 ><strong>ADDRESS</strong> </h4>
                <p>Mumbai, Maharashtra<br/> India</p>
              </div>
            </div>
            </div>  
            <br/>
        </div>
        <div className="four columns main-col">
            <div className="rowitem">
            <div className="contact-block">
              <div className="contact-coloumn contact-heading" >
              <i className="fa fa-envelope contactus-icon" aria-hidden="true"></i>
                <h4 ><strong>EMAIL </strong> </h4>
                <a href="mailto:amitmaurya700@gmail.com"> AMITMAURYA700@GMAIL.COM</a> 
              </div>
            </div>
            </div>  
            <br/>
        </div>
        <div className="four columns main-col">
            <div className="rowitem">
            <div className="contact-block">
              <div className="contact-coloumn contact-heading" >
              <i className="fa fa-phone-square contactus-icon" aria-hidden="true"></i>
                <h4 ><strong>CALL</strong> </h4>
                <a href="tel:+91 8898538058"> +91 8898538058</a> 
              </div>
            </div>
            </div>  
        </div>
      </div>
    </section>
    );
  }
}

export default Contact;
