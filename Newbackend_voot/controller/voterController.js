// const { insertVoterDetails } = require("../models/voterModel");

// const saveVoterDetails = async (req, res) => {
//     try {
//         const voterData = req.body;

//         // Insert into the database
//         const result = await insertVoterDetails(voterData);
//         console.log(result)
//         res.status(201).json({ success: true, message: "Voter details saved successfully..!", id: result.id });
//     } catch (error) {
//         console.error("Error saving voter details:", error.message);
//         res.status(500).json({ success: false, message: "Failed to save voter details" });
//     }
// };

// module.exports = { saveVoterDetails };



const { insertVoterDetails } = require("../models/voterModel");

const saveVoterDetails = async (req, res) => {
  try {
    const voterData = req.body;

    // Validate required fields
    if (!voterData.employment_status || !voterData.job_role) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Insert data into the database
    const result = await insertVoterDetails(voterData);

    res.status(201).json({
      success: true,
      message: "Voter details saved successfully..!",
      id: result.id,
    });
  } catch (error) {
    console.error("Error saving voter details:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to save voter details. Please try again.",
    });
  }
};

module.exports = { saveVoterDetails };
