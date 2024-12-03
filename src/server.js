import express from 'express';
import router from './Routes/Routes.js';

const app = express();

//Middlewares 
app.use(express.json());
app.use('/', router);

//listen 
app.listen(3000, () => console.log('Server is running on port 3000 http://localhost:3000'));