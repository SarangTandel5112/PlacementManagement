import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import Companynavbottom from "./Companynavbottom";
function Companyhire() {
  const history = useHistory();
  const [file, setfile] = useState(" ");
  const [formdata, setformdata] = useState({
    title: "",
    description: "",
    numberOfOpening: "",
    ctcRange: "",
    branch: "",
    minimumCriteria: "",
    jobLocation: "",
    companyWebsite: "",
    deadline: "",
  });

  async function submitform(event) {
    event.preventDefault();
    const finaldata = formdata;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", finaldata.title);
    formData.append("description", finaldata.description);
    formData.append("ctcRange", finaldata.ctcRange);
    formData.append("branch", finaldata.branch);
    formData.append("minimumCriteria", finaldata.minimumCriteria);
    formData.append("jobLocation", finaldata.jobLocation);
    formData.append("companyWebsite", finaldata.companyWebsite);
    formData.append("numberOfOpening", finaldata.numberOfOpening);
    formData.append("deadline", finaldata.deadline);
    try {
      await axios.post("/requestToAddJob", formData, {
        headers: {
          "Content-Type": "multipart/formdata",
        },
      });
      history.push("/companyDashboard");
    } catch (err) {
      console.log(err);
    }
  }
  const [disabled, setdisabled] = useState(false)
  const [display, setdisplay] = useState("d-none")

  function handleChange(event) {
    if(event.target.name==="minimumCriteria"){
      if(event.target.value>10){
        setdisabled(true)
        setdisplay("d-inline")
      }else{
        setdisabled(false)
        setdisplay("d-none")
      }
    }
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }
  function handleFileChange(event) {
    

    setfile(event.target.files[0]);
  }
  return (
    <div>
      <Header path="/companyDashboard" />
      <Companynavbottom />
      <div className="full-height">
        <form
          className="registerform container-fluid"
          method="POST"
          onSubmit={submitform}
        >
          <h1 className="heading">Looking to hire Candidates?</h1>
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
          <div className=" container-fluid">
            <select
              name="branch"
              onChange={handleChange}
              className="lname1"
              id="branch"
              placeholder="Phone Number"
              required
            >
              <option value="" selected>
                Select Branch
              </option>
              <option value="CS/IT">CS/IT</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
              <option value="EC">EC</option>
            </select>
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
          <p className={`errstatus  ${display}  container-fluid`}>CGPA should be less than 10</p>

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
            <input
              type="datetime-local"
              className="phno1"
              name="deadline"
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <br />
          <div className="container-fluid">
            <label htmlFor="fielInput">Upload Job Description : </label>
            <input
              type="file"
              name="file"
              className="lname"
              onChange={handleFileChange}
              id="fileInput"
            />
          </div>

          <input
            type="submit"
            className="btn-primary btn-lg accbtn"
            value="Submit"
            name="Log in"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
}
export default Companyhire;
