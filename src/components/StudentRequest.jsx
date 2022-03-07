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

            {studentData.length >= 0 &&
                studentData.map((job) => (
                    <div className="dbox" key={job._id}>
                        <div className="sbox">
                            <b>Student Name: </b>
                            {job.name}
                        </div>
                        <div className="sbox">
                            <b>Student Email : </b> {job.email}
                        </div>
                        <div className="sbox">
                            <b>Student Phone :</b> {job.phno}
                        </div>
                        <div className="sbox">
                            <b>College :</b> {job.collegename}
                        </div>
                        <div className="sbox">
                            <b>CGPA :</b>
                            {job.cgpa}
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
                            value={job._id}
                        >
                            <i className="fas fa-times"></i> Decline{" "}
                        </button>
                    </div>
                ))}


        </div>
    )
}

export default StudentRequest;