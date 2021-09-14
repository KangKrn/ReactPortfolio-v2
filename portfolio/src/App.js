import React from 'react';
import './app.scss';
import './App.css';

// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
// import './styles/styles.scss';
// import home from './components/pages/home/home';
// import profile from './components/pages/profile/profile';
// import edu from './components/pages/education/education';
// import exp from './components/pages/experience/experience';
// import skills from './components/pages/skills/skills';
// import Sidemenu from './components/sidemenu/sidemenu.js';

import Home from './components/pages/home/home';
import Profile from './components/pages/profile/profile';
import Education from './components/pages/education/education';
import Experience from './components/pages/experience/experience';
import Skills from './components/pages/skills/skills';

// import kang from './Resources/croppedProfile.jpg';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.homeRef = React.createRef();
    this.profileRef = React.createRef();
    this.expRef = React.createRef();
    this.eduRef = React.createRef();
    this.skillsRef = React.createRef();

    this.state ={
      animationClass: 'test'
    }
    // this.changeState = this.changeState.bind(this);
  }

  scrollHome(event){
    event.preventDefault();
    if(this.homeRef.current){
      this.homeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }
  scrollProfile(event){
    event.preventDefault();
    if(this.profileRef.current){
      this.profileRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }
  scrollEdu(event){
    event.preventDefault();
    if(this.eduRef.current){
      this.eduRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }
  scrollExp(event){
    event.preventDefault();
    if(this.expRef.current){
      this.expRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }
  scrollSkills(event){
    event.preventDefault();
    if(this.skillsRef.current){
      this.skillsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }
  }

  render(){
    return(
      <div className={this.state.animationClass}>
        <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a onClick={this.scrollHome.bind(this)}>
                    {/* <figure className="image-is-24x24">
                        <img src={kang}/>
                    </figure> */}
                    Home
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" href="">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
              <div className="navbar-menu">
                  <div className="navbar-end">
                      <a className="navbar-item " onClick={this.scrollProfile.bind(this)}>Profile</a>
                      <a className="navbar-item " onClick={this.scrollEdu.bind(this)}>Education</a>
                      <a className="navbar-item " onClick={this.scrollExp.bind(this)}>Experience</a>
                      <a className="navbar-item " onClick={this.scrollSkills.bind(this)}>Skills</a>
                  </div>
              </div>
          </nav>
        <div ref={this.homeRef}>
          <Home/>
        </div>
        <div ref={this.profileRef}> 
          <Profile/>
        </div>
        <div ref={this.eduRef}>
          <Education/>
        </div>
        <div ref={this.expRef}>
          <Experience/>
        </div>
        <div ref={this.skillsRef}>
          <Skills/>
        </div>
      </div>
    );
  }
}

// function App() {
    // <Router basename="/">
    //   <Sidemenu/>
    //   <Switch>
    //     <Route exact path="/" component={home}/>
    //     <Route exact path="/profile" component={profile}/>
    //     <Route exact path="/education" component={edu} />
    //     <Route exact path="/experience" component={exp} />
    //     <Route exact path="/skills" component={skills} />
    //   </Switch>
    // </Router>

//   );
// }

// export default App;
