import express from"express";
import { studentRouter } from "./routes/students.js";
import dotenv from "dotenv"

dotenv.config()
const PORT=process.env.PORT

const app =express()
app.use(express.static("express"))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("nejighugfchu")
})

app.use("/all/student",studentRouter)
app.listen(PORT,()=>console.log(`server started localhost:${PORT}`))


// const currentDir=path.join(__dirname,"express")
// console.log(currentDir)
//const secret="hey i'm from new file"

// fs.writeFile(`${currentDir}/express.txt`,secret,(err)=>{
//     if (err) {
//         console.log(err)
        
//     } else {
//         console.log("file created")
//     }
// })


// createConnection()
// .then(()=>console.log("connection called"))
// .catch((error)=>console.log(error))
// app.get("/static",(req,res)=>{
//     res.sendFile(path.join(__dirname,"express/express.txt"))

// })
 // app.post("/student",(request,res)=>{
//     const data ={
//         name:request.body.name,
//         school:request.body.school,
//         gender:request.body.gender,
//         yearsOfExperience:request.body.yearsOfExperience,
//         id:request.body.id,
//     }
//     student.push(data)
//     res.send(student)
// })


//app.listen(9000,()=>console.log(`server start localhost:9000`))

// const sum =(num1,num2)=>{
//     return num1+num2
// }

// const process =require("process")
// console.log(process)

// console.log(process.title)

// const fs=require("fs")

// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     console.log(data)
// })

// let date= new Date()
// console.log(date)

// const os=require("os")

// console.log("Os version",os.version())


// const express =require("express")
// const app=express()
// const PORT=9000

 



