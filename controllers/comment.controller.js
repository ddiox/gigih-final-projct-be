const Comment = require("../models/comment.model");
const Video = require("../models/video.model");

// READ Comment List by VideoID
const getCommentListByVideoID = async (req, res) => {
  try {
    const videoID = req.params.videoID;
    const comments = await Comment.find(
      { videoID: videoID },
      "username comment timestamp"
    );
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE Submit Comment
const submitComment = async (req, res) => {
  try {
    const { username, comment, videoID } = req.body;
    const timestamp = new Date();

    // Check if the videoID exists
    const existingVideo = await Video.findById(videoID);
    if (!existingVideo) {
      return res.status(404).json({ message: "Video not found" });
    }

    // Create a new comment
    const newComment = new Comment({
      videoID,
      username,
      comment,
      timestamp,
    });

    // Save the comment to the database
    await newComment.save();

    res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", success: false });
  }
};

// READ All Comments for a Video
const getAllCommentsForVideo = async (req, res) => {
  try {
    const { videoID } = req.params;
    const comments = await Comment.find({ videoID }).populate(
      "videoID",
      "_id title description thumbnailUrl"
    );
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// READ Single Comment
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate(
      "videoID",
      "_id title description thumbnailUrl"
    );
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// CREATE Comment
const createComment = async (req, res) => {
  try {
    const { videoID, username, comment, timestamp } = req.body;
    const newComment = new Comment({ videoID, username, comment, timestamp });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// UPDATE Comment
const updateComment = async (req, res) => {
  try {
    const { videoID, username, comment, timestamp } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { videoID, username, comment, timestamp },
      { new: true }
    ).populate("videoID", "_id title description thumbnailUrl");
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(updatedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE Comment
const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndRemove(
      req.params.id
    ).populate("videoID", "_id title description thumbnailUrl");
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getCommentListByVideoID,
  submitComment,
  createComment,
  getAllCommentsForVideo,
  getCommentById,
  updateComment,
  deleteComment,
};
