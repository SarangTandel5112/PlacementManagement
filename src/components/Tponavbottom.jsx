import axios from "axios";
import React,{useEffect} from "react";
import { Link, useHistory } from "react-router-dom";

 function Tponavbottom() {
    const history=useHistory();
    let logincheck = async()=>{  
      const loginres=await axios.get("/isloggedin");      
       if(loginres.data.user==="Company"){
           history.push("/companyDashboard")
       }else if(loginres.data.user==="Student"){
           history.push("/studentHome")
       }       
      } 
    
    useEffect(() => {
      logincheck()
      // eslint-disable-next-line
    }, [])
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/tpo">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/#">CS/IT</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/#">Mechanical</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/#">Civil</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/#">EC</Link>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/#" >Blogs <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/#" >FAQs <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/#" >About Us <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/#" >Contact Us <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                
            </div>
        </nav>
  );
}
export default Tponavbottom;
