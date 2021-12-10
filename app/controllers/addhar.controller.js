 const bcryppt = require("bcrypt");  
 const request = require('request');
  exports.create = (req, res) => { 
    request.get("https://jsonplaceholder.typicode.com/users",(error,response,body)=>{
     if(error){ 
        res.status(200).send({
            message: "Data Fetched Successfully",
            responsecode : '200',
            data:  error
          });
     } 
     res.send(body) 
     
    //  console.dir(JSON.stringify(body));
 })
    

//   request.post({
//       "headers":{"content-type":"application/json",'Authorization': 'Bearer ffa1cabb-90e9-44b1-bdf9-dd90c775b183'},
//       "url":"https://api.dev.kychub.com/kyc/initiate-aadhaar",
//       "body":JSON.stringify({
//           "aadhaar_no":"562630976018"
//       }) 

//   },(error,res,body)=>{
//       if(error){
//         return console.dir(error); 
//       }
//       console.dir(JSON.parse(body));
//   })
  };
  exports.initiateaadhaar = (req, res) => { 
      console.log(JSON.stringify(req.headers.token));
      let headertoken = req.headers.token; 
      let addhar  = req.body.aadhaar_no; 
        request.post({
      "headers":{"content-type":"application/json",'Authorization': 'Bearer'+ headertoken},
      "url":"https://api.dev.kychub.com/kyc/initiate-aadhaar",
      "body":JSON.stringify({
          "aadhaar_no":addhar
      })  
  },(error,response,body)=>{
      if(error){
        return console.dir(error); 
      }
      res.send(body) 
  })
  };

 exports.verifyaadhar = (req, res) => { 
  // console.log(JSON.stringify(req.headers.token));
 let headertoken = req.headers.token;
 
  let addhar  = req.body.aadhaar_no; 
    request.post({
  "headers":{"content-type":"application/json",'Authorization': 'Bearer'+ headertoken},
  "url":"https://api.dev.kychub.com/kyc/submit-aadhaar",
  "body":JSON.stringify({
    "share_code": req.body.share_code,
    "aadhaar_otp": req.body.aadhaar_otp,
    "reference_id": req.body.reference_id
  })  
},(error,response,body)=>{
  if(error){
    return console.dir(error); 
  }
  res.send(body) 
})
 };