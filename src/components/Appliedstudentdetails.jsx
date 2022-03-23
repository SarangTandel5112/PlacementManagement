import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function Appliedstudentdetails() {

    const { onecomp } = useParams()
    const [compid, setcompid] = useState()
    const [compdata, setcompdata] = useState([])
    let s = 1;
    // setcompid(onecomp)
    async function getdata() {

        const res = await axios.post("/getappliedstudentdetails", { id: onecomp })
        setcompdata(res.data.stddata);
    }

    useEffect(() => {
        getdata();
    }, [])
    return (
        <div>
            <div className="stdtable">
                {console.log(compdata)}
                <table class="table table-striped ">
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
                                <td>{one.name}</td>
                                <td>{one.email}</td>
                                <td>{one.cgpa}</td>
                                <td><button className="btn btn-primary" onClick={() => window.open(`../../Photos/Files/sresume/${one.resumename}`)} >View Resume</button></td>
                                <td>{}<button className="btn btn-success">Selected</button></td>
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