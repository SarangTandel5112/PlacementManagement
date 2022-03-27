import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Selectedbtn } from "./Selectedbtn";
import { Selectbtn } from "./Selectbtn";
import Header from "./Header";
import Companynavbottom from "./Companynavbottom";

function Appliedstudentdetails() {

    const { onecomp } = useParams()
    const [compdata, setcompdata] = useState([])
    const [selectstatus, setselectstatus] = useState(false)
    let s = 1;
    // setcompid(onecomp)
    async function getdata() {

        const res = await axios.post("/getappliedstudentdetails", { id: onecomp })
        setcompdata(res.data.stddata);
    
         setselectstatus(false)
    }

    useEffect(() => {
        getdata();
        // eslint-disable-next-line 
    },[selectstatus])
    return (

        <div>
            
            <Header  path="/companyDashboard"/>
            <Companynavbottom/>
            <div className="stdtable">
              
                <table className="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">email</th>
                            <th scope="col">CGPA</th>
                            <th scope="col">Resume</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compdata.map((one) => (

                            <tr>
                                <th scope="row">{s++}</th>
                                <td>{one.stddetails.name}</td>
                                <td>{one.stddetails.email}</td>
                                <td>{one.stddetails.cgpa}</td>
                                <td><button className="btn btn-primary" onClick={() => window.open(`../../Photos/Files/sresume/${one.stddetails.resumename}`)} >View Resume</button></td>
                                <td>{one.placementstatus? <Selectedbtn /> : <Selectbtn id={one.stddetails._id} changestatus = {setselectstatus} /> }</td>
                            </tr>

                        ))
                        }



                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Appliedstudentdetails;