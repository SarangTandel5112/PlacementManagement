import React from "react";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";
import Footer from "./Footer";

function Companydisplay() {
 

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


