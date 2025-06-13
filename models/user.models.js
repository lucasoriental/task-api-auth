import pool from "../config/pool.config.js";

export async function getAllUsersModels() {
  try {
    const query = await pool.query("SELECT fullName, email FROM users");
    return query;
  } catch (err) {
    console.error("Error in Model:", err);
    return res.status(500).json({
      error: "Error while fetching all the Users",
      details: err.message,
    });
  }
}

export async function loginModel(data) {
  const { email } = data;
  try {
    const query = await pool.query(
      "SELECT email, password FROM users WHERE email = $1",
      [email]
    );
    return query;
  } catch (err) {
    console.error("Error in Model:", err);
    return res
      .status(500)
      .json({ error: "Error while trying to logIn", details: err.message });
  }
}

export async function registerModel(data) {
  const { fullName, email, password } = data;
  try {
    const query = await pool.query(
      "INSERT INTO users (fullName, email, password) VALUES ($1, $2, $3)",
      [fullName, email, password]
    );
    return query;
  } catch (err) {
    console.error("Error in Model:", err);
    return res.status(500).json({
      error: "Error while trying to Register a new User",
      details: err.message,
    });
  }
}

export async function deleteUserModel(data) {
  const { id } = data;
  try {
    const query = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return query;
  } catch (err) {
    console.error("Error in Model:", err);
    return res.status(500).json({
      error: "Error while trying to delete the user",
      details: err.message,
    });
  }
}
