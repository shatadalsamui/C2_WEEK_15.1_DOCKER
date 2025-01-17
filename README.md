# week-15-live-1

This project is a simple Node.js/TypeScript app set up for Docker demonstrations.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app locally:
   ```bash
   npm run dev
   ```

3. To build and run with Docker (from this directory):
   ```bash
   docker build -t week-15-live-1 .
   docker run -p 3000:3000 week-15-live-1
   ```

- The app will be available at [http://localhost:3000](http://localhost:3000) if it listens on port 3000.

## Project Structure

- `src/` - Application source code
- `prisma/` - Database schema and migrations (if used)
- `Dockerfile` - Docker setup
- `package.json` - Project dependencies and scripts

---

Feel free to modify and experiment with Docker features using this project.

