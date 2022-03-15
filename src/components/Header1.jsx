import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Header1() {
    function getdata() {
        axios.post('/logout')
    }
    const [torf, setdata] = useState("")

    return (
        <div className="frontpage">
            <section id="title">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button
                        className="navbar-toggler "
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <b className="navbar-brand brandname mainname">
                        <i class="fas fa-user-graduate"></i> DDU Placement
                    </b>
                    <button
                        className="navbar-toggler searchbox"
                        type="button"
                        data-toggle=""
                        data-target=""
                        aria-controls=""
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <input
                            type="text"
                            name="search"
                            placeholder="Search.."
                            className="searchtext"
                        ></input>
                        <i className="fas fa-search searchbtn"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-light mr-2 my-2 my-sm-0" type="submit">Search</button>
                            </form>


                            <li className="nav-item">
                                
                                <form method="GET" action="/">
                                    <button className="btn btn-light " onClick={getdata}>
                                        <Link to="/">
                                            <b className="lbtn">Logout</b>
                                        </Link>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>
            </section>
        </div>
    );
}
export default Header1;
