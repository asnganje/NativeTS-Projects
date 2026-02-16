import express from "express"
import { log } from "node:console"

const app = express()
app.get("/", (req, res)=> {
  res.send("<h1>Hello from server</h1>")
})
const port = 3000
app.listen(port, ()=> {
  console.log(`Server is listening on port ${port}`);
  
})

