require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");
const videoRouter = require("./routes/video.route");
const productRouter = require("./routes/product.route");
const commentRouter = require("./routes/comment.route");

const app = express();
const port = process.env.PORT;

// Connect to Database
connectDatabase();

// Use JSON Binding Middleware
app.use(express.json());

// Use Cors Middleware
app.use(cors());

// Use Permissions Policy Middleware
app.use((req, res, next) => {
  res.setHeader("Permissions-Policy", "fullscreen=(), geolocation=()");
  next();
});

// Use Router
app.use(videoRouter);

app.use(productRouter);

app.use(commentRouter);

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
