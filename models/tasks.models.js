import pool from "../config/pool.config.js";

export async function getAllTasksModel(data) {
  const { userId } = data;
  try {
    const query = await pool.query(
      "SELECT id, title, description, completed, created_at FROM tasks WHERE user_id = $1",
      [userId]
    );
    return query;
  } catch {
    console.error("Error in Models:", err);
    return res.status(500).json({
      error: "Error while trying to fetching all the tasks",
      details: err.message,
    });
  }
}

export async function createTaskModel(data) {
  const { title, description, completed, userId } = data;
  try {
    const query = await pool.query(
      "INSERT INTO tasks (title, description, completed, user_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, completed, userId]
    );
    return query;
  } catch (err) {
    console.error("Error in Models:", err);
    return res.status(500).json({
      error: "Error while trying to fetching all the tasks",
      details: err.message,
    });
  }
}

export async function updateTaskModel(data) {
  const { id, title, description, completed } = data;
  try {
    const query = await pool.query(
      "UPDATE tasks SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *",
      [title, description, completed, id]
    );
    return query;
  } catch (err) {
    console.error("Error in Models:", err);
    return res.status(500).json({
      error: "Error while trying to fetching all the tasks",
      details: err.message,
    });
  }
}

export async function deleteTaskModel(data) {
  const { id } = data;
  try {
    const query = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    return query;
  } catch (err) {
    console.error("Error in Models:", err);
    return res.status(500).json({
      error: "Error while trying to delete a task",
      details: err.message,
    });
  }
}
