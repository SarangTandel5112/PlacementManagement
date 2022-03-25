import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Tpomiddle from "./Tpomiddle";
import Tponavbottom from "./Tponavbottom";


export default function Tpodashboard() {
    const [slen, setslen] = useState(0);
    const [clen, setclen] = useState(0);
    const [sreqlen, setsreqlen] = useState(0)
    const [creqlen, setsceqlen] = useState(0)
    async function fetchdata() {
        try {
            axios.get("/tpodata").then((res) => { setslen(res.data.slen); setclen(res.data.clen) });
            const studentdata1 = await axios.post("/studentrequesttpo");
            setsreqlen(studentdata1.data.user.length)
            const response = await axios.post("/getIncomingRequest");
            setsceqlen(response.data.alljob.length)

        } catch (e) {
            console.log("Unauthorised")

        }
    }
    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div>
            <Header path="/tpo" />
            <Tponavbottom />
            <Tpomiddle />
            <div className="row featurehome">
                <h1 className="centertext tpotext"> <b>View Requests</b></h1>
                <div className="col-lg-5 ml-5 featureimgout tpofeature1 ">
                    <img className="featureimg" alt="job photos" src="../../Photos/job.png" />
                    <h3 className="featurename">Student Requests</h3>
                    <Link to="/stuudentrequesttpo">
                        <button className="btn btn-large btn-dark tpocombtn">Student Request <b className="reqinfo">{sreqlen}</b></button>

                    </Link>
                </div>
                <div className="col-lg-5 featureimgout tpofeature1">
                    <img className="featureimg" alt="manage png" src="../../Photos/manage.png" />
                    <h3 className="featurename">Company Requests </h3>
                    <Link to="/tpoIncomingRequest">
                        <button className="btn btn-large btn-dark tpocombtn">Company Request <b className="reqinfo">{creqlen}</b></button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="row featurehome tpodata">
                    <h1 className="centertext"> <b>Quick Insights</b></h1>
                    {/* <h4 className="subtxt"></h4> */}
                    <div className="col-lg-3 ml-5 featureimgout1 ">
                        <h1 className="setsize1">{slen}</h1>
                        <h3 className="featurename">Total Students</h3>
                        <Link to="/tpo/studentdetails">
                            <button className="btn btn-primary">View Students</button>
                        </Link>
                    </div>
                    <div className="col-lg-3 ml-5 featureimgout1">
                        <h1 className="setsize1">{clen}</h1>
                        <h3 className="featurename">Total Recruiters</h3>
                        <button className="btn btn-primary">View Companies</button>
                    </div>
                    <div className="col-lg-3 ml-5 featureimgout1">
                        <h1 className="setsize1">{slen}</h1>
                        <h3 className="featurename">Students Placed</h3>
                        <button className="btn btn-primary">View Placed</button>
                    </div>
                </div>
            </div>

            <Footer />




        </div>
    )
}
