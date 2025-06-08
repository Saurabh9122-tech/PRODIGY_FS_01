const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/auth'); // <-- your auth logic

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Serve frontend files like login.html, signup.html, profile.html
app.use(express.static(path.join(__dirname)));

// ✅ MongoDB Connection
mongoose
  .connect("mongodb+srv://Saurabh91tech:Singhsaurabh%40912237@cluster0.rtgbpxs.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Routes
app.use('/api', authRoutes); // All login/register/profile routes come from /routes/auth.js

// ✅ Fallback route (optional): if user tries unknown path
app.use((req, res) => {
  res.status(404).send("❌ Page not found");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
