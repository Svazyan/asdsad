import express from "express"
import GitController from "../controller/git.controller";

const gitRouter  = express.Router()

gitRouter.post("/esim" ,  async (req,res,next)=>{
   try {
    const response  = await GitController.gitIfno(req.body)
    res.send(response)
   } catch (e) 
   }
    
})


export default gitRouter
