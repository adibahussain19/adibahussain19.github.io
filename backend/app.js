const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const writingRoutes = require("./routes/writingRoutes");
const projectRoutes = require("./routes/projectRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI.replace('${DB_PASSWORD}', process.env.DB_PASSWORD);


// MongoDB connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//   mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.error("MongoDB connection error:", err));

// Sample route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Routes
app.use("/writing", writingRoutes);
app.use("/projects", projectRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
