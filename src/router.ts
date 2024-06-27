import {Express} from "express"
import gitRouter from "./routes/git"
import jiraRouter from "./routes/jira";
console.log("ertetetetetetete");

const initializeRoutes = (app: Express) => {
    app.use('/git', gitRouter);
    app.use('/jira',jiraRouter)
};

export default initializeRoutes;