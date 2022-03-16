import React, { useEffect, useState } from "react";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";
import Footer from "./Footer";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

function Companydisplay() {
  const {compId}=useParams();
  
  const [comp,setComp]=useState({});
  const [apply,setapply]=useState(false)

  async function getdata(){
    
    const res=await axios.post("/getfulldetails",{"id":compId})
    // console.log(res.data.oneuser);
    setComp(res.data.oneuser);
    // alert(res.data.oneuser.jobTitle)
    console.log(comp);
    // alert(comp.jobTitle)
  }

  async function senddata(){
    setapply(true);
    await axios.post("/applyforcompany",{id:compId})

  }

  useEffect(()=>{
    getdata();
  },[compId])


  return (
    <div>
      <Header1 />
      <Companynavbottom />

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

            {apply == true ? 
            <div className="sbox">
              <button class="btn btn-success" >Applied</button>              
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


