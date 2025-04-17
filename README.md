# 📚 Online Course Platform

A full-stack web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). This platform displays a list of courses, allows users to enroll, and provides navigation to other essential pages like About, Blogs, Contact, Signup, and Login.

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Screenshot](![Screenshot (820)](https://github.com/user-attachments/assets/8dce3555-a007-442f-b9a0-80f95eca94ff)
)

### 📚 Courses Page
![Courses Screenshot](![Screenshot (821)](https://github.com/user-attachments/assets/4ca4b79e-960c-449b-aeba-2aa98be9027e)
)
### 📚 Blog Page
![Blog Screenshot](![Screenshot (822)](https://github.com/user-attachments/assets/24084990-8735-4960-9175-f25e1e8ec421)
)

### 🔐 Signup/Login Page
![Auth Screenshot](![Screenshot (823)](https://github.com/user-attachments/assets/cc11f79d-cde4-48ed-b739-ccd72160914f)
)

---

## 🚀 Features

- ⚛️ **Frontend:** React + Tailwind CSS for responsive UI
- 🌐 **Backend:** Node.js & Express.js RESTful API
- 🗃️ **Database:** MongoDB for storing course data
- 🔁 **Routing:** React Router for client-side navigation
- 📦 **API Integration:** Axios for REST API communication
- ✅ **Enroll Button:** Triggers success alert on click
- 🔧 **Reusable Components:** Navbar, Footer
- 📄 **Pages:** Home, About, Blogs, Courses, Contact, Signup, Login

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React.js
- React Router DOM
- Axios
- Tailwind CSS

### 🔹 Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- CORS

---

## 📁 Folder Structure

mern-course-platform/ ├── backend/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── server.js │ └── .env ├── frontend/ │ ├── public/ │ │ └── _redirects │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── App.js │ │ └── index.js ├── README.md └── package.json

yaml
Copy
Edit

---

## 📦 Installation & Setup

### 🔹 Backend

1. Navigate to backend folder:
   ```bash
   cd backend
Install backend dependencies:

bash
Copy
Edit
npm install
Create .env file in backend:

ini
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Start backend server:

bash
Copy
Edit
npm run dev
🔹 Frontend
Navigate to frontend folder:

bash
Copy
Edit
cd frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Start React frontend:

bash
Copy
Edit
npm start
🧪 Sample API Routes

Endpoint	Method	Description
/api/courses	GET	Fetch all courses
/api/courses/:id	GET	Fetch a single course
/api/courses	POST	Add a new course
🌐 Deployment
✅ Frontend (React)
Deploy using Netlify or Vercel

Important: Add a _redirects file in public/ folder for SPA routing:

bash
Copy
Edit
/*    /index.html   200
✅ Backend (Node.js / Express)
Deploy using Render, Railway, or Vercel (Serverless)

👩‍💻 Author
Khushboo Kumari

📧 khushbooranjan8252@gmail.com.com

🌐 LinkedIn: (https://www.linkedin.com/in/khushboo-kumari-23814225b/)
