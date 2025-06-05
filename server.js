const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://Saurabh91tech:Singhsaurabh%40912237@cluster0.rtgbpxs.mongodb.net/userDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB Atlas connected successfully"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// User model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model('User', UserSchema);

// Register route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
