import React from 'react'
import { Link } from "react-router-dom";

export default function Loginbtncomp() {
  return (
    <div>
       <Link to="/login">
        <button className="btn btn-light ">
                   
                      <b className="lbtn">Login</b>
                   
                  </button>
                    </Link>
    </div>
  )
}
