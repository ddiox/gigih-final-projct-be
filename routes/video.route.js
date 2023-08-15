const express = require("express");
const videoController = require("../controllers/video.controller");

const router = express.Router();

// READ Video Thumbnail List
router.get("/videos", videoController.getVideoThumbnails);

// READ Single Video
router.get("/videos/:id", videoController.getVideoById);

// CREATE Video
router.post("/videos", videoController.createVideo);

// UPDATE Video
router.put("/videos/:id", videoController.updateVideo);

// DELETE Video
router.delete("/videos/:id", videoController.deleteVideo);

module.exports = router;
