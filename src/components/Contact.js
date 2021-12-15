import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Contact() {
    return (
        <>
            <h1>Contact Steve</h1>
            <h6 id="emailAddress">(SLeValley@gmail.com)</h6>
            <ul className="social-links">

                <li><a target="_blank" rel="noopener noreferrer" title="GitHub" href="https://github.com/sjlevalley" className=" github">
                    <FontAwesomeIcon icon={["fab", "github"]} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" title="email" href="mailto:slevalley@gmail.com" className="email">
                    <FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/steve-levalley/" className="linkedin">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} /></a></li>


            </ul>
        </>
    )
}

export default Contact
