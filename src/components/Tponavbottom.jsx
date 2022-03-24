import axios from "axios";
import React,{useEffect,useState} from "react";
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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/tpo">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle" to="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to="/#">CS/IT</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/#">Mechanical</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/#">Civil</Link>
                            <div class="dropdown-divider"></div>
                            <Link class="dropdown-item" to="/#">EC</Link>
                        </div>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/#" >Blogs <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/#" >FAQs <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/#" >About Us <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/#" >Contact Us <span class="sr-only">(current)</span></Link>
                    </li>
                </ul>
                
            </div>
        </nav>
  );
}
export default Tponavbottom;
