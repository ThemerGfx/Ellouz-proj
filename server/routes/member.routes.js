const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const member = require("../models/Member.model");
router.use(cors());
process.env.SECRET_KEY = "secret";

router.route("/create").post((req, res, next) => {
  const today = new Date();
  const memberData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    region: req.body.region,
    club: req.body.club,
    password: req.body.password,
    created: today,
  };
  console.log(memberData);

  member
    .findOne({
      email: req.body.email,
    })
    .then((element) => {
      console.log(element);
      if (!element) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          memberData.password = hash;
          member
            .create(memberData)
            .then((element) => {
              res.json({ status: element.email + "  registered!!" });
            })
            .catch((err) => {
              res.send("error" + err);
            });
        });
      } else {
        res.json({ error: "Member already exists" });
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
  // member.create(req.body, (error, data) => {
  //   if (error) {
  //     return next(error);
  //   } else {
  //     console.log(data);
  //     res.json(data);
  //   }
  // });
});

router.route("/login").post((req, res, next) => {
  member
    .findOne({
      email: req.body.email,
    })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        } else {
          res.json({ error: "Password does not exist" });
        }
      } else {
        res.json({ error: "Memeber does not exist" });
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});
router.route("/profile").get((req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  member
    .findOne({
      _id: decoded._id,
    })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("Member does not exist");
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});
// router.route('/').get((req, res) => {
//     user.find((error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })

router.route("/edit/:id").get((req, res) => {
  adherant.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:id").put((req, res, next) => {
  member.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

router.route("/delete/:id").delete((req, res, next) => {
  member.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
