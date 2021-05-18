import React from "react";


function Contact() {
  return (
    <footer className="container-fluid border border-dark" id="contact">
      <div className="row">
        <div className="col-3 border border-dark">My Contact Information</div>
        <div className="col border border-dark">(555) 555-5555</div>
        <div className="col border border-dark">
          <h4>
            <a href="mailto:slevalley@gmail.com" target="_blank" rel="noreferrer">Email Me</a>
          </h4>
        </div>
        <div className="col border border-dark">
          <h4>
            <a href="https://github.com/sjlevalley" target="_blank" rel="noreferrer">GitHub</a>
          </h4>
        </div>
        <div className="col border border-dark">
          <h4>
            <a href="https://www.linkedin.com/in/steve-levalley-36550763/" target="_blank" rel="noreferrer">LinkedIn</a>
          </h4>
        </div>
      </div>
    </footer>
  );
}




export default Contact;
