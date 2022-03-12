import React from "react";
import StudentHeader from "./StudentHeader";
import { Link } from "react-router-dom";
import Header1 from "./Header1";
import Navbarbottom from "./Navbarbottom";
import Studentnavbottom from "./Studentnavbottom";

function Front() {
  return (
    <div>
      <Header1 />
      <Studentnavbottom />
      <div className="row container-fluid">
        <div className="col-lg-4 container-fluid text">
          <h1>
            <b>Get Placed In Best Company....</b>
          </h1>
          
          <br />
          <Link to="/jobs">
            <button className="btn btn-large btn-dark btn-width">View Companies</button>
          </Link>
        </div>
        <div className="col-lg-8 container-fluid">
          <img className="img-fluid" alt="coding" src="../../Photos/coding.png" />
        </div>
      </div>
    </div>
  );
}
export default Front;
