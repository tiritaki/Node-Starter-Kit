const express = require("express");
const app = express()

app.get("/love", (req, res) => {res.send("This is a love response " + req.query.who)})
app.get("/node", (req, res) => {res.send("This is a node response")})

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!')
})