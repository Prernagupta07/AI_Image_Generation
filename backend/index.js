// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();


app.get("/", (req, res) => {
   return res.status(200).send("Server is up");
});

const port = process.env.port || 8200;
app.listen(port,()=> {
    console.log(`Server is listening on port ${port}`);
});