import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";





export default function Tpodashboard() {
    const [slen, setslen] = useState(0);
    const [clen, setclen] = useState(0)
    async function fetchdata(){
        console.log("Used")
      let response=axios.get("/tpodata").then((res)=>{setslen(res.data.slen);setclen(res.data.clen)});
      
      
    }
    useEffect(() => {
      fetchdata();
    }, [])

    
    

    return (
        <div>
            <Header />
            <div className="tpodashboardcontainer">
                <div className="col-sm-12 mt-5">
                    <div className="row mx-5 text-center">
                        <div className="col-sm-4 mt-5 ">
                            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem', height: '10rem', textAlign: "center" }}>
                                <div className="car-header" >Students</div>
                                <div className="card-body" >
                                    <h1 className="card-title" style={{ margin: 'auto auto' }}>
                                        {slen}
                                    </h1>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5 ">
                            <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem', height: '10rem' }}>
                                <div className="car-header">Companies</div>
                                <div className="card-body">
                                    <h1 className="card-title">
                                       {clen}
                                    </h1>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mt-5 ">
                            <div className="card text-white bg-danger mb-3" style={{ maxWidth: '18rem',height:"10rem" }}>
                                <div className="car-header">Student Placed</div>
                                <div className="card-body">
                                    <h1 className="card-title">
                                        0
                                    </h1>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 lg-12 text-center ">
          <div className="col ">
            <Link to="/tporequests">

              <input
                type="submit"
                className="btn-primary  btn-sm regbtn "
                value="Requests"
                name="Requests"
              />

            </Link>
          </div>
          <div className="col ">
            <Link to="/tporequests">

              <input
                type="submit"
                className="btn-primary btn-sm regbtn"
                value="Collect Data"
                name="Collect Data"
              />


            </Link>
          </div>


        </div>




            </div>




        </div>
    )
}
