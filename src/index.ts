import express from 'express';
import cors from 'cors';

import initializeRoutes from './router';

const app = express();
const port = 3000;
app.use(cors({
    origin:"*"
}));





app.use(express.json());
initializeRoutes(app);

app.listen(port, () => {
    console.log("server runing 3000");
    
  `http://localhost:${port}`
});


