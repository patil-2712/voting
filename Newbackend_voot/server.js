// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const registerRoutes = require("./routes/register");
// const voterRoutes = require("./routes/voterRoutes");

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

// // Mount routes
// app.use("/api", registerRoutes);

// // Routes
// app.use("/api/voter_details", voterRoutes);

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });




const express = require("express");
const nodemailer = require('nodemailer');
const cors = require("cors");
const bodyParser = require("body-parser");
const registerRoutes = require("./routes/register");
const voterRoutes = require("./routes/voterRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use("/api", registerRoutes);
app.use("/api/voter_details", voterRoutes);

// Start server
const PORT = process.env.PORT || 5001; // Use 5001 if 5000 is unavailable

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
