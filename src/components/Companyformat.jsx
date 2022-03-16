import React from "react";

import Companynavbottom from "./Companynavbottom";
import Header from "./Header";

function Companyformat() {
  return (
    <div>
      <Header />
      <Companynavbottom />
      <div className="row companyformatout">
        <div className="col-lg-3 col-md-6">
          <img className=" companyimg1" alt="company" src="../../Photos/company5.png" />
        </div>
        <div className="col-lg-8 siderec">
          <p className="cominnertext">Company Name : TCS</p>
          <p className="cominnertext">Address : wefg df dfgdf</p>
          <button type="button " class="btn btn-primary cominnertext">View Details</button>
          <button type="button " class="btn btn-success ml-2">Apply now</button>
        </div>
      </div>
      <div className="row companyformatout">
        <div className="col-lg-3 col-md-6">
          <img className=" companyimg1" alt="company1" src="../../Photos/company3.png" />
        </div>
        <div className="col-lg-8 siderec">
          <p className="cominnertext">Company Name : TCS</p>
          <p className="cominnertext">Address : wefg df dfgdf</p>
          <button type="button " class="btn btn-primary cominnertext">View Details</button>
          <button type="button " class="btn btn-success ml-2">Apply now</button>
        </div>
      </div>
      <div className="row companyformatout">
        <div className="col-lg-3 col-md-6">
          <img className=" companyimg1" alt="company1" src="../../Photos/company6.png" />
        </div>
        <div className="col-lg-8 siderec">
          <p className="cominnertext">Company Name : TCS</p>
          <p className="cominnertext">Address : wefg df dfgdf</p>
          <button type="button " class="btn btn-primary cominnertext">View Details</button>
          <button type="button " class="btn btn-success ml-2">Apply now</button>
        </div>
      </div><div className="row companyformatout">
        <div className="col-lg-3 col-md-6">
          <img className=" companyimg1" alt="company1" src="../../Photos/company4.png" />
        </div>
        <div className="col-lg-8 siderec">
          <p className="cominnertext">Company Name : TCS</p>
          <p className="cominnertext">Address : wefg df dfgdf</p>
          <button type="button " class="btn btn-primary cominnertext">View Details</button>
          <button type="button " class="btn btn-success ml-2">Apply now</button>
        </div>
      </div>


    </div>
  );
}
export default Companyformat;
