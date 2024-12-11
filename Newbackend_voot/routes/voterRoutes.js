// const express = require("express");
// const { saveVoterDetails } = require("../controller/voterController");
// const router = express.Router();


// router.post("/", saveVoterDetails);

// module.exports = router;


const express = require("express");
const { saveVoterDetails } = require("../controller/voterController");

const router = express.Router();

// Route to save voter details
router.post("/save", saveVoterDetails);

module.exports = router;
