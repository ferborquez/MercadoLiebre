const express = require("express")
const path = require ("path")
const app = express()
const port = 3020





app.listen(port, ()=> console.log(`el servidor se levanto con exito en http://localhost:${port}`))

app.use(express.static(path.join(__dirname, "public")))

app.get("/",(req,res) => res.sendFile(path.join(__dirname, "views", "home.html")))





