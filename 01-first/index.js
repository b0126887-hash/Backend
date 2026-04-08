import express from "express";

const app = express()

const PORT = 3000

app.get("/first", (req, res) => {
    res.send("<h1>http://localhost:3000/first</h1>")
})

app.get("/second", (req, res) => {
    res.send("<h1>http://localhost:3000/second</h1>")
})

app.listen(PORT, () => {
    console.log("🌍 Server is Running")
})