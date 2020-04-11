import React, { useState, useRef } from 'react';
import { Tabs, useTabState, Panel } from '@bumaga/tabs'
import { useInterval } from '@restart/hooks'
import { motion } from 'framer-motion';
import { ReusablePopup } from './Popup';
import '../Tabs.css'

const cn = (...args) => args.filter(Boolean).join(' ')
const duration = 500; //2
const variants = {
  pd: { scaleX: 1 },
  pl: { scaleX: 0 }
}
var projectsList = [
  {
    "title": "Fleat Management System (E-Call)",
    "category": "Travel Domain",
    "image": "E-call-Dashboard.PNG",
    "url": "https://idvr.dev.askeycloud.com/commonlogin-ui",
    "type": "web_app",
    "language": "vue",
    "project_id": 1,
    "description": "E-call is a Call Center Execution System project like Uber, Ola which is useful for maintaining call information and communicating between Operator and Cab Driver. Cab driver starts the rides from source to destination, in this scenario, if the cab driver needs any help from customer care then cab driver can initiate a call to operator by device DVR. The operator can also initiate the call to the driver whenever any sharp turn like cases done by driver. The operator and driver can communicate via audio call or video call which is possible by integrating third-party application Twilio in the project. Operator and Admin can able to see the call log information and Audio, Video call recordings, etc",
    "duration": "Feb'19 - Dec'19",
    "technologies": "VueJs, JavaScript, Bootstrap, Twilio, REST API, JSON, HTML, CSS, NPM, AWS S3 bucket, Webpack",
    "roles": "1. Contribute core features across entire stack\n 2. Manage front-end development, creating and documenting app-wide design system\n3. Taken intiative to integrated third party application Twilio for Video, Audio Calls.\n4. Integration of REST API, and developed the reusable piece of code.\n5. Deployment of VueJs application on the AWS S3 bucket."
  },
  {
    "title": "Eduqfix Admin Portal",
    "category": "Education Domain",
    "image": "EduqfixAdminPortalLogin.PNG",
    "url": "https://dashboard.eduqfix.com/#/login",
    "type": "web_app",
    "language": "react",
    "project_id": 2,
    "description": "This web application is handled by the admin of school and Qfix Admin. This is a platform from where institutes, branches, students, parents, and teachers can be created. Many institutes are connected with EduQfix, and a unique credential provided to all institutes. Qfix and School admin can create the branch of the school, can create assignments for students, can provide the platform to pay the fees for their institute/ branches, can create a syllabus for each standard, can create examination time-table and upload them into websites.",
    "duration": "Oct'17 - Jan'19",
    "technologies": "React JS, Redux, JavaScript, Web pack, Babel, JSON, GCP, REST API, AJAX, JSON, HTML5, CSS, Bootstrap, Git, Github",
    "roles": "1.Involved in developing code using React JS, Redux, REST APIs, AJAX and HTML 2. Developed new modules, bug fixed, maintain the code on GitHub using git.3.Created Reusable UI components in client-side for project.4.Worked with consuming REST APIs"
  },
  {
    "title": "Eduqfix Parent Portal",
    "category": "Education Domain",
    "image": "EduqfixParentPortal.PNG",
    "url": "https://user.eduqfix.com/login",
    "type": "web_app",
    "language": "angular",
    "project_id": 3,
    "description": "EduQfix's application is designed to track the performance and conduction of a student in his institute. This enabled the e-communication between teachers, parents, and students. Track the status of students’ academic reports such as timetable, exam dates, results, and fees payment.",
    "duration": "Oct'17 - Jan'19",
    "technologies": "Angular4, JavaScript, REST API, Google Cloud, AJAX, JSON, HTML5, CSS, Bootstrap, Git, Github",
    "roles": "➢ Developed new modules and enhancement using Angular4, AJAX, JSON, REST APIs. ➢ Involved in Requirement analysis, preparing the development process for the project ➢ Involved in deployment of Application on Google Cloud ➢ Worked with backend team to design REST APIs and consumed APIs on the frontend➢ Pull, push, commit and maintain the code on GitHub using version control tools git."
  },
  {
    "title": "Stepathlon Web App",
    "category": "Healthcare",
    "image": "SteatapthlonWebAppdashboard.PNG",
    "url": "https://www.stepathlon.com/",
    "type": "web_app",
    "language": "angular",
    "project_id": 4,
    "description": " This is the health-related web application that aims to achieve better physical & mental health, increasing risk of lifestyle diseases and much more. This application features like provides step counts, calorie burn, weight tracker features. Users can make a team and can enter a daily activity in-app and these steps converted into distance and the team will be able to see the leader-board against other teams.",
    "duration": "Feb'16 - March'17",
    "technologies": " AngularJs, JavaScript, REST API, Jquery, Bootstrap ,AJAX, JSON, HTML5, Git",
    "roles": "1-Implementation of business logic & app features using the Angular, Ionic framework, Cordova & API.2-Implement the different plugins as per apps functionality."
  },
  {
    "title": "Eduqfix Mobile App",
    "category": "Education Domain",
    "image": "EduqfixMobileAppdashboard.PNG",
    "url": "https://play.google.com/store/apps/details?id=com.qfixinfo.eduqfix",
    "app_store_url": "https://apps.apple.com/us/app/eduqfix/id1127379233",
    "type": "mobile_app",
    "language": "angular",
    "project_id": 5,
    "description": "EduQfix's application is designed to track the performance and conduction of a student in his institute. This enabled the e-communication between teachers, parents, and students. Track the status of students’ academic reports such as time-table, exam dates, results, and fees payment.",
    "duration": "Oct'17 - Jan'19",
    "technologies": "Angular4, Ionic3, Cordova, REST API, AJAX, JSON, HTML5, Git, Github, CSS, GCM, APNs",
    "roles": "Handling, developing and maintaining the whole project.➢ Implementation of new modules, bug fixing, new enhancement using Angular4, Ionic➢ Implementation of Cordova plugin, consuming REST APIs using Angular4, AJAX, JSON. ➢ Deployment of Android &amp; iOS App on Play Store &amp; Apple Store respectively. ➢ Analysis and sending a report of downloading, reviews of the mobile app."
  },
  {
    "title": "One Insure Sales Mobile App",
    "category": "Insurance Domain",
    "image": "OneInsureMobileAppDashboard.PNG",
    "url": "https://play.google.com/store/apps/details?id=com.robinhood.saleapp",
    "type": "mobile_app",
    "language": "angular",
    "project_id": 6,
    "description": "This is the cross-platform app by which the Sales team can create & understand the client requirements, store client details, manage & monitor daily/weekly/yearly task at various levels. There are multiple campaigns run in the app with multiple customer details. Relationship Manager can communicate to the customer via calls, SMS, E-Mail directly from the app. RM can schedule the appointment with the customer on the given date which store in the native calendar. RM will get a reminder for each scheduled appointment. RM can sync the customer contacts in the native phone book",
    "duration": "March'17 - Oct'17",
    "technologies": "AngularJS, Ionic1, Cordova, NPM, Push Notification, REST API, AJAX, JSON, CSS, Git, Github",
    "roles": "1.Developed multiple controllers and configured routes for the pages. 2.Design and developed new modules using AngularJs, REST APIs, AJAX 3.Deployment of the Android App on play store."
  },

  {
    "title": "Stepathlon Mobile App",
    "category": "Healthcare",
    "image": "UnotechMobileAppDashboard.PNG",
    "url": "https://play.google.com/store/apps/details?id=com.stepathlon.mobileapp&hl=en",
    "type": "mobile_app",
    "language": "angular",
    "app_store_url": "https://apps.apple.com/in/app/stepathlon/id908666128",
    "project_id": 7,
    "description": "This is the cross-platform health-related app and web application that aims to achieve better physical & mental health, increasing risk of lifestyle diseases and much more. This application features like provides step counts, calorie burn, weight tracker features. Users can make a team and can enter a daily activity in-app and these steps converted into distance and the team will be able to see the leader-board against other teams.",
    "duration": "Feb'16 - March'17",
    "technologies": "AngularJs, Ionic Framework, REST API, Cordova, AJAX, JSON, HTML5, CSS, Git"
  }];

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()
  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  )
}

