const express = require("express");
const commentController = require("../controllers/comment.controller");

const router = express.Router();

// GET Comment List by VideoID
router.get(
  "/videos/:videoID/comments",
  commentController.getCommentListByVideoID
);

// CREATE Submit Comment
router.post("/submit-comment", commentController.submitComment);

// READ All Comments for a Video
router.get(
  "/videos/:videoID/all-comments",
  commentController.getAllCommentsForVideo
);

// READ Single Comment
router.get("/comments/:id", commentController.getCommentById);

// CREATE Comment
router.post("/comments", commentController.createComment);

// UPDATE Comment
router.put("/comments/:id", commentController.updateComment);

// DELETE Comment
router.delete("/comments/:id", commentController.deleteComment);

module.exports = router;
