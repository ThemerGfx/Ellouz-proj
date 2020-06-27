const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { createServer } = require("http");
const cors = require("cors");
const nodeMailer = require("nodemailer");
const mongoose = require("mongoose");
const Prospect = require("./server/models/Prospect.model");
const axios = require("axios");
const router = express.Router();
const app = express();
const prospectRoute = require("./server/routes/prospect.routes");
const memberRoute = require("./server/routes/member.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;
const db =
  "mongodb+srv://everest-db:everest-db@everest-db-5ixk7.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {
    console.log("Database connected sucessfully !");
  },
  (error) => {
    console.log("Database could not be connected : " + error);
  }
);
app.use("/prospect", prospectRoute);
app.use("/members", memberRoute);
// require("dotenv").config();
// const publicPath = path.join(__dirname, "..", "public");
// app.use(express.static(publicPath));
// axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     var users = res.data
//     console.log(users)
//     User.collection.insertMany(users, (err, rs) => {
//       if (err) {
//         console.log("error")
//       }
//       console.log(rs.insertedCount + "document inserted")
//     })
//   })
// const users = [
//   {
//     firstname: "mohamed",
//     lastname: "ellouze",
//     email: "dfsf@sfs.com",
//     region: "dole",
//     club: "dole"
//   },
//   {
//     firstname: "mohamed",
//     lastname: "ellouze",
//     email: "dfsf@sfs.com",
//     region: "dole",
//     club: "dole"
//   }
// ]
// User.collection.insertMany(users, (err, rs) => {
//   if (err) {
//     console.log("error")
//   }
//   console.log(rs.insertedCount + "document inserted")
// })

// app.get("/users", (req, res) => {
//   console.log("getting all books");
//   User.find((err, users) => {
//     if (err) {
//       res.send("error has occured");
//     } else {
//       console.log(users);
//       res.send(users);
//     }
//   });
// });
// app.get("/user/:id", (req, res) => {
//   User.findOne({
//     _id: req.params.id
//   }).exec((err, user) => {
//     if (err) {
//       console.log("errror")
//     }
//     res.json(user)
//   })
// })
// app.post("/user", (req, res) => {
//   var newUser = new User();
//   newUser.firstname = req.body.firstname
//   newUser.lastname = req.body.lastname
//   newUser.email = req.body.email
//   newUser.phone = req.body.phone
//   newUser.region = req.body.region
//   newUser.club = req.body.club
//   newUser.save((err, user) => {
//     if (err) {
//       console.log("error saving user")
//     } else {
//       console.log(user)
//       res.send(user)
//     }
//   })

// })

//send e-mail
app.post("/api/form", (req, res) => {
  console.log(req.body);
  nodeMailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>contact Details</h3>
    <ul>
    <li>first Name : ${req.body.firstName}</li>
    <li>last Name : ${req.body.lastName}</li>
    <li>Telephone : ${req.body.phone}</li>
    <li>Email : ${req.body.email}</li>
    <li>Region : ${req.body.region}</li>
    <li>Club : ${req.body.club}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
    let transporter = nodeMailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "mohamed.ellouze21@gmail.com",
        pass: "samiranajib000",
      },
    });
    let mailOptions = {
      from: req.body.email,
      to: "mohamed.ellouze21@gmail.com",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: ", info.message);
      console.log("Message URL : ", nodeMailer.getTestMessageUrl(info));
      console.log("email sent !!!");
    });
  });
});

//connect to heroku
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
