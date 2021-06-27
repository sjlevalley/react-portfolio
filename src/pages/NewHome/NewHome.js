import React from "react";
import { NavLink } from "react-router-dom";
import "./newhome.css";
import image from './images/MeImage.jpg';
import BestMexSD from './images/BestMexSD.png';
import EmployeeDirectory from './images/employeeDirectoryPic.png';
import SNP from './images/SnP.png';
import RGBS from './images/RGBS.png';
import WeatherDash from './images/WeatherDash.png';
import codingResume from './util/StevesResume.pdf';



function NewHome() {

    return (

        <div>

            {/* <div id="scrollview"> */}
            <header id="header">
                <div id="container" className="container">
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
                    </ul>
                    <div className="row">
                        <a href={codingResume} target="_blank" rel="noreferrer noopener" className="nav-option">
                            Resume(PDF)
                        </a>
                    </div>
                </div>
            </header >
            <section id="home">
                <h1>Welcome <span>to</span> My Portfolio!</h1>
                {/*     <p>Where Dreams Are <span class="highlight">Electrically</span> Charged Into Reality.</p> */}
            </section>
            <section id="about">
                <h1>About Me</h1>
                <span className="container">
                    <img alt="That's my face." id="main-photo" src={image} />
                    <span className="text-container">
                        <p>I'm a <span className="highlight" /> Full-Stack Web Developer, Engineer, entrepeneur and athlete from San Diego, California.</p>
                        <p>I am currently studying follow-up continuation courses and in the hunt for a Web-Developer position.
                        </p><p>I am driven by challenging endeavors and enjoy self-development and applying my skills towards solving programming challenges; where there's a will, there's a way!</p>
                        <div className="highlight-div">
                            <p className="highlight">Dev Skills:</p>
                            <strong className="highlight">Current:</strong><p>React.js, Express, NoSQL, MySQL, Node<br />Currently working on my AWS Developer Certification</p>
                            <strong className="highlight">In-Progress:</strong><p>AWS Developer Certification</p>
                        </div>
                        <p>I've been using <a className="green" href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer"> Udemy, </a> <a className="green" href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">Free Code Camp</a>, <a className="green" href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a>, and other free resources for my education.</p>
                    </span>
                </span>
            </section>
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
                            <a target="_blank" href="https://bestmexsd-appage.herokuapp.com/" rel="noopener noreferrer">
                                <img
                                    className="item-image"
                                    alt="Best Mex SD Logo"
                                    src={BestMexSD} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://bestmexsd-appage.herokuapp.com/" rel="noopener noreferrer"><h3 className="item-title">BestMexSD!</h3></a>
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
                            <a target="_blank" href="https://squeeze-and-panic.herokuapp.com/" rel="noopener noreferrer"><h3 className="item-title">Squeeze & Panic (currently in progress)</h3></a>
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
                            <p className="item-description">React.js, JavaScript</p>
                        </div>
                    </div> {/* end of item */}

                    {/* #################### Item 5 ################################# */}
                    {/* #################### Item 5 ################################# */}

                    <div className="item reverse" id="drawing-grid"> {/* item */}
                        {/* each item has an image, title, and description */}
                        <div className="img-container">
                            <a target="_blank" href="https://sjlevalley.github.io/WeatherDashboard/" rel="noopener noreferrer"><img className="item-image wider" alt="WeatherDash screenshot" src={WeatherDash} /></a>
                        </div>
                        <div className="item-text">
                            <a target="_blank" href="https://sjlevalley.github.io/WeatherDashboard/" rel="noopener noreferrer"><h3 className="item-title">Weather Dashboard</h3></a>
                            <p className="item-description">JavaScript, HTML, CSS, LocalStorage, API</p>
                        </div>
                    </div> {/* end of item */}





                </div>
            </section>
            <section id="contact">
                {/* github, facebok, linkedin, instagram, twitter, */}
                <h1>Contact Steve </h1>
                <h6 id="emailAddress">(SLeValley@gmail.com)</h6>
                <ul className="social-links">

                    <a target="_blank" rel="noopener noreferrer" title="GitHub" href="https://github.com/sjlevalley" className="github">
                        <li><span className="fontawesome-github" /></li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="email" href="mailto:slevalley@gmail.com" className="email">
                        <li><span className="fontawesome-envelope" /></li>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/steve-levalley/" className="linkedin">
                        <li><span className="fontawesome-linkedin" /></li>
                    </a>
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
