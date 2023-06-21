const router = require("express").Router();

const {
  home,
  uploadFile,
  showFile,
  fileDelete,
} = require("../controller/fileController");

// home....
router.get("/", home);

// Uploading csv file.....
router.post("/upload", uploadFile);

// to show csv file...
router.get("/show", showFile);

// For deleting csv files...
router.get("/delete/:file", fileDelete);

module.exports = router;
