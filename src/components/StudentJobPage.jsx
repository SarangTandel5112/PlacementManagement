import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import Studentnavbottom from "./Studentnavbottom";

function Details() {

  const [jobs, setJobs] = useState([]);
  const [comp, setComp] = useState({});
  const [userapply, setuserapply] = useState([])
  const [apply, setapply] = useState(false)

  var a = new Date();
  const fetchJob = async () => {
    const response = await axios.post("/getAvailableJobForStudent");
    console.log(response.data.alljob);
    setJobs(response.data.alljob);
    await setuserapply(response.data.oneuser)
  
  };

  
  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <div>

      <Header/>
      <Studentnavbottom/>


      <h3 className="main-heading">All Jobs</h3>


      {jobs.length === 0 && <h4 className="main-heading">No new Jobs</h4>}

      {jobs.length > 0 && jobs.map((job) => (

        <div className="row companyformatout" id={job._id} >
          <div className="col-lg-3 col-md-6">
            <img className=" companyimg1" alt="company" src={`../../Photos/Files/clogo/${job.compimg}`} />
          </div>
          <div className="col-lg-8 siderec">
            <p className="cominnertext"><b>Company Name : </b>{job.compname}</p>

            <p className="cominnertext"><b>Title : </b>{job.jobTitle}</p>
            <Link to={`/jobs/${job._id}`} >
              <button type="button " class="btn btn-primary cominnertext" value={job._id}>View Details</button>
            </Link>

            
          </div>

          {
            setTimeout(() => {
              let ab = document.getElementById(job._id);
              ab.remove();
              axios.post('/settimestatus', { jid: job._id });
            }, new Date(job.deadline) - a)

          }

        </div>




      ))}
    </div>
  );
}
export default Details;
