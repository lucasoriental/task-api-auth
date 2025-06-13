import {
  getAllUsersModels,
  loginModel,
  registerModel,
  deleteUserModel,
} from "../models/user.models.js";
import jwt from "jsonwebtoken";
import "../config/env.config.js";
import bcrypt from "bcrypt";

export async function getAllUsersController(_, res) {
  try {
    const result = await getAllUsersModels();
    if (!result.rows) return res.send("There are no users in the Database");
    res.status(200).json({ message: result.rows });
    return result;
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while fetching all the Users",
      details: err.message,
    });
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
    console.error("Error in Controller:", err);
    return res
      .status(500)
      .json({ error: "Error while trying to logIn", details: err.message });
  }
}

export async function registerController(req, res) {
  const { fullName, email, password } = req.body;
  try {
    const passwordEncrypted = await bcrypt.hash(password, 13);
    console.log(fullName, email, password, passwordEncrypted);
    const result = await registerModel({
      fullName,
      email,
      password: passwordEncrypted,
    });
    console.log(result);
    if (!result)
      return res.send("Something went wrong, and user wasn't registered!");
    res.send(`User: was registered successfully!`);
    return result;
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to Register a new User",
      details: err.message,
    });
  }
}

export async function deleteUserController(req, res) {
  const { id } = req.params;
  try {
    const result = await deleteUserModel({ id });
    if (result.rows[0]) return res.send("User not deleted");
    return res.send("User Deleted");
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to delete the user",
      details: err.message,
    });
  }
}
