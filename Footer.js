import React from 'react'

import {
GitHub,
LinkedIn,Facebook,Twitter,Instagram


} from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
function Footer() {
    return (
        <div>
            <footer>

<div className="row">
   <div className="twelve columns">
      <ul className="social-links">
      <div className="social__icon2">
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

      </ul>

      <ul>
       <li>Thaks to everybody who have visited this site and all those who surport my future . Love you All ♥️</li>
      </ul>

      <ul className="copyright">
         <li>&copy; All content belong to pehjos - Copyright 2020 pehjos</li>
        
      </ul>

   </div>
   <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
</div>
</footer> 
        </div>
    )
}

export default Footer
