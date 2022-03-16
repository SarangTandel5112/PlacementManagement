
import React, { useEffect, useState } from "react";

import Companynavbottom from "./Companynavbottom";
import Header from "./Header";
import Footer from "./Footer";

import axios from "axios";
import {  useParams } from 'react-router-dom';
import Studentnavbottom from "./Studentnavbottom";


function Companydisplay() {
  const {compId}=useParams();
  
  const [comp,setComp]=useState({});
  const [userapply,setuserapply]=useState([])
  const [apply,setapply]=useState(false)

  async function getdata(){
    
    const res=await axios.post("/getfulldetails",{"id":compId})
    // console.log(res.data.oneuser);
    await setComp(res.data.oneuser);
    // alert(res.data.oneuser.jobTitle)
    await setuserapply(res.data.userdetails)
    if(res.data.userdetails.includes(compId)){      
      // alert("1")
      setapply(true);
    }
    // alert(comp.jobTitle)
    
  }

  async function senddata(){
    setapply(true);
    await axios.post("/applyforcompany",{id:compId})

  }

  useEffect(()=>{
    getdata();
     // eslint-disable-next-line 
  },[compId])


  return (
    <div>


      <Header />

      <Studentnavbottom />
      {/* {userapply.indexOf(compId) > -1 ? alert("true"):alert("false")} */}

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

            {apply === true ? 
            <div className="sbox">
              <button class="btn btn-success" disabled="true" >Applied</button>              
            </div> :
            <div className="sbox">
              <button class="btn btn-success" onClick={senddata}>Apply now</button>              
            </div> }
            
          </div>
        </div>


        <Footer />
      </div>
    </div>
  );
}
export default Companydisplay;


