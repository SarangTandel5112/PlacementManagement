import axios from "axios";
import React,{useEffect} from "react";
import { useHistory } from "react-router-dom";


function Companynavbottom() {
    const history=useHistory();
    let logincheck = async()=>{
  
      const loginres=await axios.get(`${process.env.REACT_APP_API_CALL}/isloggedin`);
      
       if(loginres.data.user==="Tpo"){
           history.push("/tpo")
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
                        <a className="nav-link" href="/companyDashboard">Home <span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/#">CS/IT</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">Mechanical</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">Civil</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/#">EC</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" >Blogs <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" >FAQs <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" >About Us <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/#" >Contact Us <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                
            </div>
        </nav>
  );
}
export default Companynavbottom;
