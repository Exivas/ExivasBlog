import { createUser, getAllUsers, deleteUser, updateUser , getUserById } from "../Controller/UserController.js";
import { getAllPublish, getPublishById, createPublish, updatePublish, deletePublish } from "../Controller/PublishController.js";
import { Router } from "express";

const router = Router();

//!User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

//!Publish routes
router.get('/publish', getAllPublish);
router.get('/publish/:id', getPublishById);
router.put('/publish/:id', updatePublish);
router.post('/publish', createPublish);
router.delete('/publish/:id', deletePublish);

export default router;