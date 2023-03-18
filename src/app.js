
// require express, body-parser, request, https

const express= require ("express");
const bodyparser= require("body-parser");
const request= require("request");
const https= require("https");


 const app= express();
 const mailchimp = require("@mailchimp/mailchimp_marketing");
 require('dotenv').config();

// use to display static css page styling
app.use(express.static("public"))

// use body parser to pass data in your app
app.use(bodyparser.urlencoded({extended:true}))

// get the sign in website by using app get method
app.get("/", (req, res)=>{ 
    res.sendFile(__dirname + "/PORTFOLIO.html");
    
})




 app.listen(process.env.PORT ||3000, ()=>{
    console.log("server is running on port 3000 ")
    
 });



// use app.post to post the data in your website
app.post("/", (req, res)=>{
 var Name= req.body.Name;
 var email= req.body.email;
 var subject=  req.body.subject;
 var message=  req.body.message;
 
 console.log(Name);


//  const key=process.env.API_RANDOM_TOKEN;
//  const ID= process.env.LIST_ID;

console.log(process.env.API_RANDOM_TOKEN);
// mail chimp auth
 mailchimp.setConfig({
  apiKey: "dfb9dfbc45265613af9f692d274281ed;",
  server: "us11",
});


// //  convert your javascript object above to a JSON FORMAT


const run = async () => {  
  const response = await mailchimp.lists.batchListMembers(" 333afc14d1", {
      members: [
        {email_address:email, 
          status:"subscribed",
         merge_fields:{ 
          NAME:Name, 
          SUBJECT:subject,
          TEXTAREA:message,}
  }],

  });

  if (response.error_count) {
      res.sendFile(__dirname + "/failure.html");
  } else {
      res.sendFile(__dirname + "/success.html");
  }
};

run();
   

// //  using mailchimp to arrange your data
 


//  const request= https.request( url, options, (response)=>{
//     // if page is successful show success website
//     console.log(response)
//     if(response.statusCode === 200){
//         res.sendFile( __dirname + "/success.html")
//     }
//     // else show failure website
//     else{res.sendFile(__dirname+ "/failure.html")}
//     response.on("data", (data)=> {
//         console.log(JSON.parse(data));

//     });
// // When the failure wbsite   loads a button would redirect you to te signup page
//     app.post("/failure", (req, res)=>{
//         res.redirect("/")})
//  });

// request.write(jsonData);
// request.end();




})

app.post("/failure", (req, res) => {
    res.redirect("/");
});



