const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Use MongoDB Atlas URL here
mongoose.connect('mongodb+srv://Saurabh91tech:Singhsaurabh%40912237@cluster0.rtgbpxs.mongodb.net/auth_demo?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
