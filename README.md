# InvestDhan  

*InvestDhan* is a next-generation investment platform designed for all types of investors. It provides diverse opportunities in startups, luxury assets, real estate, franchises, and trading—all in one place.  

---

## ✨ Features  

✅ *Multi-Asset Investments* – Startups, Real Estate, Luxury Items, Franchises, and Trading.  
📊 *User Dashboard* – Track investments, performance, and portfolio allocation.  
📈 *Real-Time Data* – Live market insights for informed decisions.  
🛡 *Secure & Scalable* – Robust security and future-ready architecture.  
⚡ *MERN Stack* – High-performance React frontend + Node.js/Express backend.  

---

## 🛠 Tech Stack  

| *Category*       | *Technologies Used*               |  
|--------------------|-----------------------------------|  
| *Frontend*       | React.js, Redux, Tailwind CSS     |  
| *Backend*        | Node.js, Express.js               |  
| *Database*       | MongoDB (Atlas or Local)          |  
| *Authentication* | JWT (JSON Web Tokens)             |    

---

## 🚀 Installation  

### Prerequisites  
- Node.js (v16+) & npm/yarn installed  
- MongoDB (local or cloud Atlas cluster)  

### Steps to Run Locally 


1. Clone the repository and install dependencies:
bash
git clone https://github.com/your-username/InvestDhan.git
cd InvestDhan

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


2. Set up environment variables:
bash
# Create .env file for backend
echo "MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000" > server/.env


3. Run the application:
bash
# Start backend (from server directory)
cd server
npm start

# In new terminal, start frontend (from client directory)
cd ../client
npm start


Access the Application  
Backend: http://localhost:5000  
Frontend: http://localhost:3000

Troubleshooting  
If MongoDB connection fails, verify your connection string in .env  
If React app doesn't load, ensure:  
- Backend is running  
- CORS is properly configured  
- No port conflicts
