# Week 15 Live 1 - Docker, Express, Prisma Example

This project is a simple Node.js backend using Express and Prisma, containerized with Docker. It demonstrates how to set up a REST API with a PostgreSQL database using Prisma ORM.

## Features
- Express server with basic health check and user signup
- Prisma ORM for database access
- Docker support for easy deployment

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Run with Docker:**
   ```bash
   docker build -t backend .
   docker run -p 3000:3000 -e DATABASE_URL="<your_postgres_url>" backend
   ```

4. **API Endpoints:**
   - `GET /` — Health check
   - `POST /` — Create a new user (expects `email` and `name` in JSON body)

## Notes
- Make sure to provide your own `DATABASE_URL` when running the Docker container.
- No `.env` file is included; environment variables should be passed at runtime.

---

For any questions, feel free to open an issue or reach out.

