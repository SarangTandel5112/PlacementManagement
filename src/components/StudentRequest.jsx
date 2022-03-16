import axios from "axios";
// import { event } from "jquery";
import React, { useEffect, useState } from "react";
import Header from "./Header";
// import { Link } from "react-router-dom";



function StudentRequest() {
    
    const [studentData, setStudentdata] = useState([]);
    async function studentreq() {

        const studentdata1 = await axios.post("/studentrequesttpo");
      
        console.log(studentdata1.data.user);
        setStudentdata(studentdata1.data.user);
        console.log(studentData, "1");


    }

    async function setstatus(event) {
        console.log("r");
        var val=event.target.value;
        var vid=event.target.name;
        var res=await axios.post("/setstudentstatus",{val,vid})  
        console.log(res.data);
        setStudentdata(res.data);
    }

    useEffect(() => {
        studentreq();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Header/>
            

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
                            onClick={setstatus}
                            name="accept"
                            value={job._id}
                        >
                            <i className="fas fa-check"></i> Accept{" "}
                        </button>

                        <button
                            className="btn btn-large btn-danger dbtn"
                            onClick={setstatus}
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