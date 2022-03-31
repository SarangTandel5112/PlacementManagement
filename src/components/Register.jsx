import axios from "axios";
import {  useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


axios.defaults.withCredentials=true;
function Register() {
  const history=useHistory()
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phno: "",
    ceo: "",
    hr: "",
    address: "",
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
    } 
    else {
      const formData=new FormData();
      formData.append("file",file)
      formData.append("name",finaldata.name);
      formData.append("email",finaldata.email);
      formData.append("phno",finaldata.phno);
      formData.append("ceo",finaldata.ceo);
      formData.append("hr",finaldata.hr);
      formData.append("address",finaldata.address);
      formData.append("password",finaldata.password);
   
      try{
         await axios.post(`${process.env.REACT_APP_API_CALL}/registerCompany`,formData,{
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


  const [disabled, setdisabled] = useState(false)
  const [phonedisp, setphonedisp] = useState("d-none")
  function handleChange(event) {
    if(event.target.name==="phno"){
      if(event.target.value.length!==10){
        setdisabled(true)
        setphonedisp("d-inline")
        
      }else{
        setdisabled(false);
        setphonedisp("d-none")
      }

    }
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }
  function handleFileChange(event){
    
     setfile(event.target.files[0])
  }

  const { password, password1 } = formdata;
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
        <h1 className="heading">Get Registered Your Company to US!</h1>
        <div className="fname container-fluid">
          <input
            type="text"
            className="fname1"
            name="name"
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
        </div>
        <div className="lname container-fluid">
          <input
            type="email"
            className="lname1"
            name="email"
            onChange={handleChange}
            placeholder="Company Email"
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
          <p className={`errstatus  ${phonedisp}  container-fluid`}>Digits should be equal to 10</p>
        <div className="phno container-fluid">
          <input
            type="text"
            className="phno1"
            name="ceo"
            onChange={handleChange}
            placeholder="Company CEO"
            required
          />
        </div>
        <div className="phno container-fluid">
          <input
            type="text"
            className="phno1"
            name="hr"
            onChange={handleChange}
            placeholder="Company HR"
            required
          />
        </div>
        <div className="phno container-fluid">
          <input
            type="text"
            className="phno1"
            name="address"
            onChange={handleChange}
            placeholder="Company Address"
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
          <label htmlFor="fielInput">Upload Logo : </label>
        <input type="file" name="file" className="lname" onChange={handleFileChange}  id="fileInput" />
        
        </div>
        
        <input
          type="submit"
          className="btn-primary btn-lg accbtn"
          value="Create Account"
          name="Log in"
          disabled={disabled}
        />
       
      </form>
    </div>
  );
}

export default Register;
