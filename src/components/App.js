import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import Footer from "./Footer";
import { SocialIcon } from 'react-social-icons';
import projects from "./projects";
import MyResume from "./MyResume";
import About from "./About";
import Project from "./Project";
import Popup from "reactjs-popup";

function App() {
  return (
    <div>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
      <nav>
        <ul className="navbar-left">
          <li><NavLink exact activeClassName="current" to='/'>Josh Salce</NavLink></li>
        </ul>
        <ul className="navbar-right">
          <li><NavLink exact activeClassName="current" to='/resume'><i class="fas fa-file"></i></NavLink></li>
          <li>
              <Popup trigger={<i class="far fa-envelope-open"></i>}>
                <div className="modal">You can reach me by email @ <strong>joshuasalce10@gmail.com</strong></div>
              </Popup>       
          </li>
          <SocialIcon className="social-icon" url="https://www.linkedin.com/in/josh-salce-b293311a8/"/>
          <SocialIcon className="social-icon" url="https://github.com/joshsalce" />
          <SocialIcon className="social-icon" url="https://medium.com/@joshsalce" />
        </ul>
      </nav>
  );
}

function Main() {
  return (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/resume' component={Resume}></Route>
    </Switch>
  );
}

function createCard(project) {
  return (
    <Project 
  key={project.id}
  title={project.title}
  img={project.img}
  github={project.githubURL}
  desc={project.description}
  tech={project.technologies.map((technology, i) => {
    return (<li>{technology.name}</li>)
  })}
    />
  );
}

const Home = () => (
  <div className='home'>
    <div className="topnav">
      <h1>Josh Salce</h1>
      <About /> 
    </div>
      <h1>Projects</h1>
    <div className="container">
      {projects.map(createCard)}
    </div>
  </div>
);

const Resume = () => (
  <div>
    <h1>Resume</h1>
    <div className="resume"><MyResume /></div>
  </div>
    );

export default App;
