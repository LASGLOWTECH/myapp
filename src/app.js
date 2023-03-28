const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();
require('dotenv').config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("server is listening at 3000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/PORTFOLIO.html");
});

// app.post("/", (req, res) => {

//     const API_KEY = process.env.API_RANDOM_TOKEN;
//     const ID = process.env.LIST_ID;
//     const SERVER_PREFIX = process.env.API_INDEX;
    
    
    

//     const Name = req.body.Name;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const message = req.body.message;
//     console.log(Name)
//     console.log(message)
//     mailchimp.setConfig({
//         apiKey: API_KEY,
//         server: SERVER_PREFIX,
//     });

//     const run = async () => {
//         const response = await mailchimp.lists.batchListMembers(ID, {
//             members: [

//                 {
//                     email_address: email,
//                     status: "subscribed",
//                     merge_fields: {
//                         NAME: Name,
//                         SUBJECT: subject,
//                         TEXTAREA: message
//                     },
//                 },
//             ],
//         });

//         if (response.error_count) {
//             res.sendFile(__dirname + "/failure.html");
//         } else {
//             res.sendFile(__dirname + "/success.html");
//         }
//     };

//     run();
// });

app.post("/failure", (req, res) => {
    res.redirect("/");
});
