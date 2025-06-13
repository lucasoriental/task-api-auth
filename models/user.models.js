import pool from "../config/pool.config.js";

export async function getAllUsersModels() {
  try {
    const query = await pool.query("SELECT * FROM users");
    return query;
  } catch (err) {
    console.error("Some Error: ", err);
    throw new Error(err);
  }
}

export async function loginModel(data) {
  const { email } = data;
  try {
    const query = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return checkQuery;
  } catch (err) {
    throw new Error("Some Error: ", err);
  }
}

export async function registerModel(data) {
  const { email, hash } = data;
  try {
    const query = await pool.query(
      "INSERT INTO users (fullName, email, password) VALUES ('Lucas Santos', $1, $2)",
      [email, hash]
    );
    return query;
  } catch (err) {
    console.error("Some Error: ", err);
    throw new Error(err);
  }
}

export async function deleteUserModel(id) {
  try {
    const query = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return query;
  } catch (err) {
    throw new Error("Error in Model: ", err);
  }
}
