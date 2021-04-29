const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { jwtsecret } = require("../config/secrets");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// @route POST api/users
router.post(
  "/",
  [
    check("name", "Enter your name").not().isEmpty(),
    check("email", "Please enter valid email").isEmail(),
    check("password", "Please enter a valid password").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        error: errors.array(),
      });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          msg: "User already exists",
        });
      }

      user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

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
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route PUT api/users
router.put("/addcoin/:id", auth, async (req, res) => {
  const { coin } = req.body.data;
  console.log("🚀 ~ file: users.js ~ line 64 ~ router.put ~ coin", coin);
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { coins: coin } },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route PUT api/users
router.put("/removecoin/:id", auth, async (req, res) => {
  const { coin } = req.body.data;
  console.log("🚀 ~ file: users.js ~ line 81 ~ router.put ~ coin", coin);
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $pull: { coins: coin },
    });
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
