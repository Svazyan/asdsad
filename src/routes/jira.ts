import express from "express"
import JiraController from "../controller/jira.info"

const jiraRouter = express.Router()

jiraRouter.route("/jiraikner").post(async (req,res,next)=>{
    
    try {
        const response = await JiraController.jiraInfo(req.body)
        res.send(response)
    } catch (e) {
        next(e)
    }
    
} )

export default jiraRouter
