🚀 Overview

Task Manager is a full-stack web application designed to help users manage their tasks efficiently. This project is Dockerized, allowing easy deployment and scalability.
🏗 Tech Stack

Frontend: React.js, Tailwind CSS, Vite

Backend: Node.js, Express.js

Database: MongoDB

Containerization: Docker, Docker Compose
📦 Setup Instructions

1️⃣ Clone the Repository
git clone https://github.com/your-username/Task-Manager-repo.git
cd Task-Manager-repo
2️⃣ Environment Configuration

Create a .env file in the backend directory and set up the following:
PORT=5000
MONGO_URI=mongodb://mongo:27017/taskmanager
JWT_SECRET=your_secret_key
3️⃣ Run the Application with Docker

Ensure you have Docker installed, then run:
docker-compose up --build

4️⃣ Access the Application

Frontend: http://localhost:5173

Backend API: http://localhost:5000/api

MongoDB: mongodb://localhost:27017/taskmanager

🚀 Features

✅ User authentication (JWT-based)
✅ CRUD operations for tasks
✅ Dockerized for easy deployment
✅ REST API with Express.js
✅ MongoDB database with Mongoose ORM

🛠 Troubleshooting

Port Conflict? Check if ports 5173 (frontend) and 5000 (backend) are free.

MongoDB Connection Issues? Ensure MongoDB service is running inside Docker (docker ps).


![Image](https://github.com/user-attachments/assets/51645f80-e631-44a8-9aad-2670eb6c3a11)


