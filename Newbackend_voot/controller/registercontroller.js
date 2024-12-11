const createUser = require("../models/registerModel");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const files = req.files;

    if (!userData.firstname || !userData.lastname || !userData.dob || !userData.email || !userData.password || !files) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await createUser(userData, files);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerUser;
