const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const { jwtsecret } = require("../config/secrets");
const auth = require("../middleware/auth");
const User = require("../models/user");

// @route GET api/auth
router.get("/", auth, async (req, res) => {
  console.log("@router GET api/auth");
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route POST api/auth
router.post(
  "/",
  [
    check("email", "Please enter valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array(),
      });
    }
    const { email, password } = req.body;
    console.log("@route POST api/auth");
    console.log(req.body);
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "Invalid Email, try again",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          msg: "Invalid Password, try again",
        });
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, jwtsecret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(error.message);
      res.status(500).json({
        msg: "Server Error",
      });
    }
  }
);

module.exports = router;
