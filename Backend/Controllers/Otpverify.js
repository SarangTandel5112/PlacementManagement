const Otp = require("../Models/Otp");
var otpGenerator = require('otp-generator');
const accountSid = process.env.TWILLIO_SID;
const authToken = process.env.TWILLIO_AUTH;

class Otpverify {
    static otpverify = async (req, res) => {
        try {
            console.log(accountSid,authToken)
            console.log(process.env.EMAIL);
            const otp = otpGenerator.generate(6, { digits: true, lowerCaseAlphabets: false, alphabets: false, upperCaseAlphabets: false, upperCase: false, specialChars: false });
            const client = require('twilio')(accountSid, authToken);
            console.log(otp, req.body.number);
            const message = await client.messages
              .create({
                from: '+14154814311',
                body: `Ala Taro OTP le ${otp}`,
                to: "+91" + req.body.number
              })
            console.log(message);
            console.log(otp);
            const no = await Otp.find({ number: req.body.number })
            if (no.length === 0) {
                const newotp = new Otp({
                    number: req.body.number,
                    otp: otp
                })
                newotp.save();
            }
            else {
                no[0].otp = otp;
                no[0].save();
            }
        }
        catch (error) {
            console.log("error in otp", error);
        }
    }

    static checkotp = async (req, res) => {
        try {
            const { phno, otp } = req.body;
            const no = await Otp.find({ number: phno })
            if(otp==no[0].otp){
                res.send({status:true})
            }
            else{
                res.status(404).send({status:false})
            }            
        }
        catch (error) {
            console.log("error in otp check",error);
        }
    }
}

module.exports = Otpverify;