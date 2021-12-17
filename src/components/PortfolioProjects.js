import React from 'react'

import BestMexSD from '../pages/NewHome/images/BestMexSD.png';
import EmployeeDirectory from '../pages/NewHome/images/employeeDirectoryPic.png';
import SNP from '../pages/NewHome/images/SnP.png';
import RGBS from '../pages/NewHome/images/RGBS.png';
import FineDining from '../pages/NewHome/images/FineDining.png'
import awsThought from '../pages/NewHome/images/awsThought.png';
import Card from './ProjectCard';

function PortfolioProjects() {

    return (

        <>
            <h1>My Portfolio</h1>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <Card
                        id="bestmex"
                        url="https://my-best-mex-sd.herokuapp.com/"
                        alt="Best Mex SD Logo"
                        src={BestMexSD}
                        label="BestMexSD!"
                        description="React.js, MongoDB, Express, Node.js, JavaScript"
                    />
                    <Card
                        id="employeeDirectory"
                        url="https://sjlevalley.github.io/employee-directory/"
                        alt="Employee Directory Screenshot"
                        src={EmployeeDirectory}
                        label="Employee Directory"
                        description="React.js, MongoDB, Express, Node.js, JavaScript"
                    />
                    <Card
                        id="design-builder"
                        url="https://squeeze-and-panic.herokuapp.com/"
                        alt="Squeeze and Panic Screenshot"
                        src={SNP}
                        label="Squeeze & Panic"
                        description="MERN Stack, JavaScript, CSS"
                    />
                    <Card
                        id="random-quotes"
                        url="https://react-google-books-search-01.herokuapp.com/"
                        alt="Google Book Search Screenshot"
                        src={RGBS}
                        label="React Google Books Search"
                        description="React.js, JavaScript, MongoDB, Heroku, HTML, CSS"
                    />
                    <Card
                        id="random-quotes"
                        url="http://3.22.74.30/"
                        alt="Thoughts Blog"
                        src={awsThought}
                        label="AWS Thought Experiment"
                        description="AWS S3 Bucket, AWS DynamoDB, AWS EC-2 Instance, React.js, JavaScript"
                    />
                    <Card
                        id="drawing-grid"
                        url="https://sjlevalley.github.io/StevesFineDining/"
                        alt="Restaurant"
                        src={FineDining}
                        label="Steve's Fine Dining"
                        description="React.js, React-Context, Google Firebase, JavaScript, GitHub Pages"
                    />
                </div>
            </div>
        </>
    )
}

export default PortfolioProjects;
