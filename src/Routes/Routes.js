import { createUser, getAllUsers, deleteUser, updateUser , getUserById } from "../Controller/UserController.js";
import { Router } from "express";

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);

export default router;