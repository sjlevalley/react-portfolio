import React from 'react'
import image from '../pages/NewHome/images/MeImage.jpg';

function AboutMe() {
    return (
        <div className="row">
            <div className="col aboutMeText">
                <h1>About Me</h1>
                <img className="float-left" alt="Holding a fish" id="main-photo" src={image} />
                <p>Highly driven and hardworking Full-Stack Web Developer willing to go the extra mile to ensure a high-quality outcome. I received a certificate for Full-Stack Web Development from the University of California, San Diego, and a prior B.S. in Marine Engineering Technology from the California Maritime Academy. Being a team member is integral to who I am as a person, but I am also able to work alone without any oversight, when needed. Evidence of demonstrating these qualities lies in my personal, educational, and career backgrounds as I have received awards, recommendations, and positive evaluations for my efforts in each of these spheres. Hard-work, and being quality-driven have been instilled in my ethos as a team member. I eagerly apply these traits, as well as my Web-Development skills, which include but are not limited to, React, Express, SQL and NoSQL in a fast-paced, quality-driven environment.</p>
            </div>
        </div>
    )
}

export default AboutMe
