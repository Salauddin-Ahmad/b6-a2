import { pool } from "../../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";

const sql = (strings: TemplateStringsArray) => strings.join("");

const registerUserService = async (payload: Record<string, unknown>) => {
  const { name, email, password, phone, role } = payload;

  const hashedPassword = await bcrypt.hash(password as string, 10);

  const result = await pool.query(
    sql`
    INSERT INTO users(name, email, password, phone, role) VALUES ($1,$2, $3, $4, $5) RETURNING*`,
    [name, email, hashedPassword, phone, role]
  );

  return result;
};

const loginUserService = async (email: string, password: string) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  if (result.rows.length === 0) {
    throw new Error("Invalid email or password");
  }

  const user = result.rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    config.jwtSecret as string,
    { expiresIn: "7d" }
  );

  const { password: _removed, ...safeUser } = user;

  return {
    token,
    user: safeUser,
  };
};


export const authService = {
  registerUserService,
  loginUserService,
};
