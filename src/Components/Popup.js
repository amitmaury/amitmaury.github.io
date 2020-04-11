import React from 'react';
import Modal from 'react-modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    lazyLoad: true,
    adaptiveHeight: true
   };
   
const  customStyles = {
    content : {
      top                   : '54%',
      left                  : '50%',
      right                 : 'auto',
      width                 : '85%',
      height                : '90%',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      ariaHideApp            : false
    }
  };

  var allProjectList = [

    {
        "project_id" : 1,
        "img" : ['E-call-Dashboard.PNG','CallLogFilter.PNG','CallPopup.PNG','DriverInfo.PNG'],
        "img_path" : "fms"
    },
    {
        "project_id" : 2,
        "img" : ['EduqfixAdminPortalLogin.PNG'],
        "img_path" : "eduqfixAdminPortal"
    },
    {
        "project_id" : 3,
        "img" : ['EduqfixParentPortal.PNG','ParentPoralPayment.PNG'],
        "img_path" : "eduqfixParentPortal"
    },    
    {
        "project_id" : 4,
        "img" : ['SteatapthlonWebAppdashboard.PNG','dashboard2.PNG'],
        "img_path" : "stepathlonWebApp"
    },
    {
        "project_id" : 5,
        "img" : ['dashboard.PNG','Login.PNG','RetriveUserId.PNG','Events.PNG'],
        "img_path" : "eduqfixMobileApp"
    },
    {
        "project_id" : 6,
        "img" : ['OneInsureMobileAppDashboard.PNG','CustomerInfo.PNG','CustomerList.PNG','MyCustomer.PNG',
                'Reference.PNG', 'mycampaign.PNG'],
        "img_path" : "oneInsureSalesApp"
    },    
    {
        "project_id" : 7,
        "img" : ['UnotechMobileAppDashboard.PNG','NewsFeed.PNG','Leaderboard.PNG','LogActivity.PNG',
                'MissedDays.PNG','MyProfile.PNG'],
       "img_path" : "stepathlonMobileApp"
    }
]

export  const ReusablePopup = (props)=>{
    let propsData = props.projectDetails;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    let imgArr = allProjectList.filter(res=>res.project_id === propsData.project_id);
   
    const sliderImgList = imgArr[0].img.map(function(imgName){
    let src_path = 'images/portfolio/'+imgArr[0].img_path+'/'+imgName;
        return <div   key={propsData.project_id}>
                <img src={src_path} alt={propsData.title} className="popup-img" />
             </div>
    })
    
    return (
        <div>
          <h5 onClick={openModal}>KNOW MORE</h5>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <i className="fa fa-times popup-close"  onClick={closeModal} aria-hidden="true"></i>
           <h4> <b>{propsData.title}  {propsData.type === 'web_app' ? <>(Web Application)</> : '' }</b>
          </h4>
            <div >
            <i class="fa fa-window-close" aria-hidden="true"></i>
                <Slider {...settings} className="slick-background-img">
                    {sliderImgList}
                </Slider>
                <a href={propsData.url} target="_blank"  rel="noopener noreferrer" >
                  <div class="button visible visit-site">
                    <i class="fa fa-external-link" aria-hidden="true" style={{'cursor':'pointer'}}></i>
                     {propsData.project_id === 5 || propsData.project_id === 7 ? <span>Play Store </span> : ''} 
                  </div> &nbsp; 
               </a>
               {
                 ( propsData.project_id === 5 || propsData.project_id === 7) ?<a href={propsData.app_store_url} target="_blank"  rel="noopener noreferrer"  >
                      <div class="button visible visit-site">
                        <i class="fa fa-external-link" aria-hidden="true" style={{'cursor':'pointer'}}></i>Apple Store 
                      </div>
                    </a> : ''
               }
                <h4> <b>Description : </b></h4>
                <p style={{'fontSize':'12px'}}> {propsData.description}</p>
                <h4> <b>Technologies: </b></h4>
                <p style={{'fontSize':'12px'}}> {propsData.technologies}</p>
            </div>
            <button onClick={closeModal}>close</button>
          </Modal>
        </div>
      );
  }