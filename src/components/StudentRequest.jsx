import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./StudentHeader";



function StudentRequest() {
    var std;
    const [studentData, setStudentdata] = useState([]);
    async function studentreq() {

        var studentdata1 = await axios.post("/studentrequesttpo");
        std = studentdata1.data.user;
        console.log(studentdata1.data.user);
        setStudentdata(studentdata1.data.user);

        console.log(studentData, "1");


    }

    function setData() {

    }

    useEffect(() => {
        studentreq();
    }, [])

    return (
        <div>
            <Header />
            {studentData.length === 0 && <p className="main-heading">No new Request</p>}

            {console.log(studentData, "dom")}
            {studentData.length >= 0 && studentData.map((student) => {
                <div className="dbox" key="">
                    <div className="sbox">
                        <b>JobTitle:{ }</b> job.jobTitle
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
                        onClick={setData()}
                        name="reject"
                        value=""
                    >
                        <i className="fas fa-times"></i> Decline{" "}
                    </button>
                </div>

            })}

        </div>
    )
}

export default StudentRequest;