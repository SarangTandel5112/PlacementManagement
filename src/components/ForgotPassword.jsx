import React, { useState } from "react";
import axios from "axios";

function Forgotpassword() {
    const [formdata, setformdata] = useState({
        email: "",
        type: "",
    });
    const { email, type } = formdata;

    function stateChange(event) {
        setformdata({ ...formdata, [event.target.name]: event.target.value })
    }

    function submitData(event){
        
    }

    return (
        <div className="loginform loginbg container-fluid ">
            <div className="loginformout">
                <form className="lform" >
                    <h1 className="heading main-heading">Enter Your Email</h1>
                    <div class="input-group mb-2 ">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id=""><i class="fas fa-envelope"></i></span>
                        </div>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Email"
                            value={email}
                            name="email"
                            onChange={stateChange}
                            required
                        />
                    </div>
                    <div className="option">
                        <h5 className="">Change Password of :</h5>
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
                        <br />
                    </div>
                    <input
                        type="submit"
                        className="btn-primary btn-sm form-control"
                        value="Change Password"
                        name="Log in"
                        onClick={submitData}
                    />

                </form>
            </div>

        </div >
    )


}

export default Forgotpassword;
