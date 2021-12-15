import React from 'react'

import BestMexSD from '../pages/NewHome/images/BestMexSD.png';
import EmployeeDirectory from '../pages/NewHome/images/employeeDirectoryPic.png';
import SNP from '../pages/NewHome/images/SnP.png';
import RGBS from '../pages/NewHome/images/RGBS.png';
import awsThought from '../pages/NewHome/images/awsThought.png';

function PortfolioProjects() {
    return (

        <>
            <h1>My Portfolio</h1>

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
                        <a target="_blank" href="http://3.22.74.30/" rel="noopener noreferrer"><img className="item-image wider" alt="WeatherDash screenshot" src={awsThought} /></a>
                    </div>
                    <div className="item-text">
                        <a target="_blank" href="http://3.22.74.30/" rel="noopener noreferrer"><h3 className="item-title">AWS Thought Experiment!</h3></a>
                        <p className="item-description">AWS S3 Bucket, AWS DynamoDB, AWS EC-2 Instance, React.js, JavaScript</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioProjects;
