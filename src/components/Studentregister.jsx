import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
axios.defaults.withCredentials=true;

function Studentregister() {
  const history=useHistory()
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phno: "",
    collegename: "",
    cgpa: "",
    password: "",
    password1: "",
  });
  const [file, setfile] = useState(" ")
  async function submitform(event) {
    event.preventDefault();
    const finaldata = formdata;
    if (password[0] !== password1[0]) {
      toast.error("Password and confirm password do not match", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      
      const formData=new FormData();
      formData.append("file",file)
      formData.append("name",finaldata.name);
      formData.append("email",finaldata.email);
      formData.append("phno",finaldata.phno);
      formData.append("collegename",finaldata.collegename);
      formData.append("cgpa",finaldata.cgpa);
      formData.append("password",finaldata.password);
      try{
         await axios.post("/registerstudent",formData,{
          headers:{
            'Content-Type':'multipart/formdata'
          }
          
        })
        history.push("/login")
        
       
        
  
      }catch(err){
        console.log(err)
      }
    }
 
  }

  function handleChange(event) {
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }
  function handleFileChange(event){
    console.log("before")
    setfile(event.target.files[0])
    
   

  
   

 }

  const {  password, password1 } = formdata;

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form
        className="registerform container-fluid full-height"
        method="POST"
        onSubmit={submitform}
      >
        <h1 className="heading">Create a Student Account</h1>
        <div className="fname container-fluid">
          <input
            type="text"
            className="fname1"
            name="name"
            onChange={handleChange}
            placeholder="Student Name"
            required
          />
        </div>
        <div className="lname container-fluid">
          <input
            type="email"
            className="lname1"
            name="email"
            onChange={handleChange}
            placeholder="Student Email"
            required
          />
        </div>
        <div className="phno container-fluid">
          <input
            type="number"
            className="phno1"
            name="phno"
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="phno container-fluid">
          <input
            type="text"
            className="phno1"
            name="collegename"
            onChange={handleChange}
            placeholder="College Name"
            required
          />
        </div>
        <div className="phno container-fluid">
          <input
            type="text"
            className="phno1"
            name="cgpa"
            onChange={handleChange}
            placeholder="Current CGPA"
            required
          />
        </div>
        <div className="password container-fluid">
          <input
            type="password"
            className="password1"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="password container-fluid">
          <input
            type="password"
            className="password1"
            name="password1"
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>
        <br />

        <br />
        <div className="container-fluid">
          <label htmlFor="fielInput">Upload Resume : </label>
        <input type="file" name="file" className="lname" onChange={handleFileChange}  id="fileInput" />
        
        </div>

        <input
          type="submit"
          className="btn-primary btn-lg accbtn"
          value="Create Account"
          name="Log in"
        />
      </form>
    </div>
  );
}

export default Studentregister;
