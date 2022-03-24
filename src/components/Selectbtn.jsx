import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

axios.defaults.withCredentials=true;

export const Selectbtn = (props) => {
  const history=useHistory();
  const { onecomp } = useParams();
  let sendplacementstatus =async  (event)=>{
    console.log(event.target.value,onecomp)
    let response = await axios.post("/setplacementstatus",{
      jobid:onecomp,
      studentid:event.target.value
    })
    if(response.data.msg){
      console.log(response.data)
      props.changestatus(true);
      history.push(`/companypost/${onecomp}/studentdetails`)

    }
  }
  return (
    <div>
      
        <button className="btn btn-primary" onClick={sendplacementstatus} value={props.id}>
                   
                      Select                   
                  </button>
                    
    </div>
  )
}
