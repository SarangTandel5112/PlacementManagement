import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Companynavbottom from "./Companynavbottom";
import Header from "./Header";


function Companyonedetails() {
    const { onecomp } = useParams();

    const [comp, setComp] = useState({});

    async function getdata() {
        const res = await axios.post("/getjobdetailsforcomp", { "id": onecomp })
        await setComp(res.data.onedata);
    }

    useEffect(() => {
        getdata();
        // eslint-disable-next-line 
    }, [])


    return (
        <div>

       
      <Header  path="/companyDashboard"/>
      <Companynavbottom/>

            <div className="">

                <div className="imgout1">
                    <img className="companyimg2" alt="company1" src={`../../Photos/Files/clogo/${comp.compimg}`} />
                </div>
                <div className="">
                    <div className="dbox1" id='' key='' >
                        <div className="sbox">
                            <b>Company Name : </b>{comp.compname}
                        </div>
                        <div className="sbox">
                            <b>JobTitle : </b>{comp.jobTitle}
                        </div>
                        <div className="sbox">
                            <b>JobDescription:</b> {comp.jobDescription}
                        </div>
                        <div className="sbox">
                            <b>Number Of Opening :</b> {comp.numberOfOpening}
                        </div>
                        <div className="sbox">
                            <b>CTC Range :</b> {comp.ctcRange}
                        </div>
                        <div className="sbox">
                            <b>Minimum Criteria :</b> {comp.minimumCriteria}
                        </div>
                        <div className="sbox">
                            <b>Job Location :</b>{comp.jobLocation}
                        </div>
                        <div className="sbox">
                            <b>Company Website :</b>{comp.companyWebsite}
                        </div>
                        <div className="sbox">
                            <b>Last Day For Apply : </b>{comp.deadline}
                        </div>
                        <div className="sbox">
                            <b>Status : </b>{comp.status}
                        </div>
                        
                        <div className="sbox">
                            <Link to={`/companypost/${onecomp}/studentdetails`}>
                                <button type="button" className="btn btn-primary" value={comp._id}>View Student</button>
                            </Link>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    );
}
export default Companyonedetails;


