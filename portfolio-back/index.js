const auth = require("./Auth.js");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const appMail = express();
const appFetch = express();

appFetch.post("/api/fetch", (req, res) => {
  const con = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio"
  });

  con.connect(err => {
    if (err) return err;
  });

  con.query("SELECT * FROM pr", function(error, results, fields) {
    if (error) throw error;
    res.send(JSON.stringify(results));
  });
});

appMail.use(bodyParser.json());
appMail.use(bodyParser.urlencoded({ extended: false }));

appMail.post("/api/form", (req, res) => {
  const msg = `Name: ${req.body.name} \n\nEmail: ${req.body.email}\n\n`;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: auth.getUser(),
      pass: auth.getPass()
    }
  });
  let mailOptions = {
    from: req.body.email,
    to: auth.getUser(),
    subject: req.body.subject,
    text: msg + req.body.message
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return console.log(err);
    console.log("Message sent: %s", info.message);
    console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    return "hello";
  });
});

const MAIL_PORT = process.env.PORT || 3001;
const FETCH_PORT = process.env.PORT || 3002;

appMail.listen(MAIL_PORT, () => {
  console.log(`Server for appMail listening in port ${MAIL_PORT}`);
});

appFetch.listen(FETCH_PORT, () => {
  console.log(`Server for appMail listening in port ${FETCH_PORT}`);
});
