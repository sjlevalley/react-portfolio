import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import "./newhome.css";
import { fab } from '@fortawesome/free-brands-svg-icons'
import NavBar from "../../components/NavBar";
import AboutMe from "../../components/AboutMe";
import JumboTron from "../../components/JumboTron";
import CertsAndSkills from "../../components/CertsAndSkills";
import PortfolioProjects from "../../components/PortfolioProjects";
import Contact from "../../components/Contact";
// import BestMexSD from './images/BestMexSD.png';
// import EmployeeDirectory from './images/employeeDirectoryPic.png';
// import SNP from './images/SnP.png';
// import RGBS from './images/RGBS.png';
// import awsThought from './images/awsThought.png';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope)



function NewHome() {

    return (
        <div>
            <NavBar />
            <JumboTron />
            <section id="about">
                <AboutMe />
                <CertsAndSkills />
            </section>
            <section id="portfolio">
                <PortfolioProjects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <footer id="footer">
                <a href="#header">- Back To Top -</a>
            </footer>
            {/* </div> */}
        </div >


    );
}




export default NewHome;
