import React from 'react'
import './Nav.css'
import {IconButton} from "@material-ui/core"
import {
Facebook,
Twitter,
Instagram,
GitHub,
LinkedIn,




} from '@material-ui/icons'
function Nav() {
    return (
        <div className="navbar">
        <header id="home">

        <nav id="nav-wrap">
  
           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
  
           <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
           </ul>
  
        </nav>

        <div className="row banner">
           <div className="banner-text">
              <h2 className="responsive-headline">I'm pehjos.</h2>
              <h3>I'm a sunyani based Full stack web and mobile  <span>software developer</span>.Work as Full stack developer and at the same time student.</h3>
              <hr />
              <div className="social">
                <p>Lets Build Your Project Now🔥</p>
              </div>
           </div>
           <div className="social__icon">
              <IconButton href="https://github.com/pehjos" >
               <GitHub className="iconbtn"   fontSize="large"/>
               </IconButton>
               <IconButton href="https://www.linkedin.com/in/peh-joseph-b1066a1b4/">
               <LinkedIn className="iconbtn"  fontSize="large"/>
               </IconButton>
               <IconButton href="https://web.facebook.com/peh.joseph.777">
               <Facebook className="iconbtn"   fontSize="large"/>
               </IconButton>
               <IconButton href="https://www.instagram.com/peh_jos/" >
               <Instagram className="iconbtn"  fontSize="large"/>
               </IconButton>
               <IconButton href="https://twitter.com/pehjos">
               <Twitter className="iconbtn"   fontSize="large"/>
               </IconButton>

              </div>
        </div>
       
        <p className="scrolldown">
           <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
  
     </header>
        </div>
    )
}

export default Nav
