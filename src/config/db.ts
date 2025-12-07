import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: `${config.connection_str}`,
});

const sql = (strings: TemplateStringsArray) => strings.join("");

const initDB = async () => {
  try {
    await pool.query(sql`
    CREATE EXTENSION IF NOT EXISTS citext;

        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email CITEXT UNIQUE NOT NULL,
        password TEXT NOT NULL CHECK (LENGTH(password) >= 6),
        phone VARCHAR(20) NOT NULL,
        role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'customer'))
        )`
        
    );
    console.log("table created")
  } catch (error: any) {
    console.error("DB init failed", error.message);
  }
};

export default initDB;
