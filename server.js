const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // ⬅️ Required for static path

const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve static files (like login.html, signup.html, profile.html)
app.use(express.static(path.join(__dirname)));  // ⬅️ ADD THIS LINE HERE

// MongoDB connection
mongoose
  .connect("mongodb+srv://Saurabh91tech:Singhsaurabh%40912237@cluster0.rtgbpxs.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use('/api', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
