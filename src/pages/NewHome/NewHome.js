import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import "./newhome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import image from './images/MeImage.jpg';
import BestMexSD from './images/BestMexSD.png';
import EmployeeDirectory from './images/employeeDirectoryPic.png';
import SNP from './images/SnP.png';
import RGBS from './images/RGBS.png';
import awsThought from './images/awsThought.png';
import codingResume from './util/StevesResume.pdf';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope)



function NewHome() {

    return (
        <div>
            <header className="container-fluid" id="header">

                {/* ############### NavBar #################### */}
                {/* ############### NavBar #################### */}
                {/* ############### NavBar #################### */}
                <div className="container" id="container" >
                    <div className="row " id="name">Steve LeValley</div>
                    <ul className="row " id="nav">
                        <a href="#home">
                            <li id="nav-home" className="nav-option">Home</li>
                        </a>|
                        <a href="#about">
                            <li id="nav-about" className="nav-option">About</li>
                        </a><span id="divider2">|</span>
                        <a href="#portfolio">
                            <li id="nav-portfolio" className="nav-option">Portfolio</li>
                        </a><span id="divider3">|</span>
                        <a href="#contact">
                            <li id="nav-Contact" className="nav-option">Contact</li>
                        </a><span id="divider3">|</span>
                        <a href="https://docs.google.com/document/d/18el5ix3n0d66RjrEs-wUGvvt8rBVTesSjzgfQCh97Jc/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="nav-option">
                            Link to Resume
                        </a>
                    </ul>
                </div>
            </header >

            {/* ########################### JumboTron ############################## */}
            {/* ########################### JumboTron ############################## */}
            {/* ########################### JumboTron ############################## */}
            <section id="home">
                <h1>Welcome to My Portfolio!</h1>
            </section>


            <section id="about">
                <div className="row">

                    <div className="col aboutMeText">
                        <h1>About Me</h1>
                        <img className="float-left" alt="Holding a fish" id="main-photo" src={image} />
                        <p>Highly driven and hardworking Full-Stack Web Developer willing to go the extra mile to ensure a high-quality outcome. I received a certificate for Full-Stack Web Development from the University of California, San Diego, and a prior B.S. in Marine Engineering Technology from the California Maritime Academy. Being a team member is integral to who I am as a person, but I am also able to work alone without any oversight, when needed. Evidence of demonstrating these qualities lies in my personal, educational, and career backgrounds as I have received awards, recommendations, and positive evaluations for my efforts in each of these spheres. Hard-work, and being quality-driven have been instilled in my ethos as a team member. I eagerly apply these traits, as well as my Web-Development skills, which include but are not limited to, React, Express, SQL and NoSQL in a fast-paced, quality-driven environment.</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 highlight-div">
                            <p className="highlight">Certifications</p>
                            <strong className="highlight">In Progress: </strong>
                            <p> - AWS Certified Cloud Practitioner</p>
                            <hr />
                            <strong className="highlight">Upcoming:</strong>
                            <p> - CompTIA Security+</p>
                            <hr />
                            <strong className="highlight">Recently Completed:</strong>

                            <p> - AWS Certified Cloud Practitioner - Udemy</p>
                            <p> - React/Redux Certification - Udemy</p>
                        </div>
                        <div className="col-lg-5 highlight-div">
                            <p className="highlight">Dev Skills</p>
                            <strong className="highlight">Current:</strong>
                            <p>- React/Redux<br /></p>
                            <p>- AWS</p>
                            <p>- Express<br /></p>
                            <p>- NoSQL<br /></p>
                            <p>- SQL<br /></p>
                            <p>- Node<br /></p>
                            <p>- JavaScript, HTML, CSS<br /></p>
                        </div>
                        <div className="container-fluid" >
                            <div className="row d-flex justify-content-center m-1" id="textContainer">
                                <div><strong>I've been using <a className="green" href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer"> Udemy, </a> <a className="green" href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">Free Code Camp</a>, <a className="green" href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a>, and other resources for continued development and continuation courses.</strong></div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            {/* ########################### Projects ####################### */}
            {/* ########################### Projects ####################### */}
            {/* ########################### Projects ####################### */}
            <section id="portfolio">
                <h1>My Portfolio</h1>

                {/* ################################### Start Portfolio Items ############################################# */}
                {/* ################################### Start Portfolio Items ############################################# */}
                {/* ################################### Start Portfolio Items ############################################# */}

                {/* #################### Item 1 ################################# */}
                {/* #################### Item 1 ################################# */}

                <div className="items-container">
                    <div className="item reverse" id="bestmex"> {/* item -- >
                          <!-- each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="https://my-best-mex-sd.herokuapp.com/" rel="noopener noreferrer">
                                <img
                                    className="item-image"
                                    alt="Best Mex SD Logo"
                                    src={BestMexSD} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://my-best-mex-sd.herokuapp.com/" rel="noopener noreferrer"><h3 className="item-title">BestMexSD!</h3></a>
                            <p className="item-description">React.js, MongoDB, Express, Node.js, JavaScript</p>
                        </div>
                    </div>

                    {/* #################### Item 2 ################################# */}
                    {/* #################### Item 2 ################################# */}

                    <div className="item" id="employeeDirectory"> {/* item -- >
                          <!-- each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="https://sjlevalley.github.io/employee-directory/" rel="noopener noreferrer"><img className="item-image" alt="Employee Directory Screenshot" src={EmployeeDirectory} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://sjlevalley.github.io/employee-directory/" rel="noopener noreferrer"><h3 className="item-title">Employee Directory</h3></a>
                            <p className="item-description">React.js, MongoDB, Express, Node.js, JavaScript</p>
                        </div>
                    </div> {/* end item */}

                    {/* #################### Item 3 ################################# */}
                    {/* #################### Item 3 ################################# */}

                    <div className="item reverse" id="design-builder"> {/* item */}
                        {/* each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="https://squeeze-and-panic.herokuapp.com/" rel="noopener noreferrer"><img className="item-image wider" alt="Squeeze and Panic Screenshot" src={SNP} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://squeeze-and-panic.herokuapp.com/" rel="noopener noreferrer"><h3 className="item-title">Squeeze & Panic</h3></a>
                            <p className="item-description">MERN Stack, JavaScript, CSS</p>
                        </div>
                    </div> {/* end of item */}

                    {/* #################### Item 4 ################################# */}
                    {/* #################### Item 4 ################################# */}

                    <div className="item" id="random-quotes"> {/* item */}
                        {/* each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="https://react-google-books-search-01.herokuapp.com/" rel="noopener noreferrer"><img className="item-image wider" src={RGBS} alt="Google Book Search Screenshot" /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://react-google-books-search-01.herokuapp.com/" rel="noopener noreferrer"><h3 className="item-title">React Google Books Search</h3></a>
                            <p className="item-description">React.js, JavaScript, MongoDB, Heroku, HTML, CSS</p>
                        </div>
                    </div> {/* end of item */}

                    {/* #################### Item 5 ################################# */}
                    {/* #################### Item 5 ################################# */}

                    <div className="item reverse" id="drawing-grid"> {/* item */}
                        {/* each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="http://18.191.138.198/" rel="noopener noreferrer"><img className="item-image wider" alt="WeatherDash screenshot" src={awsThought} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="http://18.191.138.198/" rel="noopener noreferrer"><h3 className="item-title">AWS Thought Experiment!</h3></a>
                            <p className="item-description">AWS S3 Bucket, AWS DynamoDB, AWS EC-2 Instance, React.js, JavaScript</p>
                        </div>
                    </div> {/* end of item */}





                </div>
            </section>
            <section id="contact">
                {/* github, facebok, linkedin, instagram, twitter, */}
                <h1>Contact Steve </h1>
                <h6 id="emailAddress">(SLeValley@gmail.com)</h6>
                <ul className="social-links">

                    <li><a target="_blank" rel="noopener noreferrer" title="GitHub" href="https://github.com/sjlevalley" className=" github">
                        <FontAwesomeIcon icon={["fab", "github"]} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" title="email" href="mailto:slevalley@gmail.com" className="email">
                        <FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/steve-levalley/" className="linkedin">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} /></a></li>


                </ul>
            </section>
            <footer id="footer">
                <a href="#header">- Back To Top -</a>
            </footer>
            {/* </div> */}
        </div >


    );
}




export default NewHome;
