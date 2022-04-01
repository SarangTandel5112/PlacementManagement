import React from "react";
import { Link } from "react-router-dom";

function Tpomiddle() {
  return (
    <div className="">
      {/* <div className="col-lg-4 container-fluid text">
        <h3>
          <b>View companies request....</b>
        </h3>
        <Link to="/tpoIncomingRequest">
          <button className="btn btn-large btn-dark">Company Request</button>
        </Link>
        <h3>
          <b>View Student request....</b>
        </h3>
        <Link to="/stuudentrequesttpo">
          <button className="btn btn-large btn-dark">Student Request</button>
        </Link>
      </div> */}
      <div className=" tpoimgout">
        <img className="img-fluid tpoimg" alt="tpo" src="../../Photos/19.jpg" />
      </div>
    </div>
  );
}
export default Tpomiddle;
