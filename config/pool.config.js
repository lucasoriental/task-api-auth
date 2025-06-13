import { Pool } from "pg";
import "./env.config.js";

const PGHOST = process.env.PGHOST;
const PGDATABASE = process.env.PGDATABASE;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

const pool = new Pool({
  connectionString: URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
