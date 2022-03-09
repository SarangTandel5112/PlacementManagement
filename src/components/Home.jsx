import axios from "axios";
import React, { useEffect, useState } from "react";
import TpoHeader from "./TpoHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";


function Home() {
    return (
        <div>
            <Header />
            <div className="row mainbg">
                <div className="col-lg-6 col-md-5 col-sm-4 outertext">
                    <h1 className="hometext"><b>Grow your career
                        with a coach ....</b></h1>
                    <h4 className="hometext">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Find your path and achieve your goals.
                        Let our career coaches show you how.</h4>
                    <button className="btn-lg btn-warning ml-5">Get Placed ...</button>
                </div>
                <div className="col-lg-6 col-md-5 col-sm-4 mainimg1">
                    <img className="img-fluid" src="../../Photos/professor1.svg" />
                </div>
            </div>
            <div className="row featurehome">
                <h1 className="centertext"> <b>How Can We Help</b></h1>
                <h4 className="subtxt">Our College have seen it all. Achieve your goals with their support.</h4>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" src="../../Photos/job.png" />
                    <h3 className="featurename">Find Job.</h3>
                </div>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" src="../../Photos/manage.png" />
                    <h3 className="featurename">Manage Application .</h3>
                </div>
                <div className="col-lg-4 featureimgout">
                    <img className="featureimg" src="../../Photos/resume.png" />
                    <h3 className="featurename">Upload Resume .</h3>
                </div>
            </div>
            <div className="clientmain">
                <h1 className="clientheader"><b>Our Client</b></h1>
                <div>
                    <img className="roundimg " src="../../Photos/companyround.png" />
                </div>


            </div>
            <div className="aboutus container row">
                <h1 className="abouttext"><b>About Us :</b></h1>
                <div className="col-lg-6">
                    <img className="img-fluid" src="../../Photos/aboutimg.svg" />
                </div>
                <p className="abouttext1 col-lg-6">&nbsp; &nbsp; &nbsp; &nbsp;The Placement Cell at DDU is a concept in its own form. It has the following structure comprising of three important parts viz. the placement office comprising of the Manager (Placements) and placement secretary, the faculty members and finally the student representatives from each stream. The structure aims at touching all the aspects required for the smooth functioning of placement process.</p>
            </div>
            <div>
                
            </div>
        </div>

    )
}



export default Home;