import React from 'react'

function CertsAndSkills() {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col'>
                    <p className="d-flex justify-content-center highlight">Certifications</p>
                </div>
                <div className='col'>
                    <p className="d-flex justify-content-center highlight">Dev Skills</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 highlight-div">
                    <strong className="highlight">In Progress: </strong>

                    <p>Docker & Kubernetes: The Practical Guide</p>
                    <hr />
                    <strong className="highlight">Upcoming:</strong>
                    <p>  The Data Science Course 2021 - Complete Data Science Bootcamp</p>
                    <hr />
                    <strong className="highlight">Recently Completed:</strong>
                    <p>  Next.js - The Complete Guide (25 hrs) - Udemy</p>
                    <p>  React - The Complete Guide (48.5 hrs) - Udemy</p>
                    <p>  The Complete Python/PostgreSQL Course 2.0 (13.5 hrs) - Udemy</p>
                    <p>  REST APIs with Flask and Python (17 hrs) - Udemy</p>
                    <p>  Learn Python Programming Masterclass (65 hrs) - Udemy</p>
                    <p>  AWS Certified Cloud Practitioner - AWS Cert</p>
                    <p>  AWS Certified Cloud Practitioner - Udemy</p>
                    <p>  React, React Redux and Redux Saga (7 hrs) - Udemy</p>
                </div>
                <div className="col-lg-5 highlight-div">
                    <strong className="highlight">Current:</strong>
                    <p>Frameworks - React/Redux, Next.js<br /></p>
                    <p>Database (NoSQL & SQL) - MongoDB, PostgreSQL, AWS, SQLite</p>
                    <p>Web App Frameworks - Express, Flask<br /></p>
                    <p>Languages - HTML, CSS, JavaScript, Python, SQL, NoSQL</p>
                    <p>Environments - Node, Python<br /></p>
                    <p>Other - Test Driven Development, Redis, Docker, Git, GitHub, Jira, Postman, TablePlus, VSCode, IntelliJ</p>

                </div>
                <div className="container-fluid" >
                    <div className="row d-flex justify-content-center m-1" id="textContainer">
                        <div><strong>I've been using <a className="green" href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer"> Udemy, </a> <a className="green" href="https://www.freecodecamp.com/" target="_blank" rel="noopener noreferrer">Free Code Camp</a>, <a className="green" href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">Codecademy</a>, and other resources for continued development and continuation courses.</strong></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertsAndSkills
