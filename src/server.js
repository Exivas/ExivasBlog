import express from 'express';
import router from './Routes/Routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: '*',
    credentials: true
}));


//Middlewares 
app.use(express.json());
app.use('/', router);


//listen 
app.listen(3000, () => console.log('Server is running on port 3000 http://localhost:3000'));