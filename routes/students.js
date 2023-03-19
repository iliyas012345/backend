import express from "express"
import{client} from "../db.js"
import { ObjectId } from "../db.js"

const router=express.Router()


router.get("/:id",async(req,res)=>{
    const {id}=req.params
    console.log(req.params)
    const student=await(await client)
    .db("guvi")
    .collection("students")
    .findOne({_id:new ObjectId(id)})
    res.status(200).send(student)
})

router.get("/",async(req,res)=>{
    console.log(req.query)
    const studentsData= await (await client)
    .db("guvi")
    .collection("students")
    .find(req.query)
    .toArray()
    res.send (studentsData)
})

router.post("/",async (req,res)=>{
    const newData=req.body
    const result=await (await client)
   .db("guvi")
    .collection("students")
    .insertOne(newData)
    res.status(201).send(result)

    
})

router.put("/:id",async (req,res)=>{
    const {id}=req.params
    const updatedStudent=req.body
    console.log(req.body)
    const result =await (await client)
    .db("guvi")
    .collection("students")
    .updateOne({_id: new ObjectId(id)},{$set:updatedStudent})
    res.status(200).send(result)
})

export const studentRouter=router