import React from 'react'


function NavBar() {
    return (
        <header className="container-fluid" id="header">
            <div className="row d-flex p-3">
                <div className="col-lg-4 name d-flex justify-content-center align-items-center my-2">
                    Steve LeValley
                </div>
                <div className="col-lg-8 d-flex align-items-center headerLinks">
                    <a className="d-flex my-2 mx-4" href="#home">Home</a>
                    <a className="d-flex my-2 mx-4" href="#about">About</a>
                    <a className="d-flex my-2 mx-4" href="#portfolio">Portfolio</a>
                    <a className="d-flex my-2 mx-4" href="#contact">Contact</a>
                    <a className="d-flex my-2 mx-4" href="https://docs.google.com/document/d/18el5ix3n0d66RjrEs-wUGvvt8rBVTesSjzgfQCh97Jc/edit?usp=sharing" target="_blank" rel="noreferrer noopener" >
                        Link to Resume
                    </a>
                </div>
            </div>
        </header >
    )
}

export default NavBar
