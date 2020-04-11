import React, { Component } from 'react';
import Modal from 'react-modal';
const  customStyles = {
    content : {
      top                   : '45%',
      left                  : '50%',
      right                 : 'auto',
      width                 : '70%',
      height                : '70%',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      ariaHideApp            : false,
      background            : '#2B2B2B'
    }
};

export  const CommonPopup = (props)=>{

    let propsData = props;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }
    return (
          <div>
            <button onClick={openModal}>KNOW MORE</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
          <i className="fa fa-times popup-close"  onClick={closeModal} aria-hidden="true"></i>
            <img src={propsData.imgUrl} alt="Certificate" />
            </Modal>
          </div>
        );
}

class Accomplishments extends Component {
    constructor(){
        super()
        this.state = {
            img_path :  "images/accomplishments/",
            certificate_url :{
                cutshort_react :  "https://cutshort.io/certificate/5078",
                linkedin_javascript : "https://www.linkedin.com/in/amit-maurya-64a648136/" 
            }
        }
    }
  render() {
     return (
      <section id="accomplishments">
      <div className="row  row-accomplishments  education">
        <div className="six columns main-col">
         <h1 className="green-paragraph" style={{textTransform:"unset"}}>My Certifications </h1>
         <div className="rowitem">
            <div className="accomplishments-block">
              <div className="accomplishments-coloumn" >
                <h4><strong>CutShort Certified React.js </strong> </h4>
                <h5>Issuer: CutShort </h5>
                <span className="experience-year-info"> Issue Date- (March'20- No Expiration Date)</span><br/>
                  <ul>
                    <li className="company-bullet"><b> Credential ID : 5078</b></li>
                    <li className="company-bullet"><a href={this.state.certificate_url.cutshort_react} target="_blank"
                    className="accomplishments-url" rel="noopener noreferrer">See Credential</a></li>
                    <li className="company-bullet"><CommonPopup imgUrl={this.state.img_path+"cutshort_react.jpg"} /> 
                    </li>
                  </ul>
              </div>
            </div>
            <br/>
            <div className="accomplishments-block">
              <div className="accomplishments-coloumn" >
                <h4><strong>LinkedIn Certified JavaScript </strong> </h4>
                <h5>Issuer: LinkedIn </h5>
                <span className="experience-year-info"> Issue Date- (March'20- No Expiration Date)</span><br/>
                  <ul>
                    <li className="company-bullet"><a href={this.state.certificate_url.linkedin_javascript} target="_blank"
                    className="accomplishments-url" rel="noopener noreferrer">See Credential</a></li>
                    <li className="company-bullet"><CommonPopup imgUrl={this.state.img_path+"linkedin_javascript.PNG"} /> 
                    </li>
                  </ul>
              </div>
            </div>
            </div>  
            <br/> 
         </div> 
         <div className="six columns main-col">
         <h1 className="green-paragraph" style={{textTransform:"unset"}}>My Awards </h1>
           <div className="rowitem">
            <div className="accomplishments-block">
              <div className="accomplishments-coloumn" >
                <h4><strong>Spot Award </strong></h4>
                <h5>Issuer: L&T Technology Services Limited </h5>
                <span className="experience-year-info"> Issue Date- (May'19- No Expiration Date)</span>
                  <ul>
                    <li className="company-bullet"> Awarded as Spot Award at L&T Technology Services Ltd, in the contribution of a successful POC for a Client</li>
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

export default Accomplishments;
