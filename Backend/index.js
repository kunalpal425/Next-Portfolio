import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables FIRST, before other imports
dotenv.config({ path: path.join(__dirname, ".env.local") });

import express from "express";
import cors from "cors";
import { connectDB } from "./lib/mongodb.js";
import Contact from "./models/Contact.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Async app startup
(async () => {
    try {
        // Connect to MongoDB on startup
        await connectDB();
        console.log("✅ MongoDB Connected");

        // Routes
        app.post("/api/contact", async (req, res) => {
            try {
                const { name, email, description } = req.body;

                if (!name || !email || !description) {
                    return res.status(400).json({
                        success: false,
                        message: "All fields are required",
                    });
                }

                const contact = await Contact.create({
                    name,
                    email,
                    description,
                });

                return res.status(201).json({
                    success: true,
                    data: contact,
                    message: "Message sent successfully",
                });
            } catch (error) {
                console.error("Contact error:", error);
                return res.status(500).json({
                    success: false,
                    message: error.message || "Server error",
                });
            }
        });

        app.get("/api/contact", async (req, res) => {
            try {
                const contacts = await Contact.find().sort({ createdAt: -1 });

                return res.status(200).json({
                    success: true,
                    data: contacts,
                });
            } catch (error) {
                console.error("Fetch error:", error);
                return res.status(500).json({
                    success: false,
                    message: error.message || "Server error",
                });
            }
        });

        app.listen(PORT, () => {
            console.log(`✅ Backend server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error.message);
        process.exit(1);
    }
})();
