import React from 'react'
import './About.css'
import {Link} from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Resumepdf from './PEHJOS RESUME.pdf'
const useStyles = makeStyles((theme) => ({
   
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  }));
function About() {
    const classes = useStyles();
    return (
        <div>
             <section id="about">
      <div className="row">
         <div className="three columns">
        
         </div>
         <div className="nine columns main-col">
             <div className="image">
                 <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=z14PALAvADI469MThaaatukvtPk92ZzTf4hvVmWE8yg" className={classes.large} />
            <h2>About Me</h2>
            </div>
            <p>I'm Peh Atta Joseph a Bsc computer science student at the University Of Energy And Natural Resources ,Currently at level 200. My passion for technology is  great.I started learning computer programming in 2018 since then, there  are a lot of programming skills I have aquire.Here I am now, developing softwares for clients. </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>PEH ATTA JOSEPH</span><br />
						   <span>KT/39<br />
						        Sunyani-Ghana, BD-3C-090
                   </span><br />
						   <span>+233506136624</span><br />
                     <span>pehjos4@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={Resumepdf} className="button"><i className="fa fa-download"></i>Download Resume</a>
                     <Link to="/resume1">
                     <a href="download" className="button"><i className="fa fa-eye"></i>View Resume</a>
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
        </div>
    )
}

export default About
