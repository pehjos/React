import React from 'react'
import './resumeview.css'
import {Link} from 'react-router-dom'
import {
Mail,
PostAdd,
GitHub,
LinkedIn,
Phone,
Build,
Map,

} from '@material-ui/icons'
function Resumeview() {
return (
<div className="resumeview">
<h6>PEH ATTA JOSEPH</h6> 
<div className="resume__header">
{/* reume header  */}
<img src="https://media-exp1.licdn.com/dms/image/C5603AQEEvxXppI3NcQ/profile-displayphoto-shrink_200_200/0?e=1606348800&v=beta&t=z14PALAvADI469MThaaatukvtPk92ZzTf4hvVmWE8yg"alt="pehjos"/>
<p>Industrious software developer commended for contributing to innovative, groundbreaking software solutions to meet business demands
and needs. Skilled at translating business requirements into viable, scalable solutions. Collaborative leader with 1 years of experience in
software industry.
</p>
</div>
<div className="resume__contacts">
{/* reumecontacts  */}
<div className="resume__contactsrow1">
{/* reumecontactsr1  */}
<div className="iconsadress">
<Mail/>
<p>pehjos4@gmail.com</p>

</div>
<div className="iconsadress">
<Map/>
<p>Sunyani-Ghana</p>
</div>
<div className="iconsadress">
<GitHub/>
<p>https://github.com/pehjos</p>
</div>
</div>

<div className="resume__contactsrow2">
{/* reumecontactsr2  */}
<div className="iconsadress">
<LinkedIn/>
<p>linkedin.com/in/peh-joseph-b1066a1b4</p>

</div>
<div className="iconsadress">
<Phone/>
<p>+233506136624</p>
</div>
<div className="iconsadress">
< PostAdd/>
<p>P .O .BOX 347 SYI</p>
</div>
</div>

</div>
<div className="resume__education">
   <h6> EDUCATION</h6> 
   <p>Degree in Bsc computer science at the University of Energy And Nutural Resources.</p><p>Currently level 200
.2018-2022 </p>

{/* reumeeducation  */}

</div>
<div className="resume__skills">
    <h6>SKILLS </h6>
{/* reume skills  */}
<div className="skills__items">
<ul>
<li>Software Development Lifecycle</li>
<li>Web Application Design and Development</li>
<li>Desktop Development</li>
<li>Mobile Development</li>
<li>Database Management and Development</li>
</ul>
</div>
<div className="skills__items">
<ul>
<li>React.js Expert </li>
<li>Php Expert </li>
<li>noSQL and SQL Expert</li>
<li>Javascript Expert </li>
<li>Material-Ui, CSS3,Html5</li>
</ul>
</div>
</div>
<div className="resume__workexpert">
  
{/* reumeworkexpect  */}
<h6>WORK EXPERIENCE</h6>
<p className="title1">Junior Software Engineer.</p>
<p className="title1">Junior Programming Tutor.</p>
<p className="company">Work Remote For Individuals.</p>
<p className="time">03/06/2019-present</p>
<p className="ptext">- Develop software application for individuals to run their bussiness smothly.</p>
<p className="ptext">- Design software system for fast performance and optimization.</p>
<p className="ptext" >- Guide individuals to develop their preferred software product .</p>
<p className="ptext" >- Teach individuals with interest in computer programming to become developers .</p>
</div>
<div className="resume__anycontent">
{/* reumeanycontent */}
<div className="content1">
<h6>Language</h6>
<p>English</p>
<p>French</p>
<p>Twi</p>
</div>
<div className="content1">
<h6>Interest</h6>
<p>Team work</p>
<p>Sports</p>
<p>Gaming</p>
<p>Learning</p>
</div>
</div>
<Link to="/">
<p className="homepage">BACK TO HOME</p>
</Link>
</div>
)
}

export default Resumeview
