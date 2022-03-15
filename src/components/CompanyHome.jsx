import React from "react";

import { Link } from "react-router-dom";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";
import Footer from "./Footer";

function Front() {
  return (
    <div>
      <Header1 />
      <Companynavbottom />
      <div className="row container-fluid">
        <div className="col-lg-4 container-fluid text">
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
        </div>
        <div className="col-lg-8 container-fluid">
          <img className="img-fluid" alt="company" src="../../Photos/company.png" />
        </div>
      </div>
      <div className="row featurehome tpodata">
        <h1 className="centertext"> <b>Manage Job</b></h1>
        <h4 className="subtxt"></h4>
        <div className="col-lg-3 ml-5 featureimgout1">
          <img className="comcard" alt="company" src="../../Photos/interview.png" />
          <h3 className="featurename">Post A Job</h3>
          <button className="btn btn-primary">Post Job</button>
        </div>
        <div className="col-lg-3 ml-5 featureimgout1">
        <img className="comcard" alt="company" src="../../Photos/professor.png" />
          <h3 className="featurename">My Jobs</h3>
          <button className="btn btn-primary">View Jobs</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Front;
