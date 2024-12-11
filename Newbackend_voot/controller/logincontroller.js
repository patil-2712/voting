const bcryptjs = require("bcryptjs");
const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Pass@123",
  database: "voterdetails",
  port: 5432,
});

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user exists
    const query = 'SELECT * FROM registration_table WHERE username = $1';
    const result = await pool.query(query, [username]);
    if (result.rows.length === 0) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const user = result.rows[0];

    // Compare the plain password with the hashed password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    // User authenticated successfully
    res.status(200).json({ 
      message: "Login successful", 
      userId: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      dob: user.dob,
      mobileno: user.mobileno,
      altmobileno: user.altmobileno,
      gender: user.gender,
      address: user.address,
      village: user.village,
      taluka: user.taluka,
      district: user.district,
      state: user.state,
      pincode: user.pincode,
      photo: user.photo,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ error: "An error occurred during login", details: error.message });
  }
};

module.exports = loginUser;









