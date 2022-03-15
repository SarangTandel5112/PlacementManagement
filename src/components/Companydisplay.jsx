import React, { useState } from "react";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";
import Footer from "./Footer";
import axios from "axios";

function Companydisplay() {
  const [file,setFile]=useState();
  function sendfile(event){
    const data=new FormData();
    data.append("file",file)
    console.log(data);

    axios.post("/sendfile",data)
  }
  return (
    <div>
      <Header1 />
      {/* <form action="">
        <label>File</label>
        <input type="file" id="file" accept=".jpg" onChange={event => {
          const file=event.target.files[0];
          setFile(file);
        }}/>

      </form>
      <button onClick={sendfile}>send</button> */}
      <Companynavbottom />


      
      <Footer />
    </div>
  );
}
export default Companydisplay;


