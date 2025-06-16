import { Router } from "express";

import {
  getAllUsersController,
  loginController,
  registerController,
  deleteUserController,
  logoutUserController,
} from "../controllers/user.controller.js";

import authToken from "../middleware/auth.middleware.js";

const router = Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/getAllUsers", authToken, getAllUsersController);
router.delete("/deleteUser/:id", deleteUserController);
router.get("/logout", logoutUserController);

export default router;
