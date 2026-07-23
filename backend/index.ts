import express from "express";
import prisma from "./database.ts";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/api/health", async (req, res) => {
    try {
        await prisma.$queryRaw`SELECT 1`;

        res.json({
            success: true,
            backend: "Running",
            database: "Connected",
            timestamp: new Date()
        });
    } catch {
        res.status(500).json({
            success: false,
            database: "Disconnected"
        });
    }
});