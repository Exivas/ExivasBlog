import express from 'express';
import router from './Routes/Routes.js';

const app = express();
app.use(express.json());
app.use('/', router);



app.listen(3000, () => console.log('Server is running on port 3000 http://localhost:3000'));