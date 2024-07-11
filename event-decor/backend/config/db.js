import { Pool } from 'pg';

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "eventdb",
  password: "6plle2nmfr4m",
  port: 1234,
});

async function query(text, params) {
    const res = await pool.query(text, params);
    return res;
}

export default { query };
