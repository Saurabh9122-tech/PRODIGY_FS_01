# 🔐 User Authentication System - Prodigy FS Internship Task 01

A secure and modern user authentication system built with **Node.js**, **Express**, **MongoDB**, and a frontend built using **HTML, CSS, and JavaScript**. This project is a submission for the **Prodigy InfoTech Full Stack Web Development Internship (Task 01)**.

# 🚀 Features

- ✅ User registration with email and password
- ✅ Secure login using JWT tokens
- ✅ Protected profile route with token-based access
- ✅ Frontend with modern HTML, CSS, and vanilla JavaScript
- ✅ MongoDB Atlas connection for storing user data
- ✅ API built with Express and Node.js
- ✅ CORS and JSON middleware configured
- ✅ Token stored in browser localStorage
- ✅ Logout functionality


# 📸 Screenshots

### 🧾 Login Page
![Screenshot 2025-06-10 111943](https://github.com/user-attachments/assets/816a777e-bc7d-4d0c-9519-38dea1477621)


### 📝 Registration Page
![Register Screenshot](<Screenshot 2025-06-10 112002.png>)

### 🙍‍♂️ Profile Page
![Profile Screenshot](<Screenshot 2025-06-10 112037.png>)

# 🎬 Task Demo Video on YouTube
  [Watch Now](https://youtu.be/PdZ-Pfm3_Ao)
# 🛠️ Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JSON Web Token (JWT), bcryptjs
- **Frontend:** HTML5, CSS3, JavaScript (vanilla)
- **Database:** MongoDB Atlas


# 📋 Prerequisites

Make sure the following are installed:

- Node.js (v14 or later)
- npm
- MongoDB Atlas account


# ⚙️ Getting Started

## 1. Clone the repository
[git clone](https://github.com/Saurabh9122-tech/PRODIGY_FS_01.git)  
cd PRODIGY_FS_01
## **2. Install dependencies**
npm install

## **3. Setup environment variables**
Create a .env file in the root folder and add:  
MONGODB_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key

## **4. Run the server**

node server.js

## **5. Open http://localhost:5000 in your browser to see the application.**

# 🌐 **API Endpoints**
POST /api/register  
Registers a new user.  
{  
  "email": "saurabh@gmail.com",  
  "password": "123456789"  
}  
POST /api/login  
Logs in a user and returns a JWT token.    
{  
  "email": "saurabh@gmail.com",  
  "password": "123456789"  
}  
GET /api/profile  
Protected route;  
requires Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDdiZDhmMzg5ZjAwMjc0OTY3ODBjOCIsImVtYWlsIjoidGVzdHVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDk1MzIxMDYsImV4cCI6MTc0OTUzNTcwNn0.n5hsNkuDw_fHAfNHgXpxpzwuNYDq8_yDqQzoE102qMU in header.  

Returns user data.  

# 📁 **Project Structure**

PRODIGY_FS_01/  
├── routes/  
│   └── auth.js           
├── models/  
│   └── User.js           
├── public/  
│   ├── login.html  
│   ├── signup.html  
│   ├── profile.html  
│   └── ( inline styles)  
├── server.js            
├── package.json     
└── .env   

# 🔐 **Security**
Passwords are hashed using bcryptjs before storing in MongoDB  

JWT tokens are used for authentication and stored in localStorage  

Routes are protected using token-based middleware  

CORS and input validation implemented  

# 🧪 **Testing** ( via Thunder Client / Postman)
Use Thunder Client in VS Code  
Set headers:  
Content-Type: application/json  
Authorization: Bearer   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NDdiZDhmMzg5ZjAwMjc0OTY3ODBjOCIsImVtYWlsIjoidGVzdHVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3NDk1MzIxMDYsImV4cCI6MTc0OTUzNTcwNn0.n5hsNkuDw_fHAfNHgXpxpzwuNYDq8_yDqQzoE102qMU  Test routes /api/register, /api/login, /api/profile  

# 📤 **Deployment**
This project can be deployed to Render, Heroku, or Railway. Ensure you set:  
MONGODB_URI as environment variable  
JWT_SECRET for token signing  

# 👤 **Author**
**Saurabh Kumar**
GitHub:<u>[@Saurabh kumar](https://github.com/Saurabh9122-tech/)</u>   
LinkedIn:<u>[Saurabh Kumar](www.linkedin.com/in/saurabh-kumar-9999s/)</u>   
Project: Prodigy InfoTech Full Stack Web Dev Internship – Task 01    
# 📝 **License**
This project is [MIT](https://github.com/Saurabh9122-tech/PRODIGY_FS_01/blob/main/LICENSE) licensed.  

# 🙏**Acknowledgements**
Prodigy InfoTech Internship Team  
[Express.js Guide](https://www.geeksforgeeks.org/node-js/express-js/)  
[JWT & Authentication Tutorials](https://www.geeksforgeeks.org/json-web-token-jwt/)    
[MongoDB Documentation](https://www.mongodb.com/docs/)    
