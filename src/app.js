

// require express, body-parser, request, https




const express= require ("express");
const bodyparser= require("body-parser");
const request= require("request");
const https= require("https");


 const app= express();
 require('dotenv').config();

// use to display static css page styling
app.use(express.static("public"))

// use body parser to pass data in your app
app.use(bodyparser.urlencoded({extended:true}))

// get the sign in website by using app get method
app.get("/", (req, res)=>{ 
    res.sendFile(__dirname + "/PORTFOLIO.html");
    
})


// use app.post to post the data in your website
app.post("/", (req, res)=>{
//  var Name= req.body.Name;
//  var email= req.body.email;
//  var subject=  req.body.subject;
//  var message=  req.body.message;
 
//  console.log(Name);


//  using mailchimp to arrange your data
//  const data = {
//     members:[{email_address:email, 
//      status:"subscribed",
//     merge_fields:{ 
//      NAME:Name, 
//      SUBJECT:subject,
//      MESSAGE:message,} }]
// };

//  convert your javascript object above to a JSON FORMAT
//  const jsonData=JSON.stringify(data);
//  console.log(jsonData);

//  const key=process.env.API_RANDOM_TOKEN;
 
// const url="https://us11.api.mailchimp.com/3.0/lists/9ff7bb9af5";


// const options= {
//            method: "POST", 
//            auth:"austinosaz: key" }
//            console.log(key)
         

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

    // });
// When the failure wbsite   loads a button would redirect you to te signup page
//     app.post("/failure", (req, res)=>{
//         res.redirect("/")})
//  });
request.write(jsonData);
request.end();




})







 app.listen(process.env.PORT ||3000, ()=>{
    console.log("server is running on port 3000 ")
    
 });
