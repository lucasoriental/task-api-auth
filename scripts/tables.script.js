import pool from "../config/pool.config.js";
import "../config/env.config.js";

async function userTable() {
  try {
    const result = await pool.query(`
    DROP TABLE IF EXISTS users;
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";

    CREATE TABLE users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        fullName VARCHAR(255) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
  )
`);
    if (!result) return res.send("Tabela não foi Criada");
    return res.send("Tabela foi Criada com Sucesso!");
  } catch (err) {
    throw new Error(err);
  } finally {
    pool.end();
  }
}

async function tasksTable(_, res) {
  try {
    const result = await pool.query(`
    DROP TABLE IF EXISTS tasks;

    CREATE TABLE tasks (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(200) NOT NULL,
        description VARCHAR(300),
        completed BOOLEAN DEFAULT false,
        user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
  )
`);
    if (!result) return res.send("Tabela não foi Criada");
    return res.send("Tabela foi Criada com Sucesso!");
  } catch (err) {
    throw new Error(err);
  } finally {
    pool.end();
  }
}
