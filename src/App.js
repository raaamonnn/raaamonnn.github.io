import logo from './logo.svg';
import './App.css';
import me from './me.jpg';
import Contact from './components/Contact'

function App() {
  return (
    <div >
      {/* <!-- Home --> */}
      <div className="gradient">
        <div className="d-flex flex-column justify-content-center w-100 h-100">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex">
              <h1 className="fw-bold text-white m-0">Hello, I'm</h1>
              <h1 className=" fw-bold m-0 text-warning pl-3">Ramon Amini</h1>
              <h1 className="fw-bold text-white m-0">.</h1>
            </div>
            <h1 className="fw-bold text-white m-0">I'm a Software Engineer.</h1>
            <button class="btn btn-primary mt-2" type="submit">View my work <i class="fas fa-arrow-down"></i></button>
              
          </div>
          
        </div>
      </div>



      <header className="sticky-top">
        <nav className="gradientColor navbar navbar-expand-sm navbar-dark">
          <h1 className="navbar-brand"></h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-links" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>



      {/* <!-- About --> */}
      <div className="container contentSpacing">
        <div className="row flex-column justify-content-center align-items-center">
          <h1>ABOUT</h1>
          <div className="header-bar waypoint animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"
          ></div>
        </div>
        <div>
          <div className="row justify-content-around bd-highlight pl-5 pr-5">
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle">
              <i className="fas fa-code fa-6x text-primary"></i>
              <h1 className="pt-2 aboutColor">Fast</h1>
              <p className="text-center aboutColor" >Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle">
              <i className="fas fa-cubes fa-6x text-success"></i>
              <h1 className="pt-2 aboutColor" >Fast</h1>
              <p className="text-center aboutColor" >Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle">
              <i className="fas fa-shield-alt fa-6x text-warning"></i>
              <h1 className="pt-2 aboutColor" >Fast</h1>
              <p className="text-center aboutColor" >Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
            <div className="col-lg p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center cardStyle">
              <i className="fab fa-medapps fa-6x text-info"></i>
              <h1 className="pt-2 aboutColor" >Fast</h1>
              <p className="text-center aboutColor">Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
              <img src={me} width="300px" className="rounded" alt="A picture of me"></img>
            </div>
            <div className="col-xl p-5 m-4 d-flex flex-column bd-highlight justify-content-center w-100" >
              <h1 className="text-center">Who's Ramon?</h1>
              <p className="text-center mb-5">I'm a Front-End Developer for ChowNow in Los Angeles, CA.
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                Let's make something special.</p>
              <div className="progress progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">SwiftUI</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">SwiftUI</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">SwiftUI</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
              <div className="progress mt-4 progressHeight" >
                <div className="progress-bar bg-info font-weight-bold w-15" role="progressbar" aria-valuenow="25"
                  aria-valuemin="0" aria-valuemax="100">SwiftUI</div>
                <div className="progress-bar font-weight-bold text-right pr-5 w-75 progressFont" role="progressbar"
                  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Projects --> */}
      <div className="container-fluid contentSpacing projectContainer" >
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <h1>PROJECTS</h1>
          <div className="header-bar waypoint animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"
          ></div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators mt-5">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <a href="#">
                  <h1>Dari Learner</h1>
                </a>
              </div>
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/KIAZWfSmNOU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <h2>Want to Learn some Dari?</h2>
                  <p className="text-center">A simple web app built to quickly find jobs in Ireland. Users enter the search term
                    and
                    desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
                  <h2>Technology</h2>
                  <p className="text-center">Jobbie uses Bootstrap3 for a mobile-first layout, with jQuery for easy page
                    manipulation.
                    On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to scrape job
                    sites and
                    return the information to the user.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <a href="#">
                  <h1>Loan Link</h1>
                </a>
              </div>
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <h2>Want to Learn some Dari?</h2>
                  <p className="text-center">A simple web app built to quickly find jobs in Ireland. Users enter the search term
                    and
                    desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
                  <h2>Technology</h2>
                  <p className="text-center">Jobbie uses Bootstrap3 for a mobile-first layout, with jQuery for easy page
                    manipulation.
                    On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to scrape job
                    sites and
                    return the information to the user.</p>
                </div>
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/KIAZWfSmNOU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <a href="#">
                  <h1>MealPickr</h1>
                </a>
              </div>
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/KIAZWfSmNOU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <h2>Want to Learn some Dari?</h2>
                  <p className="text-center">A simple web app built to quickly find jobs in Ireland. Users enter the search term
                    and
                    desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
                  <h2>Technology</h2>
                  <p className="text-center">Jobbie uses Bootstrap3 for a mobile-first layout, with jQuery for easy page
                    manipulation.
                    On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to scrape job
                    sites and
                    return the information to the user.</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <a href="#">
                  <h1>The Mudkips</h1>
                </a>
              </div>
              <div className="row justify-content-around bd-highlight pl-5 pr-5">
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <h2>Want to Learn some Dari?</h2>
                  <p className="text-center">A simple web app built to quickly find jobs in Ireland. Users enter the search term
                    and
                    desired county, and are offered job listings from 3 of the most popular job sites in Ireland</p>
                  <h2>Technology</h2>
                  <p className="text-center">Jobbie uses Bootstrap3 for a mobile-first layout, with jQuery for easy page
                    manipulation.
                    On the backend an Express/Node.js app lives on a Heroku dyno that acts as a middleware to scrape job
                    sites and
                    return the information to the user.</p>
                </div>
                <div className="col-xl p-5 m-2 bd-highlight d-flex flex-column justify-content-center align-items-center">
                  <iframe width="100%" height="500" src="https://www.youtube.com/embed/KIAZWfSmNOU"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div>
              </div>
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
      <div className="contactBg contactContainer " >
      <div className='contactContent'>
      <svg className="contactSvg" preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
        </svg> 
        </div>
        <div className="contactContent">
          <div className=" d-flex flex-column justify-content-center align-items-center pt-5" >
            <h1>CONTACT</h1>
            <div className="header-bar waypoint animated slide-in-left contactBar" data-animation="slide-in-left" data-delay=".5s"
            ></div>
          </div>
          <div>
            <h5 className="d-flex flex-column justify-content-center align-items-center contactTitle">If you have any Questions or Inquiries please leave a Message!</h5>
          </div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
      <footer className="container-fluid d-flex flex-column justify-content-center align-items-center footerContainer">
      <div class="icon d-flex flex-column justify-content-center align-items-center upArrowIcon" id="icon-1">
        <i class="fas fa-arrow-up text-light"></i>
      </div>

        <div class="row">
          <a href="https://www.linkedin.com/in/ramon_amini">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-2">
            <i class="fab fa-linkedin-in text-light"></i>
            </div>
          </a>
          <a href="Resume">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-3">
            <i class="fal fa-file-user text-light"></i>
            </div>
          </a>
          <a href="https://instagram.com/ramon_amini/">
            <div class="icon d-flex flex-column justify-content-center align-items-center" id="icon-4">
            <i class="fab fa-instagram text-light"></i>
            </div>
          </a>
          <a href="http://github.com/raaamonnn/">
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
