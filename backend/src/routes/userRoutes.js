import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();

// Routes for GET, POST, PUT, DELETE

router.post('/', UserController.createUser);

router.post('/:id');

router.put('/', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

router.get('/', UserController.getAllUsers);

export default router;

