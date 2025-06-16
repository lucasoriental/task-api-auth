import {
  getAllTasksModel,
  createTaskModel,
  updateTaskModel,
  deleteTaskModel,
} from "../models/tasks.models.js";

export async function getAllTasksController(req, res) {
  const userId = req.userId;
  try {
    const result = await getAllTasksModel({ userId });
    return result, res.send(result.rows);
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to fetching all the tasks",
      details: err.message,
    });
  }
}

export async function createTaskController(req, res) {
  const userId = req.userId;
  const { title, description, completed } = req.body;
  try {
    const result = await createTaskModel({
      title,
      description,
      completed,
      userId,
    });
    return result, res.send(result.rows[0]);
  } catch {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to Create a new Task",
      details: err.message,
    });
  }
}

export async function updateTaskController(req, res) {
  const { id, title, description, completed } = req.body;
  try {
    const result = await updateTaskModel({
      id,
      title,
      description,
      completed,
    });
    return result, res.send(result.rows[0]);
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to Update the Task",
      details: err.message,
    });
  }
}

export async function deleteTaskController(req, res) {
  const { id } = req.params;
  try {
    const result = await deleteTaskModel({ id });
    return result, res.send(result.rows[0]);
  } catch (err) {
    console.error("Error in Controller:", err);
    return res.status(500).json({
      error: "Error while trying to delete the task",
      details: err.message,
    });
  }
}
