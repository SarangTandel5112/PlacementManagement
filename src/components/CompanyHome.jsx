import React from "react";

import { Link } from "react-router-dom";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";

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
    </div>
  );
}
export default Front;
