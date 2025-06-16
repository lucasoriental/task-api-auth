# 📝 Task API Auth – Backend Server

Welcome to **Oriental TODO App**, a backend server designed for secure user authentication and efficient task management. This project leverages the best of the JavaScript ecosystem to deliver a scalable, maintainable, and production-ready RESTful API.

---

## 🚀 Technologies Used

- **Node.js** – Fast, event-driven JavaScript runtime for scalable server-side applications  
- **Express.js** – Minimal and flexible web framework for building robust APIs  
- **PostgreSQL** – Powerful open-source relational database for reliable data storage  
- **pg** – PostgreSQL client for Node.js, enabling seamless database integration  
- **jsonwebtoken (JWT)** – Secure authentication using JSON Web Tokens  
- **bcrypt** – Password hashing for enhanced security  
- **dotenv** – Environment variable management for safe configuration  
- **cookie-parser** – Cookie handling middleware for Express  
- **CORS** – Cross-Origin Resource Sharing support for secure API access  

---

## 📦 Project Structure

```
/config      # Environment and database configuration
/controllers # Business logic for users and tasks
/models      # Database queries and data access
/routes      # API endpoints for users and tasks
/middleware  # Authentication and security middleware
```

---

## 🔐 Features

- **User Registration & Login**  
  Secure sign-up and authentication with hashed passwords and JWT-based sessions.

- **Task Management**  
  Create, read, update, and delete tasks, all protected by authentication middleware.

- **Role-based Access**  
  Only authenticated users can access and manage their tasks.

- **Error Handling**  
  Consistent and informative error responses for all endpoints.

---

## 🛠️ Getting Started

1. **Clone the repository**
2. **Install dependencies:**  
   `npm install`
3. **Configure environment variables** in .env
4. **Run the server:**  
   `npm start`

---

## 💡 Why This Stack?

This project is built with simplicity, security, and scalability in mind. By combining Express, PostgreSQL, and JWT, you get a solid foundation for any modern web application backend.

---