const AllProjectList = (props) => {

  // const [userInfo, setUserInfo] = React.useState({ 
  //   showPopup: false
  // });
  let projectJsonData;
  let vueProject = projectsList.filter(res => res.language === 'vue');
  let reactProject = projectsList.filter(res => res.language === 'react');
  let angularProject = projectsList.filter(res => res.language === 'angular');
  if (props.language === 'vue')
    projectJsonData = vueProject;
  else if (props.language === 'react')
    projectJsonData = reactProject;
  else if (props.language === 'angular')
    projectJsonData = angularProject;
  else {
    projectJsonData = projectsList;
  }
  var projectData = projectJsonData.map(function (projects) {
    var projectImage = 'images/portfolio/' + projects.image;
    return <div key={projects.title} className="columns portfolio-item"
      style={(projects.type === 'mobile_app' && props.language === 'angular') ? { width: '25%' } : {}}>
      <div className="item-wrap" title={projects.title} >
        <div>
          <img alt={projects.title} src={projectImage} className={(projects.type === 'mobile_app' ? "portfolio-img" : "")} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <div className={projects.type === 'mobile_app' ? 'portfolio-mobile-button' : (props.language === 'angular' ? 'portfolio-angular-button' : 'portfolio-button')}
                title={projects.title} ><ReusablePopup projectDetails={projects} /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  })
  return projectData;
}

export default () => {
  const tabsRef = useRef()
  const [index, setIndex] = useState(0)
  const [paused] = useState(false)

  useInterval(() => setIndex(index => (index + 1) % 3), duration * 1000, paused)

  return (
    <section id="portfolio">
      <div style={{ textAlign: "center" }}>
        <h2 align="center" className="green-paragraph">My Projects </h2>
      </div >
      <div className="row">

        <Tabs state={[index, setIndex]}>
          <div className='tabs' ref={tabsRef}>
            <div className='tab-list'>
              <Tab> All </Tab>
              <Tab>React JS</Tab>
              <Tab>Vue JS</Tab>
              <Tab>Angular1/2+ </Tab>
            </div>

            <motion.div
              className='tab-progress'
              key={index}
              initial={{ scaleX: 1 }}
              variants={variants}
              animate={paused ? 'pd' : 'pl'}
              transition={
                paused
                  ? { ease: 'easeInOut', duration: 0.16 } //0.16
                  : { ease: 'linear', duration }
              }
            />
            <Panel>
              <div className="twelve columns collapsed">
                <br />
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  <AllProjectList />
                </div>
              </div>
            </Panel>
            <Panel>
              <div className="twelve columns collapsed">
                <br />
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  <AllProjectList language='react' />
                </div>
              </div>
            </Panel>
            <Panel>
              <div className="twelve columns collapsed">
                <br />
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  <AllProjectList language="vue" />
                </div>
              </div>
            </Panel>
            <Panel>
              <div className="twelve columns collapsed">
                <br />
                <div id="portfolio-wrapper" className="bgrid-quarters-angular s-bgrid-thirds cf">
                  <AllProjectList language='angular' />
                </div>
              </div>
            </Panel>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

