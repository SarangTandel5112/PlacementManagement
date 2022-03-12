const Tpo=require("../Models/Tpo");
class TpoController{
    static getTpoData=(req,res)=>{
        let slen = await Student.find({ status: "accept" });
        slen = slen.length;
        let clen = await company.find();
        clen = clen.length;
        res.json({
          slen: slen,
          clen: clen,
        });
    }

}
app.get("/tpodata", async (req, res) => {
    
  })
module.exports=TpoController;