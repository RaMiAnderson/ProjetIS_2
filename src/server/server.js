import express from "express"
import dataDb from "./models/db.model.js"
const app =express()



app.listen(5500, ()=>{
	console.log("Server runinig on Port 5500")
})

