import React from "react";
import "../../src/index.css";




function Contact() {
  return (

    <div className="container-fluid border border-dark" id="contact">
      <div className="row m-2 d-flex contactRow">
        <h3>My Contact Information</h3>
      </div>
      <div className="row">

        {/* Phone Contact */}
        {/* Phone Contact */}
        <div className="col w-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Contact Me by Phone</h5>
              <p className="card-text">If you have any questions for me or would like to reach out over a phone call,
              I can be reached at (555) 555-5555.</p>
            </div>
          </div>
        </div>

        {/* Email Contact */}
        {/* Email Contact */}
        <div className="col w-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">Send Me an Email</h5>
              <p className="card-text">The best way to contact me would be to send me an email at the email address provided in the link below.</p>
              <h4>
                <a href="mailto:slevalley@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
              </h4>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        {/* GitHub Link */}
        <div className="col w-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">View My GitHub Profile</h5>
              <p className="card-text">Please feel free to view my GitHub profile and repositories at any time, I have provided
              a link to my profile below.</p>
              <h4>
                <a href="https://github.com/sjlevalley" target="_blank" rel="noreferrer">GitHub</a>
              </h4>
            </div>
          </div>
        </div>

        {/* LinkedIn Link */}
        {/* LinkedIn Link */}
        <div className="col w-2">
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">View My LinkedIn Profile</h5>
              <p className="card-text">You can also view my LinkedIn profile at the link provided below.</p>
              <h4>
                <a href="https://www.linkedin.com/in/steve-levalley-36550763/" target="_blank" rel="noreferrer">LinkedIn</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}




export default Contact;
