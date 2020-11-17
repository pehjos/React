import React from 'react'
import './Resume.css'
import {
Settings,
Search,
WbIncandescent,
Code



} from '@material-ui/icons'

function Resume() {

   
return (
<div>
<section id="resume">

<div className="row education">
<div className="three columns header-col">
<h1><span>Education</span></h1>
</div>

<div className="nine columns main-col">
<div className="row item">
<div className="twelve columns">
<p>Degree in Bsc computer science at the University of Energy And Nutural Resources.
Curently level 200<br/>
.2018-2022
</p>
</div>
</div>
</div>
</div>


<div className="row work">

<div className="three columns header-col">
<h1><span>Work</span></h1>
Work as a freelancer and also teach student  who have passion in technology,Through my software development career many cool project have been developed.
</div>

<div className="nine columns main-col">
<p className="project__done">How I Get project done!</p>
<div className="icons">
<div className="icons__body">
<WbIncandescent fontSize="large"/>
<p>I work in hand in hand with
clients and transform their
ideas, in to real world
experienced through my coding skills.</p>
</div>
<div className="icons__body">
<Search fontSize="large"/>
<p>A problem with difficulties
in solving is well reasearch for
better understanding and
implementation.</p>
</div>
<div className="icons__body">
<Settings fontSize="large"/>
<p>I work in hand in hand with
clients and transform their
ideas, in to real world
experienced through my coding skills.</p>
</div>
<div className="icons__body">
<Code fontSize="large"/>
<p>Am clean coder, always perform
clean and better codes for the software
performance</p>
</div>
</div>
</div>
</div>



<div className="row skill">

<div className="three columns header-col">
<h1><span>Skills</span></h1>
</div>

<div className="nine columns main-col">

<p>An industrous software developer with minimum duration of one years one month.The skills aquire through my education is shown below 👇👇</p>
<div className="skilss__row">
<div className="skills_list">
<li>FIREBASE</li>
<li>MONGO DB</li>
<li>VB.NET</li>
<li>SQL</li>


</div>
<div className="skills_list">
<li>REACT </li>
<li>JAVASCRIPT </li>
<li>PHP</li>
<li>PHOTOSHOP</li>
</div>
<div className="skills_list">
<p>🕐💯</p>
<p>HTML5</p>
<p>CSS3</p>
</div>
</div>
<div className="bars">
<ul className="skills">
<p className="skills__title">Skills Rating</p>


 <div className="rating">
    <div className="frist__rating">
    <div className="text__rating1">
<img src="https://ionicframework.com/jp/docs/assets/icons/logo-react-icon.png" />
<p>⭐⭐⭐⭐</p>
<h5>⭐4.5</h5>
</div>
<div className="text__rating1">
<img src="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐4.1</h5>
</div>
<div className="text__rating1">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/1051px-Adobe_Photoshop_Express_logo.svg.png"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐4.5</h5>
</div>
<div className="text__rating1">
<img src="https://logos-download.com/wp-content/uploads/2016/09/PHP_logo.png"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐3.5</h5>
</div>
</div>
<div className="second__rating">
<div className="text__rating2">
<img src="https://www.pinpng.com/pngs/m/168-1682139_lesson-learned-sql-azure-hd-png-download.png"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐4.5</h5>
</div>
<div className="text__rating2">
<img src="https://emanueleciriachi.net/wp-content/uploads/2019/01/logo-mongodb-png-mongodb-logo-png-400.png"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐4.0</h5>
</div>
<div className="text__rating2">
<img src="https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐4.3</h5>
</div>
<div className="text__rating2">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT42qatKxM5pyzU1yB0bJKUbZX-ene7kxJXow&usqp=CAU"/>
<p>⭐⭐⭐⭐</p>
<h5>⭐5.0</h5>

</div>
</div>
 </div>
</ul>

</div>
<h4 className="title">Some Of My Projects</h4>
</div>

</div>

</section> 
</div>
)
}


export default Resume
