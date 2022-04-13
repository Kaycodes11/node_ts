import { Router } from "express";
import * as TaskController from "../controllers/task.controller";

const router = Router();

// router.route("/tasks/go").get(fn1).post(fn2)

router.get("/tasks", TaskController.getTasks);
router.get("/tasks/count", TaskController.tasksCount);

export default router;
