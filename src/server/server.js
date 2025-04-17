import express from "express";

const app =express()



app.listen(5500, ()=>{
	console.log("Server runinig on Port 5500")
})

export default app