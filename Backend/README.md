# Backend - Contact Form

This is the backend for the portfolio contact form using MongoDB and Express.js.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   Edit `.env.local` and add your MongoDB URI:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/next-portfolio?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=development
   ```

3. **Run the backend server:**
   ```bash
   node index.js
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Save a new contact message to MongoDB

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "description": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "data": {...},
  "message": "Message sent successfully"
}
```

### GET /api/contact
Retrieve all contact messages

**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

## Frontend Integration

The frontend's contact form sends requests to `/api/contact` endpoint. If running both frontend (Next.js) and backend (Express) on the same machine, ensure they use different ports.

- Frontend: `http://localhost:3000` (Next.js)
- Backend: `http://localhost:5000` (Express)
