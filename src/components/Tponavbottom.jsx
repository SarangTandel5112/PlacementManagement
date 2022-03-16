import axios from "axios";
import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";

 function Tponavbottom() {
    const history=useHistory();
    const [isLoggedin, setisLoggedin] = useState(true);
    let logincheck = async()=>{
  
      const loginres=await axios.get("/isloggedin");
      console.log(loginres)
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
                        <a class="nav-link" href="/companyDashboard">Home <span class="sr-only">(current)</span></a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/#">CS/IT</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/#">Mechanical</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/#">Civil</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/#">EC</a>
                        </div>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/#" >Blogs <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/#" >FAQs <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/#" >About Us <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/#" >Contact Us <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                
            </div>
        </nav>
  );
}
export default Tponavbottom;
