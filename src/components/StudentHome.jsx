import React ,{useEffect}from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import Studentnavbottom from "./Studentnavbottom";
import Footer from "./Footer";
axios.defaults.withCredentials=true;
function Front() {

  async function fetchdata() {
      console.log("Used")
      axios.get("/tpodata").then((res) => { console.log(res) });


  }
  useEffect(() => {
      fetchdata();
  }, [])
  return (
    <div>
      <Header />
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

      <div className="row stuhomecomp">
        <h1 className="centertext"> <b>Currently Hiring...</b></h1>
        <div className="row companyformatout">
          <div className="col-lg-3 col-md-6">
            <img className=" companyimg1" alt="company" src="../../Photos/company3.png" />
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
      <Footer />
    </div>
  );
}
export default Front;
