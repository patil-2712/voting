const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the folders exist
const ensureFolderExists = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
};

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine the folder based on the field name
    let folder = "uploads/";
    switch (file.fieldname) {
      case "photo":
        folder = "uploads/photos/";
        break;
      case "kycvideo":
        folder = "uploads/kycvideos/";
        break;
      case "kycdocument_1":
        folder = "uploads/kycdocuments_1/";
        break;
      case "kycdocument_2":
        folder = "uploads/kycdocuments_2/";
        break;
      default:
        folder = "uploads/misc/";
    }

    // Ensure the folder exists
    ensureFolderExists(folder);

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // File extension
    cb(null, Date.now() + ext); // Unique filenames
  },
});

// Multer configuration
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB file size limit
}).fields([
  { name: "photo", maxCount: 1 },
  { name: "kycvideo", maxCount: 1 },
  { name: "kycdocument_1", maxCount: 1 },
  { name: "kycdocument_2", maxCount: 1 },
]);

module.exports = upload;
