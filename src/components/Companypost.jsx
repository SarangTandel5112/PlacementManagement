import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Companynavbottom from "./Companynavbottom";
import Header from "./Header";

function Companypost() {

  const [jobs, setJobs] = useState([]);

  const fetchJob = async () => {
    const response = await axios.post("/GetAllJobsOfCompany");
 
    setJobs(response.data.jobs);    
  };
  
  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <div>
      
      <Header  path="/companyDashboard"/>
      <Companynavbottom/>

      <h3 className="main-heading">All Jobs</h3>


      {jobs.length === 0 && <h4 className="main-heading">No new Jobs</h4>}

      {jobs.length > 0 && jobs.map((job) => (

        <div className="row companyformatout" id={job._id} >
          <div className="col-lg-3 col-md-6">
            <img className=" companyimg1" alt="company" src={`../../Photos/Files/clogo/${job.compimg}`} />
          </div>
          <div className="col-lg-8 siderec">
           
            <p className="cominnertext"><b>Title : </b>{job.jobTitle}</p>
            <p className="cominnertext"><b>Status : </b>{job.status}</p>
            <Link to={`/companypost/${job._id}`} >
              <button type="button " className="btn btn-primary cominnertext" value={job._id}>View Details</button>
            </Link>
           
          </div>
          
          

        </div>




      ))}
    </div>
  );
}
export default Companypost;
