import axios from "axios";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import Header from "./Header";
import Tponavbottom from "./Tponavbottom";

function Tpodetails() {
  const [incomingRequest, setIncomingRequest] = useState([]);
  const fetchJob = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_CALL}/getIncomingRequest`);
    
    
    setIncomingRequest(response.data.alljob);
    
  };

  
  
  useEffect(() => {
    
    fetchJob();
    // eslint-disable-next-line
  }, []);

  const acceptJobRequest = (job_id) => {
    axios
      .post("/AcceptJobRequest", {
        job_id,
      })
      .then((res) => {
        
        fetchJob();
        toast.success("Successfully accepted the request", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectJobRequest = (job_id) => {
    axios
      .post("/RejectJobRequest", {
        job_id,
      })
      .then((res) => {
       
        toast.success("Successfully decline the request", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchJob();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
         <Header path="/tpo" />
      <Tponavbottom/>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h3 className="main-heading">New requests</h3>
     
      {incomingRequest.length === 0 && <p className="main-heading">No new Request</p>}

      {incomingRequest.length >= 0 &&
        incomingRequest.map((job) => (
          <div className="dbox" key={job._id}>
            <div className="sbox">
              <b>JobTitle:</b>
              {job.jobTitle}
            </div>
            <div className="sbox">
              <b>JobDescription:</b> {job.jobDescription}
            </div>
            <div className="sbox">
              <b>Number Of Opening :</b> {job.numberOfOpening}
            </div>
            <div className="sbox">
              <b>Ctc Range :</b> {job.ctcRange}
            </div>
            <div className="sbox">
              <b>Job Location :</b>
              {job.jobLocation}
            </div>
            <div className="sbox">
              <b>Status :</b>
              {job.status}
            </div>
            <button
              className="btn btn-large btn-success dbtn"
              onClick={() => acceptJobRequest(job._id)}
              name="accept"
            >
              <i className="fas fa-check"></i> Accept{" "}
            </button>

            <button
              className="btn btn-large btn-danger dbtn"
              onClick={() => rejectJobRequest(job._id)}
              name="reject"
              value={job._id}
            >
              <i className="fas fa-times"></i> Decline{" "}
            </button>
          </div>
        ))}
    </div>
  );
}
export default Tpodetails;
