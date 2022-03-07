import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./StudentHeader";



function StudentRequest() {

    async function studentreq() {
        var studentdata = await axios.post("/studentrequesttpo")

    }

    useEffect(() => {
        studentreq();
    }, [])

    return (
        <div>
            <Header />
            <div className="dbox" key="">
                <div className="sbox">
                    <b>JobTitle:</b> job.jobTitle
                </div>
                <div className="sbox">
                    <b>JobDescription:</b> job.jobDescription
                </div>
                <div className="sbox">
                    <b>Number Of Opening :</b> job.numberOfOpening
                </div>
                <div className="sbox">
                    <b>Ctc Range :</b> job.ctcRange
                </div>
                <div className="sbox">
                    <b>Job Location :</b>
                    job.jobLocation
                </div>
                <button
              className="btn btn-large btn-success dbtn"
              onClick=""
              name="accept"
            >
              <i className="fas fa-check"></i> Accept{" "}
            </button>

            <button
              className="btn btn-large btn-danger dbtn"
              onClick=""
              name="reject"
              value=""
            >
              <i className="fas fa-times"></i> Decline{" "}
            </button>
            </div>
        </div>
    )
}

export default StudentRequest;