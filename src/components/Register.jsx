import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


axios.defaults.withCredentials = true;
function Register() {
  const history = useHistory()
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
      const formData = new FormData();
      formData.append("file", file)
      formData.append("name", finaldata.name);
      formData.append("email", finaldata.email);
      formData.append("phno", finaldata.phno);
      formData.append("ceo", finaldata.ceo);
      formData.append("hr", finaldata.hr);
      formData.append("address", finaldata.address);
      formData.append("password", finaldata.password);

      try {
        await axios.post("/registerCompany", formData, {
          headers: {
            'Content-Type': 'multipart/formdata'
          }

        })
        history.push("/login")




      } catch (err) {
        console.log(err)
      }


    }




  }


  const [disabled, setdisabled] = useState(false)
  const [phonedisp, setphonedisp] = useState("d-none")
  function handleChange(event) {
    if (event.target.name === "phno") {
      if (event.target.value.length !== 10) {
        setdisabled(true)
        setphonedisp("d-inline")

      } else {
        setdisabled(false);
        setphonedisp("d-none")
      }

    }
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }
  function handleFileChange(event) {

    setfile(event.target.files[0])
  }

  const { password, password1 } = formdata;
  return (
    <div className="loginbg">
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
        className="registerform  "
        method="POST"
        onSubmit={submitform}
      >
        <h1 className="heading">Get Registered Your Company to US!</h1>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-building"></i></span>
          </div>
          <input
            type="text"
            className="fname1 form-control"
            name="name"
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-envelope"></i></span>
          </div>
          <input
            type="email"
            className="lname1 form-control"
            name="email"
            onChange={handleChange}
            placeholder="Company Email"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-phone"></i></span>
          </div>
          <input
            type="number"
            className="phno1 form-control"
            name="phno"
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <p className={`errstatus  ${phonedisp}  container-fluid`}>Digits should be equal to 10</p>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-user"></i></span>
          </div>
          <input
            type="text"
            className="phno1 form-control"
            name="ceo"
            onChange={handleChange}
            placeholder="Company CEO"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-user"></i></span>
          </div>
          <input
            type="text"
            className="phno1 form-control"
            name="hr"
            onChange={handleChange}
            placeholder="Company HR"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-location-dot"></i></span>
          </div>
          <input
            type="text"
            className="phno1 form-control"
            name="address"
            onChange={handleChange}
            placeholder="Company Address"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-key"></i></span>
          </div>
          <input
            type="password"
            className="password1 form-control"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="input-group mb-2 container-fluid">
          <div class="input-group-prepend">
            <span class="input-group-text" id=""><i class="fas fa-lock"></i></span>
          </div>
          <input
            type="password"
            className="password1 form-control"
            name="password1"
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="container-fluid logofile">
          <label htmlFor="fielInput">Upload Logo : </label>
          <input type="file" name="file" className="lname form-control" onChange={handleFileChange} id="fileInput" />

        </div>

        <div className="container-fluid">
          <input
            type="submit"
            className="btn-primary btn-lg accbtn mt-3 form-control"
            value="Create Account"
            name="Log in"
            disabled={disabled}
          />
        </div>

      </form>
    </div>
  );
}

export default Register;
