import axios from 'axios';
import React from 'react'
import { useHistory} from 'react-router-dom'


function Logoutbtn() {
    const history=useHistory();
    let logout=()=>{
        
        axios.get(`${process.env.REACT_APP_API_CALL}/logout`)
        history.push("/")

    }


  return (
    <div>
        <button className="btn btn-light" onClick={logout}>
                      <b className="lbtn">Logout</b>

                  </button>
    </div>
  )
}
export default Logoutbtn
