import express from 'express';
import connect from './Config/db.js';
import { createUser, getAllUsers, deleteUser } from './Controller/UserController.js';



const app = express();

app.use(express.json());

app.post('/users', createUser);

app.delete('/users/:id', deleteUser);

app.get('/users', getAllUsers);


app.listen(3000, () => console.log('Server is running on port 3000 http://localhost:3000'));