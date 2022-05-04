import * as express from "express";
import * as Auth from "../controllers/auth.controller"

const router = express.Router();

router.get('/auth', Auth.getUsers);
router.get('/auth/:userId', Auth.getUserById);
router.post('/auth/seed', Auth.seedUsers);
router.post('/auth/signup', Auth.signUp);
router.put('/auth/:userId', Auth.updateUser);
router.delete('/auth/:userId', Auth.deleteUser);

export default router