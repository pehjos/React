import React from 'react';
import Home from './Home'
import Resume from './Resume.js'
import Testimonial from './Testimonial'
import Contact from './Contact'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Footer from './Footer'
import './App.css';
import About from './About'
import Project from './Project'
import Resumeview from './Resumeview'
import portfolio from './portfolio .jpg'
import amazon from './amazon.JPG'
import tinder from './tinder.JPG'
import facebook from './facebook .jpg'
import instagram from './instagram.JPG'
import covid from './covid.JPG'
import bnb from './bnb.JPG'
import ztb from './ztb.JPG'
import whatsaap from './whatsaap.JPG'
function App() {
return (
//BEM NAMING CONVENTION
<Router>
<div className="app">
<Switch>
<Route path="/resume1">
<Resumeview/>

</Route>

<Route path="/">

  <Home/>
  <About/>
<Resume/>

<div className="project__flex">

 
  <Project
  title="Portfolio website build"
  body="This website is easy and flexible to use and fully responsive"
  image={portfolio}
  url="https://jovial-lamport-1d7a50.netlify.app"
  />
  <Project
  title="Amazon clone website build"
  body="This website contain carting and payment functionalities"
  image={amazon}
  url="https://zen-payne-81cd6d.netlify.app"
  />
  <Project
  title="Tinder clone app develop"
  body="This app is develop with all the smoth swipping mode"
  image={tinder}
  url="https://elated-chandrasekhar-194240.netlify.app"
  />
  </div>

  <div className="project__flex">
  <Project
  title="Facebook clone"
  body="Facebook interface build with google authentication and posting funtionalities"
  image={facebook}
  url="https://boring-payne-92a065.netlify.app"
  />
  <Project
  title="Instagram Reels clone"
  body="This app has the fuctionalities for playing the videos with controls"
  image={instagram}
  url="https://inspiring-pike-389f89.netlify.app"
  />
  <Project
  title="Whatsapp clone build"
  body="This the whatsaap clone build by me with all the desktop whatsapp interface design"
  image={whatsaap}
  url="https://infallible-northcutt-675315.netlify.app"
  />
 
 
  
  </div>
  <div className="project__flex">
  <Project
  title="AirBnB clone"
  body="Airbnb imterface design ,this design contains all the flexibility "
  image={bnb}
  url="https://elastic-blackwell-b3e9df.netlify.app"
  />
  <Project
  title="Covid-19 tracker"
  body="This app is developed to contain the functionalities of tracking the covid-19 statistics for the  world"
  image={covid}
  url="https://upbeat-swanson-15a939.netlify.app"
  />
  <Project
  title="Website develop"
  body="A website developed for a cashew farmer it contain the proper content organization"
  image={ztb}
  url="https://quizzical-curie-ba896f.netlify.app"
  />
 

  
  </div>
  <Testimonial/>
  <Contact/>
  <Footer/>
  </Route>
  </Switch>
{/**HOME//NAV BAR */}
{/**ABOUT */}
{/**RESUME */}
{/**WORKS */}
{/**TESTIMONIALS */}
{/**CONTACT */}
{/**HOME */}
{/**HOME */}
</div>
</Router>
);
}

export default App;
