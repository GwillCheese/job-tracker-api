# Job Tracker API

Backend API for tracking job applications with JWT authentication and user-owned CRUD for job entries.

## Tech Stack
- Node.js + Express
- Prisma ORM
- PostgreSQL
- JWT authentication

## Local Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file:
   ```bash
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB
   JWT_SECRET=your_jwt_secret
   ```
3. Run migrations (dev):
   ```bash
   npx prisma migrate dev
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

## API Overview
Base URL (local): `http://localhost:5000`

### Auth
- `POST /auth/register`
  - Body: `{ "email": "user@example.com", "password": "password123" }`
- `POST /auth/login`
  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: `{ "token": "..." }`

### Jobs (protected)
All jobs routes require:
```
Authorization: Bearer <token>
```

- `GET /jobs`
  - Query params: `page`, `limit`, `status`, `companyName`, `jobTitle`
- `GET /jobs/:id`
- `POST /jobs`
  - Body: `{ "companyName": "...", "jobTitle": "...", "status": "Applied" }`
- `PATCH /jobs/:id`
- `DELETE /jobs/:id`

## Deployed API
Production URL: `https://your-app.up.railway.app`
