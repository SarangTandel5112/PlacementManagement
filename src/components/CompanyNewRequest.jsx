import React, { useState } from "react";
import CompanyHeader from "./CompanyHeader";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Companyhire() {
  const history=useHistory()
  const [file, setfile] = useState(" ")
  const [formdata, setformdata] = useState({
    title: "",
    description: "",
    numberOfOpening: "",
    ctcRange: "",
    minimumCriteria:"",
    jobLocation: "",
    companyWebsite: "",
    deadline:""
  });

  async function submitform(event) {
    event.preventDefault();
    const finaldata = formdata;
    const formData=new FormData();
    formData.append("file",file)
    formData.append("title",finaldata.title);
    formData.append("description",finaldata.description);
    formData.append("ctcRange",finaldata.ctcRange);
    formData.append("minimumCriteria",finaldata.minimumCriteria);
    formData.append("jobLocation",finaldata.jobLocation);
    formData.append("companyWebsite",finaldata.companyWebsite);
    formData.append("deadline",finaldata.deadline);
    try{
      let response= await axios.post("/requestToAddJob",formData,{
        headers:{
          'Content-Type':'multipart/formdata'
        }
        
      })
      history.push("/login")
      
     
      

    }catch(err){
      console.log(err)
    }
  }

  function handleChange(event) {
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }
  function handleFileChange(event){
    console.log("before")
    setfile(event.target.files[0])
    
   

  
   

 }
  return (
    <div>
      <CompanyHeader />
      <div className="full-height">
        <form
          className="registerform container-fluid"
          method="POST"
          onSubmit={submitform}
        >
          <h1 className="heading">Looking to hire Developers?</h1>
          <div className="fname container-fluid">
            <input
              type="text"
              className="fname1"
              name="title"
              onChange={handleChange}
              placeholder="Job Title"
              required
            />
          </div>
          <div className="lname container-fluid">
            <input
              type="text"
              className="lname1"
              name="description"
              onChange={handleChange}
              placeholder="Job Description"
              required
            />
          </div>
          <div className="phno container-fluid">
            <input
              type="number"
              className="phno1"
              name="numberOfOpening"
              onChange={handleChange}
              placeholder="Number Of Opening"
              required
            />
          </div>
          <div className="phno container-fluid">
            <input
              type="text"
              className="phno1"
              name="ctcRange"
              onChange={handleChange}
              placeholder="ctcRange"
              required
            />
          </div>

          

          <div className="phno container-fluid">
            <input
              type="text"
              className="phno1"
              name="minimumCriteria"
              onChange={handleChange}
              placeholder="Minimum Criteria"
              required
            />
          </div>


          <div className="phno container-fluid">
            <input
              type="text"
              className="phno1"
              name="jobLocation"
              onChange={handleChange}
              placeholder="Job Location"
              required
            />
          </div>

          <div className="phno container-fluid">
            <input
              type="text"
              className="phno1"
              name="companyWebsite"
              onChange={handleChange}
              placeholder="Company Website"
              required
            />
          </div>


          <div>
            <input type="datetime-local" className="phno1" name="deadline" onChange={handleChange} required/>
          </div>

          <br />

          <br />
          <div className="container-fluid">
          <label htmlFor="fielInput">Upload Job Description : </label>
        <input type="file" name="file" className="lname" onChange={handleFileChange}  id="fileInput" />
        
        </div>

          <input
            type="submit"
            className="btn-primary btn-lg accbtn"
            value="Submit"
            name="Log in"
          />
        </form>
      </div>
    </div>
  );
}
export default Companyhire;
