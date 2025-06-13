import {
  getAllUsersModels,
  loginModel,
  registerModel,
  deleteUserModel,
} from "../models/user.models.js";
import jwt from "jsonwebtoken";
import "../config/env.config.js";
import bcrypt from "bcrypt";

export async function getAllUsersController(req, res) {
  try {
    const result = await getAllUsersModels();
    if (!result.rows) return res.send("There are no users in the Database");
    res.status(200).json({ message: result.rows });
    return result;
  } catch (err) {
    throw new Error("Error in Controller: ", err);
  }
}

export async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    const result = await loginModel({ email, password });
    const user = result.rows[0];

    if (user.email !== email) return res.send("Wrong Email");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.send("Wrong Password");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 300,
    });

    return res.json({ message: "User Logged Successfully!", token });
  } catch (err) {
    throw new Error("Error in Controller: ", err);
  }
}

export async function registerController(req, res) {
  const { email, password } = req.body;
  try {
    const passwordEncrypted = await bcrypt.hash(password, 13);

    const result = await registerModel({ email, passwordEncrypted });

    if (!result)
      return res.send("Something went wrong, and user wasn't registered!");

    res.send(`User: ${result.rows[0].email} was registered successfully!`);
    return result;
  } catch (err) {
    throw new Error("Error in Controller: ", err);
  }
}

export async function deleteUserController(req, res) {
  const { id } = req.params;
  try {
    await deleteUserModel(id);
    return res.send("User Deleted");
  } catch (err) {
    throw new Error("Error in Controller: ", err);
  }
}
