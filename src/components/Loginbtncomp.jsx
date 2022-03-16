import React from 'react'
import { Link } from "react-router-dom";

export default function Loginbtncomp() {
  return (
    <div>
        <button className="btn btn-light ">
                    <Link to="/login">
                      <b className="lbtn">Login</b>
                    </Link>
                   
                  </button>
    </div>
  )
}
