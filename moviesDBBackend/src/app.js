const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

require("../database/db.js");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobileNo: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
});

const user = mongoose.model("users", userScheme);

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.urlencoded());

// POST API to register user
app.post("/api/users", async (req, res) => {
  try {
    const { mobileNo } = req.body;

    // 2. Check if mobile number already exists
    const existingUser = await user.findOne({ mobileNo });

    // 3. If mobile number exists, stop registration
    if (existingUser) {
      return res.status(409).json({
        message: "Mobile number already registered",
      });
    }
    const newUser = await user.create(req.body);

    res.status(200).json({
      message: "User created successfully",
      dataset: newUser,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// POST API to Login user

/* POST: Login user */
app.post("/api/users/login", async (req, res) => {
  try {
    // 1. Get mobile number and password from frontend
    const { mobileNo, password } = req.body;

    // 2. Find user using mobile number
    const existingUser = await user.findOne({ mobileNo: mobileNo });

    // 3. Check whether user exists
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 4. Compare password
    if (existingUser.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    // 5. Login successful: send user details
    res.status(200).json({
      message: "Login successful",
      user: {
        name: existingUser.name,
        email: existingUser.email,
        mobileNo: existingUser.mobileNo,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// DELETE: Delete user data (placeholder)
app.delete("/api/users/:userid", async (req, res) => {
  try {
    await user.findByIdAndDelete(req.params.userid);
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.listen(3300, () => {
  console.log(`Example app listening on port 3300`);
});
