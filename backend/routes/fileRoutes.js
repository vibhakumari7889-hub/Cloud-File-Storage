const express = require("express");
const multer = require("multer");

const {
    upload,
    getFiles,
    removeFile,
    download
} = require("../controllers/fileController");

const router = express.Router();

const uploadMiddleware = multer({
    storage: multer.memoryStorage()
});

// Upload file
router.post(
    "/upload",
    uploadMiddleware.single("file"),
    upload
);

// Get all files
router.get("/", getFiles);

// Download file
router.get(
    "/download/:fileName",
    download
);

// Delete file
router.delete(
    "/:fileName",
    removeFile
);

module.exports = router;