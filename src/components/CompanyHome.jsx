import React from "react";

import { Link } from "react-router-dom";
import Companynavbottom from "./Companynavbottom";
import Header from "./Header";
import Footer from "./Footer";

function Front() {
  return (
    <div>
      <Header  path="/companyDashboard"/>
      <Companynavbottom />
      <div className=" ">
        {/* <div className="col-lg-4 container-fluid text">
          <h1>
            <b>Hire Best Talent ....</b>
          </h1>
          <Link to="/companyNewRequest">
            <button className="btn btn-large btn-dark btn-width">Post a Job</button>
          </Link>
          <br />
          <br />
          <Link to="/companyAllRequest">
            <button className="btn btn-large btn-dark btn-width">
              All Requests
            </button>
          </Link>
        </div> */}
        <div className=" ">
          <img className="img-fluid" alt="company" src="../../Photos/24.jpg" />
        </div>
      </div>
      <div className="row featurehome tpodata ">
        <h1 className="centertext"> <b>Manage Job</b></h1>
        <h4 className="subtxt"> </h4>
        <div className="col-lg-3 ml-5 featureimgout1">
          <img className="comcard" alt="company" src="../../Photos/interview.png" />
          <h3 className="featurename">Post A Job</h3>
          <Link to="/companyNewRequest">
            <button className="btn btn-primary">Post Job</button>
          </Link>
        </div>
        <div className="col-lg-3 ml-5 featureimgout1">
          <img className="comcard" alt="company" src="../../Photos/professor.png" />
          <h3 className="featurename">My Jobs</h3>
          <Link to={`/companypost`}>
            <button className="btn btn-primary">View Jobs</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Front;
