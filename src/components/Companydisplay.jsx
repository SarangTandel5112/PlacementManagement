import React from "react";
import Companynavbottom from "./Companynavbottom";
import Header1 from "./Header1";
import Footer from "./Footer";

function Companydisplay() {

  const [file, setFile] = useState();
  function sendfile(event) {
    const data = new FormData();
    data.append("file", file)
    console.log(data);

    axios.post("/sendfile", data)
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

      <div className="">
        <div className="imgout1">
          <img className="companyimg2" alt="company1" src="../../Photos/company6.png" />
        </div>
        <div className="">
          <div className="dbox1" id='' key='' >

            <div className="sbox">
              <b>JobTitle:</b>
            </div>
            <div className="sbox">
              <b>JobDescription:</b>
            </div>
            <div className="sbox">
              <b>Number Of Opening :</b>
            </div>
            <div className="sbox">
              <b>CTC Range :</b>
            </div>
            <div className="sbox">
              <b>Minimum Criteria :</b>
            </div>
            <div className="sbox">
              <b>Job Location :</b>
            </div>
            <div className="sbox">
              <b>Company Website :</b>
            </div>
            <div className="sbox">
              <b>Last Day For Apply : </b>
            </div>
            <div className="sbox">
              <button class="btn btn-success">Apply now</button>
            </div>
          </div>

        </div>


        <Footer />
      </div>
    </div>
  );
}
export default Companydisplay;


