
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

app.get("/", (req, res) => {
    return res.status(200).send("Server is up");
});

// Image generation endpoint
app.post("/generate", async (req, res) => {
    const { prompt } = req.body;
    
    // Validation
    if (!prompt) {
        return res.status(400).send("Bad Request - Missing Prompt");
    }
    
    try {
        // Fetch image from Unsplash
        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${prompt}&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        
        if (!response.ok) {
            throw new Error("Failed to fetch image from Unsplash");
        }
        
        const data = await response.json();
        const image_url = data.urls.regular;

        return res.status(200).send({
            src: image_url,
        });

    } catch (error) {
        console.error("Error generating image:", error);
        
        // Fallback to placeholder if Unsplash API fails
        return res.status(200).send({
            src: "https://via.placeholder.com/600",
            message: "Default placeholder image returned",
        });
    }
});

const port = process.env.PORT || 8200;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

