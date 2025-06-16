import { Router } from "express";
import {
  getAllTasksController,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/tasks.controller.js";
import authToken from "../middleware/auth.middleware.js";

const router = Router();

router.use(authToken);

router.get("/getAllTasks", getAllTasksController);
router.post("/createNewTask", createTaskController);
router.put("/updateTask", updateTaskController);
router.delete("/deleteTask/:id", deleteTaskController);

export default router;
