import { Pool } from "pg";
import config from ".";

export const pool = new Pool({
  connectionString: `${config.connection_str}`,
});

export const sql = (strings: TemplateStringsArray) => strings.join("");

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
        )`);

    await pool.query(sql`
    CREATE TABLE IF NOT EXISTS vehicles (

        id SERIAL PRIMARY KEY,
        vehicle_name VARCHAR(100) NOT NULL,
        type VARCHAR(10) NOT NULL
        CHECK (type IN ('car', 'bike', 'van', 'SUV')),
        registration_number VARCHAR(50) NOT NULL UNIQUE,
        daily_rent_price NUMERIC(10, 2) NOT NULL
        CHECK (daily_rent_price > 0),
        availability_status VARCHAR(10) NOT NULL
        CHECK (availability_status IN ('available', 'booked'))
    );


    CREATE TABLE IF NOT EXISTS bookings (

        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES users(id) ON DELETE RESTRICT,
        vehicle_id INT REFERENCES vehicles(id) ON DELETE RESTRICT,
        rent_start_date DATE NOT NULL,
        rent_end_date DATE NOT NULL,
        total_price INTEGER NOT NULL,
        status VARCHAR(20) DEFAULT 'active'
);

`);

    console.log("table created");
  } catch (error: any) {
    console.error("DB init failed", error.message);
  }
};

export default initDB;
