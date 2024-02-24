import express from "express"
import os from "os"

let app = express()
app.disable("x-powered-by")

app.get("/", (req, res) => {
    res.send(`<h2>VERSION 2:Hi There from ${os.hostname}</h2>`)
})

const port = 8080

app.listen(port, () => console.log(`listening onn port ${port}`))