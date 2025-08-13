# Tranquilo Frontend

This is the frontend for the Tranquilo mental wellness application, built with React and Vite.

## Features

- User authentication (signup/login)
- Chat interface with AI (Botpress integration)
- Feedback form
- Responsive UI with Tailwind CSS
- Toast notifications

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Hot Toast

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add:
     ```
     VITE_BACKEND_URL=http://localhost:5400
     ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

## Folder Structure

- `src/Components/` — React components
- `src/Context/` — Context providers
- `public/` — Static assets

---

# Tranquilo Backend

This is the backend for the Tranquilo mental wellness application. It provides RESTful APIs for user authentication and feedback submission.

## Features

- User registration and login with hashed passwords
- Feedback submission and storage
- MongoDB database integration
- CORS and JSON body parsing

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- bcrypt for password hashing
- dotenv for environment variables

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment variables:**
   - Create a `.env` file in the `Backend/` directory.
   - Add:
     ```
     MONGODB_URI=your_mongodb_connection_string
     PORT=5400
     ```

3. **Run the server:**
   ```sh
   npm start
   ```

4. **API Endpoints:**
   - `POST /api/users/signup` — Register a new user
   - `POST /api/users/login` — Login user
   - `POST /api/feedback` — Submit feedback

## Folder Structure

- `Controllers/` — Route handlers
- `Models/` — Mongoose models
- `Routers/` — Express routers
- `DB/` — Database connection

---
