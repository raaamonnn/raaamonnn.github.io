import './App.css';
import me from './me.jpg';
import Contact from './components/Contact'
import $ from 'jquery';
import Project from './components/Project';

function App() {

  //Dynamic Fixed Navigation Bar
  document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        // remove padding top from body
        document.body.style.paddingTop = '0';
      }
    });
  });

  //dynamic active navitem
  $('.nav li').click(function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
});

  return (
    <div >
      {/* <!-- Home --> */}
      <div id="home" className="gradient">
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex mt-4" data-aos="fade-up" data-aos-duration="3000">
              <h1 className="fw-bold text-white m-0">Hello, I'm</h1>
              <h1 className=" fw-bold m-0 text-warning pl-3">Ramon Amini</h1>
              <h1 className="fw-bold text-white m-0">.</h1>
            </div>
            <h1 className="fw-bold text-white m-0" data-aos="fade-up" data-aos-duration="3000">I'm a Software Engineer.</h1>
            <a href="#about">
              <div class="button mt-4" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">View my work <i class="ml-2 fas fa-arrow-right"></i></div>
            </a>
          </div>

        </div>
      </div>



      <header>
        <nav id="navbar_top" className="gradientColor navbar navbar-expand-sm navbar-dark">
          <h1 className="navbar-brand"></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="navbarNav">
            <ul className="navbar-nav nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">HOME  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#links">LINKS</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>



      {/* <!-- About --> */}
      <div id="about" className="container contentSpacing">
        <div className="row flex-column justify-content-center align-items-center " >
          <h1 data-aos="fade-left" data-aos-duration="500" >ABOUT</h1>
          <div className="header-bar" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"></div>
        </div>
        <div>
          <div className="row" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1500">
            <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
              <img src={me} width="300px" className="rounded" alt="A picture of me"></img>
              <h2 className="text-center pt-3">Who's Ramon?</h2>
              <p className="text-center">I was born and raised in Germany until I moved to California, Orange County in July of 2014. Fighting adversity and beating the odds, my family and I are still pursuing the American Dream. I am currently a Senior at the California State University Fullerton as a Computer Science Major. I'll be graduating after this Spring semester and I am looking for a Software Engineering role. I've built professional iOS applications, Websites, and Web Applications for customers in a Scrum based team environment.</p>
            </div>
            <div className="col-xl d-flex flex-column bd-highlight justify-content-center w-100 deviceAdjustment" >
              
              <div className="progress progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Swift</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">C++</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">HTML</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1400" data-aos-delay="700">80%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">CSS</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-65 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">80%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Java</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-60 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">75%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">React</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-55 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">70%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Javascript</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-50 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">65%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">Sketch</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-35 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-aos="zoom-in" data-aos-duration="1800" data-aos-delay="800">50%</div>
              </div>
            </div>
          </div>

          <div className="row justify-content-around bd-highlight pt-5">
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-code fa-6x text-primary"></i>
              <h1 className="pt-2 aboutColor">Concise</h1>
              <p className="text-center aboutColor" >Clear Well Documented Code in Appliance to Coding Standards
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-cubes fa-6x text-success"></i>
              <h1 className="pt-2 aboutColor text-center" >Problem Solving</h1>
              <p className="text-center aboutColor" > Create Efficient Algorithms. Divide and Conquer using Abstraction.
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fas fa-shield-alt fa-6x text-warning"></i>
              <h1 className="pt-2 aboutColor" >Security</h1>
              <p className="text-center aboutColor" >Best Practices and Secure Software Development from Inception.
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="1500">
              <i className="fab fa-medapps fa-6x text-info"></i>
              <h1 className="pt-2 aboutColor" >Algorithms</h1>
              <p className="text-center aboutColor">Efficient Algorithms using Best Performing Datastructures.
              </p>
            </div>
          </div>

          <div className="row" >
            <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">Personal Interests</h1>
              <p className="text-center">When I am not coding my next project, I enjoy spending my time doing any of the following:</p>
              <ul>
                <li>Hanging out with Friends and Meeting new People</li>
                <li>Video Games</li>
                <li>Waterpolo</li>
                <li>Soccer</li>
                <li>Surfing</li>
              </ul>
              <p className="text-center mb-5">If you couldn't already tell, I Love Sports!</p>
            </div>
            </div>
        </div>
      </div>

      {/* <!-- Projects --> */}
      <div id="projects" className="container-fluid contentSpacing projectContainer" >
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1 data-aos="fade-left" data-aos-duration="500">PROJECTS</h1>
          <div className="header-bar waypoint animated slide-in-left" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"
          ></div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-aos="zoom-in-up" data-aos-duration="1700" data-aos-delay="2000">
          <ol className="carousel-indicators mt-5">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Project title="Dari Learner - iOS" pageLink="https://darilearner.com/" videoLink="https://darilearner.com/" 
              infoTitle="Want to Learn some Dari?" 
              infoText="Learn Dari in an exciting educational way. Think of it as the Quizlet of Dari. Dari Learner is a fun, free way of becoming fluent in Dari. Dari Learner makes learning Dari easy, effective, and above all, fun. With tools such as Flashcards and Quizzes, it allows you to build a strong speaking and listening foundation. By tracking your progress, Dari Learner helps you realize how much you have learned while receiving achievements that make practicing a daily habit." 
              infoSecondTitle="Technology" 
              infoSecondText="Dari Learner is a SwiftUI based application that truly utilizes its declarative concept allowing its UI to shine. It utilizes Firebase for Authentication, Storage as well as AdMob. Finally, Dari Learner has it's own API that is uses to retrieve its Vocabulary. The API is built using Flask and is hosted by Heroku."/>
            </div>
            <div className="carousel-item">
            <Project title="MusoLive Mux Integration - React" pageLink="https://github.com/Farnam0/stream-mux-api" videoLink="https://github.com/Farnam0/stream-mux-api" 
            infoTitle="About" 
            infoText="MusoLive is an interactive platform for fans to interact with musicians. For my Capstone Project, we created a React based Web Application for this Company that Utilizes Mux for its Streaming and Video Playback functionality. The app allows the user to trim and save video clips at will. For this, we use the Mux API to store and process videos." 
            infoSecondTitle="Technology" 
            infoSecondText="Our Web Application uses ReactJS as its Front End framework which allowed us to soley focus on Figuring out the Mux API and integrating it into our Application. We are using NodeJS, allowing us to use the Official Mux API wrapper that fortunately Supports Mux Video, making it a breeze for us to implement."/>
            </div>

            <div className="carousel-item">
            <Project title="Loan Link - iOS" pageLink="https://www.loanlink.io/" videoLink="https://www.youtube.com/watch?v=FtIVZIZvGf4" 
            infoTitle="What is LoanLink?" 
            infoText="LoanLink is an iOS application that allows the user to manage and pay off their student loans all in one place. LoanLink provides a personalized Payoff Plan suited for all types of Student Debt. With its refined algorithms, it can save you money and time." 
            infoSecondTitle="Technology" 
            infoSecondText="LoanLink uses both the SwiftUI and UIKit Framework. It uses Firebase for Authentication and Storage. LoanLink incorporates Plaid to keep the security integrity due to never accessing the user's banking information. The loans passed through various algorithms that spit out a customized payment plan for each user, saving them money and time. The user can pay off their loans right in the app."/>
            </div>
            <div className="carousel-item">
            <Project title="MealPickr - Kotlin" pageLink="https://github.com/CSUF-CPSC411-2021F/group-project-team-hypervisor" videoLink="https://github.com/CSUF-CPSC411-2021F/group-project-team-hypervisor" 
            infoTitle="What is MealPickr?" 
            infoText="MealPickr is a mobile android application that helps those who cannot find a place to eat. It will take the user’s current location and pick a random restaurant within a given range of the users choice." 
                    infoSecondTitle="Technology" 
                    infoSecondText="MealPickr is a Kotlin based application which utilizes the Maps SDK. It receives it's data straight from the Yelp API."/>
            </div>
            <div className="carousel-item">
            <Project title="The Mudkips - QT" pageLink="https://github.com/raaamonnn/TheMudkips" videoLink="https://github.com/raaamonnn/TheMudkips" 
            infoTitle="About" 
            infoText="The Mudkips is my final group project for my Datastructures class. As the Scrum Master, it was my resposibility to facilitate scrum to the team by ensuring the scrum framework is followed. The Application's main objective was it to utilize datastructures such as a ordered map as well as efficient algorithms like  the A* algorithm to find  the shortest vacation trip and Kruskal's algorithm to find the minimum spanning tree." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* <!-- Contact -->  */}
      <div id="contact" className="contactBg contactContainer " >
        <div className='contactContent'>
          <svg className="contactSvg" preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
            <path d="M0 0 L50 100 L100 0 Z" fill="#f3f3f3" stroke="#f3f3f3"></path>
          </svg>
        </div>
        <div className="contactContent">
          <div className=" d-flex flex-column justify-content-center align-items-center pt-5" >
            <h1 data-aos="fade-left" data-aos-duration="500">CONTACT</h1>
            <div className="header-bar contactBar" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"
            ></div>
          </div>
          <div data-aos="zoom-in-down" data-aos-delay="1500">
            <div>
              <h5 className="d-flex flex-column justify-content-center align-items-center contactTitle">If you have any Questions or Inquiries please leave a Message!</h5>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <footer id="links" className="container-fluid d-flex flex-column justify-content-center align-items-center footerContainer">
        <a href="#home">
          <div class="icon d-flex flex-column justify-content-center align-items-center upArrowIcon" id="icon-1">
            <i class="fas fa-arrow-up text-light"></i>
          </div>
        </a>

        <div class="row">
          <a href="https://www.linkedin.com/in/ramon-amini/" target="_blank" rel="noopener noreferrer">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-2">
              <i class="fab fa-linkedin-in text-light"></i>
            </div>
          </a>
          <a href="Resume" target="_blank" rel="noopener noreferrer">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-3">
              <i class="fal fa-file-user text-light"></i>
            </div>
          </a>
          <a href="https://instagram.com/ramon_amini/" target="_blank" rel="noopener noreferrer">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-4">
              <i class="fab fa-instagram text-light"></i>
            </div>
          </a>
          <a href="http://github.com/raaamonnn/" target="_blank" rel="noopener noreferrer">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-5">
              <i class="fab fa-github text-light"></i>
            </div>
          </a>
        </div>
        <div class="info-box">
          <div class="footnote">
            RAMON AMINI <span class="highlight">©2021</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
