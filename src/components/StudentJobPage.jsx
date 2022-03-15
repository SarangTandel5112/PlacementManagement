import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentHeader from "./StudentHeader";

function Details() {
  
  const [jobs, setJobs] = useState([]);
  
  var a=new Date();
  const fetchJob = async () => {
    const response = await axios.post("/getAvailableJobForStudent");
    console.log(response.data.alljob);
    setJobs(response.data.alljob);

    axios.get("/isAuthenticate", {})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  const applyForJob = (e, job_id) => {
    e.preventDefault();
    axios.post("/addStudentToJob", {
      job_id,
      student_email: localStorage.getItem("student_email")
    })
      .then(res => {
        console.log(res);
        fetchJob();
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchJob();
  }, []);

  return (
    <div>
      <StudentHeader />

      <h3 className="main-heading">All Jobs</h3>

     
      {jobs.length === 0 && <h4 className="main-heading">No new Jobs</h4>}
      
      {jobs.length > 0 && jobs.map((job) => (
        
        <div className="row companyformatout">
        <div className="col-lg-3 col-md-6">
          <img className=" companyimg1" alt="company" src="../../Photos/company5.png" />
        </div>
        <div className="col-lg-8 siderec">
          <p className="cominnertext"><b>Company Name : </b>{job.jobTitle}</p>
          
          <p className="cominnertext"><b>Address : </b>{job.jobLocation}</p>
          <button type="button " class="btn btn-primary cominnertext">View Details</button>
          <button type="button " class="btn btn-success ml-2">Apply now</button>
        </div>
        {/* {
            job.candidates.findIndex(email => email === localStorage.getItem("student_email")) !== -1 ?
              <button className="btn btn-large btn-success" disabled={true} > Applied </button> :
              <button className="btn btn-large btn-success " onClick={(e) => applyForJob(e, job._id)}> Apply </button>
          } */}
          {
            setTimeout(()=>{
              let ab=document.getElementById(job._id);
              ab.remove();
              axios.post('/settimestatus',{jid:job._id});
            },new Date(job.deadline)-a)
            
          }
          
      </div>
          

        

      ))}
    </div>
  );
}
export default Details;
