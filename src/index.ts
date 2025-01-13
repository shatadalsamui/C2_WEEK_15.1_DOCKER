import { PrismaClient } from "@prisma/client"; // Import Prisma ORM client
import express from "express"; // Import Express framework

const app = express(); // Create Express app instance
app.use(express.json()); // Enable JSON body parsing middleware

const client = new PrismaClient(); // Instantiate Prisma client

app.get("/", (req, res) => { // Define GET route at root
    res.json({
        message: "Healthy server" // Respond with health message
    })
})

app.post("/", async (req, res) => { // Define POST route at root
    await client.user.create({ // Create new user in DB
        data: {
            email: req.body.email, // Set email from request body
            name: req.body.name // Set name from request body
        }
    })

    res.json({
        message: "Done signing up!" // Respond with signup confirmation
    })
})

app.listen(3000); // Start server on port 3000
