// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


app.get("/", (req, res) => {
   return res.status(200).send("Server is up");
});

app.post("/generate", async (req, res) => {
    const { prompt, size } = req.body;
    //    validation
    if (!prompt || !size) {
       return res.status(400).send("Bad Request");
    }
    try {
    //     const response = await openai.images.generate({
    //         prompt,
    //         n: 1,
    //         size,
    //    });
    //    const image_url = response.data.data[0].url;
    const image_url = "https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
       return res.status(200).send({
          src: image_url,
       });
    } catch (error) {
       console.log("Error generating image:", error);
       return res.status(500).send({ error: error.message });
    }
 });

const port = process.env.port || 8200;
app.listen(port,()=> {
    console.log(`Server is listening on port ${port}`);
});