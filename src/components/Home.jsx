import axios from "axios";
import React, { useEffect, useState } from "react";
import TpoHeader from "./TpoHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./TpoHeader";


function Home() {
    return (
        <div>
            <Header />
            <div className="row mainbg">
                <div className="col-lg-6 col-md-5 col-sm-4 outertext">
                    <h1 className="hometext"><b>Grow your career 
                        with a coach ....</b></h1>
                    <h3 className="hometext">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Find your path and achieve your goals.
                        Let our career coaches show you how.</h3>
                    <button className="btn-lg btn-warning ml-5">Get Placed ...</button>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-4 mainimg1">
                    <img className="img-fluid" src="../../Photos/professor1.svg" />
                </div>
            </div>
        </div>

    )
}



export default Home;