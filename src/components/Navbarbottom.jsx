import React from "react";


function Navbarbottom() {

    return (

        <nav className="navbar fixed-top navbar-expand-lg   navbar-light  ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" ><b>Home </b><span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <b>Categories</b>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/#" >CS/IT</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#" >Mechanical</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#" >Civil</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#" >EC</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" ><b>Blogs</b> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" ><b>FAQs</b> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" ><b>About Us</b> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" ><b>Contact Us </b><span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                
            </div>
        </nav>


    )
}

export default Navbarbottom;