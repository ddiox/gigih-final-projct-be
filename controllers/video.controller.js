const Video = require("../models/video.model");

// READ Video Thumbnail List
const getVideoThumbnails = async (req, res) => {
  try {
    const videos = await Video.find({}, "_id title description thumbnailUrl");
    res.status(200).json(videos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// READ Single Video
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE Video
const createVideo = async (req, res) => {
  try {
    const { title, description, url, thumbnailUrl } = req.body;
    const newVideo = new Video({
      title,
      description,
      url,
      thumbnailUrl,
    });
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE Video
const updateVideo = async (req, res) => {
  try {
    const { title, description, url, thumbnailUrl } = req.body;
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        url,
        thumbnailUrl,
      },
      { new: true }
    );
    if (!updatedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json(updatedVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE Video
const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndRemove(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    res.status(200).json({ message: "Video deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getVideoThumbnails,
  getVideoById,
  createVideo,
  updateVideo,
  deleteVideo,
};
