# 💬 Realtime Chat Application

A production-ready full-stack Realtime Chat App built using the MERN stack, designed to demonstrate expertise in web sockets, state management, authentication, and responsive UI. This project emphasizes real-time communication, secure architecture, and scalable code structure—ideal for technical interviews and portfolio demonstrations.

---

## 🚀 Features (In-Depth)

### 🔐 User Authentication (JWT-based)
- Implements secure login and registration using **JWT** and **bcrypt**.
- Stateless authentication enables scalability across distributed systems.
- Middleware-protected routes ensure only authenticated users access private chats.

### 💬 Realtime Messaging (Socket.IO)
- Built using **Socket.IO** for bidirectional, event-driven messaging.
- Messages appear instantly without page reloads, powered by WebSocket technology.
- Socket server handles connection lifecycle, message delivery, and custom events.

### 🟢 Online/Offline Presence
- Tracks user status in real-time using socket connection events.
- Users see live presence updates of other users in their chat list.
- Server maintains an in-memory store of active connections for accuracy.

### 📜 Persistent Chat History
- All messages are stored in **MongoDB**, associated with sender/receiver and timestamps.
- Ensures message history is always accessible—even after logout or refresh.
- Future-proofed for chat pagination or infinite scroll implementation.

### 👀 Typing Indicators
- Displays "user is typing…" via debounced socket events.
- Real-time feedback enriches UX and mimics modern chat apps.

### 🔔 Smart Notifications
- New messages trigger chat previews and unread badges.
- Focus on asynchronous UX, improves responsiveness in multi-chat scenarios.
- Easily extendable to browser push notifications or toast alerts.

### 📁 File & Image Sharing *(Enhanceable Feature)*
- Users can share files (e.g., images, docs) in chat.
- Uses **Multer** for upload handling and optionally **Cloudinary** for CDN hosting.
- File validation, MIME filtering, and size checks ensure safety.

### 🌗 Dark/Light Mode Toggle
- Switch between themes with a UI toggle powered by **Tailwind CSS** and `localStorage`.
- Enhances accessibility and supports user preferences across sessions.

### 📱 Fully Responsive Design
- Built mobile-first with **Tailwind CSS**, ensuring seamless UI on all screen sizes.
- Adjusts layout dynamically for mobile, tablet, and desktop.
- Key layouts include collapsible sidebars, chat list navigation, and bottom nav for mobile.

### ⚙️ Robust Backend API
- RESTful routes using **Express.js**, clean separation of concerns via MVC pattern.
- Custom middleware handles authentication, error management, and file uploads.
- Built for performance, testability, and long-term maintainability.

### 🔧 Scalable Frontend Architecture
- State management using **Zustand** or **Redux Toolkit** for centralized global state.
- Manages auth, socket connection, UI preferences, and chat data independently.
- Modular component structure with reusable UI elements.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Daizy UI
- Tailwind CSS
- Socket.IO Client
- Zustand / Redux Toolkit

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB (with Mongoose)
- JWT (Authentication)
- Multer / Cloudinary (File Uploads)

---

## ⚙️ Getting Started

### Prerequisites
- Node.js
- MongoDB (Local or Atlas)
- npm / yarn

### Clone the Repository

```bash
git clone https://github.com/your-username/realtime-chat-app.git
cd realtime-chat-app
