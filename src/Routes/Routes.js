import {registerUser, loginUser, createUser, getAllUsers, deleteUser, updateUser , getUserById } from "../Controller/UserController.js";
import { getAllPublish, getPublishById, createPublish, updatePublish, deletePublish } from "../Controller/PublishController.js";
import { Router } from "express";
import { auth, isAdmin } from'../Middleware/auth.js'

const router = Router();

//!User routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

//!Publish routes
router.get('/publish', getAllPublish);
router.get('/publish/:id', getPublishById);
router.put('/publish/:id',auth, isAdmin, updatePublish);
router.post('/publish',auth, isAdmin,createPublish);
router.delete('/publish/:id',auth, isAdmin,deletePublish);

export default router;