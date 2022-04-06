import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


function Login() {
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
    type: "",
  });

  const history = useHistory();

  const [wrong, setvalue] = useState("");

  function stateChange(event) {
    setformdata({ ...formdata, [event.target.name]: [event.target.value] });
  }

  function submitData(event) {
    event.preventDefault();
    const finaldata = formdata;

    axios
      .post("/login", finaldata, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      .then((response) => {
        var check = response.data.err;


        if (check === "incorrect username!!") {
          setvalue(check);
        } else if (check === "incorrect password!!") {
          setvalue(check);
        }
        else if (check === "student") {
          if (response.data.user.status === "Accpted") {


            history.push("/studentHome");
          } else if (response.data.user.status === "Rejected") {
            setvalue("Your Request Is Rejected By TPO! Kindly Ask Them")
          }
          else {

            setvalue("Your Request is Still Pending, Please Get Approved From TPO")
          }
        } else if (check === "company") {
          history.push("/companyDashboard");
        } else if (check === "tpo") {

          history.push("/tpo")
        }

        // if (formdata.type[0] === "company") {
        //   localStorage.setItem(
        //     "company_id",
        //     response.data.user[0]._id.toString()
        //   );
        //   history.push("/companyDashboard");
        // }

        // if (formdata.type[0] === "student") {
        //   localStorage.setItem(
        //     "student_id",
        //     response.data.user[0]._id.toString()
        //   );
        //   localStorage.setItem(
        //     "student_email",
        //     response.data.user[0].email.toString()
        //   );
        //   history.push("/");
        // }


        // if (formdata.type[0] === "tpo") {
        //   history.push("/tpo");
        // }


      })

      .catch(() => {
        console.log("Data Has not been send, Internal Server Error");
      });
  }
  const { email, password } = formdata;
  return (
    
    <div className="loginform loginbg container-fluid ">
      <div className="loginformout">

        <form className="lform" >
        <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" />
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>

          <h1 className="heading main-heading">Login to The Account</h1>
          <div class="input-group mb-2  ">
            <div class="input-group-prepend">
              <span class="input-group-text" id=""><i class="fas fa-user"></i></span>
            </div>
            <input
              type="text"
              className="form-control  fontawesome-user "
              value={email}
              name="email"
              placeholder="Email "
              onChange={stateChange}
              required
            />
          </div>

          <div class="input-group mu-1">
            <div class="input-group-prepend">
              <span class="input-group-text" id=""><i class="fas fa-lock"></i></span>
            </div>
            <input
              type="password"
              className="form-control "
              value={password}
              name="password"
              placeholder="Password"
              onChange={stateChange}
              required
            />
          </div>
         
          <p className="errstatus">{wrong}</p>

          <div className="option">
            <h5 className="">Login As :</h5>
            <input
              type="radio"
              id="Student"
              className="rbtn1"
              name="type"
              value="student"
              onChange={stateChange}
              required
            />
            <label className="rbtn" htmlFor="Student">Student</label>
            <input
              type="radio"
              id="Company"
              className="rbtn1"
              name="type"
              value="company"
              onChange={stateChange}
              required
            />
            <label className="rbtn" htmlFor="Company">Company</label>
            <input
              type="radio"
              id="Tpo"
              className="rbtn1"
              name="type"
              value="tpo"
              onChange={stateChange}
              required
            />
            <label className="rbtn" htmlFor="Tpo">TPO</label>
            <br />
          </div>

          <input
            type="submit"
            className="btn-primary btn-sm form-control"
            value="Log in"
            name="Log in"
            onClick={submitData}
          />


          <div className="rform ">
            <p className="signup">Need an Account ?</p>
            <div className="form-row">
              <div className="col-lg-6 mb-2">
                <Link to="/registercompany">
                  <button className="btn-primary col-lg-12 btn-sm mr-2 regbtn">Register Company</button>
                </Link>
              </div>
              <div className="col-lg-6 mb-2">
                <Link to="/Studentregister">
                  <button className="btn-primary col-lg-12 btn-sm regbtn">Register Student</button>
                </Link>
              </div>
              {/* <Link to="/registercompany">
                <input
                  type="submit"
                  className="btn-primary  btn-sm regbtn mr-2"
                  value="Register Company"
                  name="Register Company"
                />
              </Link>

              <Link to="/Studentregister">
                <input
                  type="submit"
                  className="btn-primary btn-sm regbtn"
                  value="Register Student"
                  name="Register Student"
                />
              </Link> */}


            </div>

          </div>

        </form>
      </div>

    </div >
  );
}

export default Login;
