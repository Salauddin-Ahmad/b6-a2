import { pool } from "../../config/db";

const getAllUserService = async () => {
  const result = await pool.query(
    `SELECT id, name, email, phone, role from users`
  );
  return result;
};

const updateUserService = async (
  userId: string,
  payload: { name?: string; email?: string; phone?: string; role?: string }
) => {
  const { name = null, email = null, phone = null, role = null } = payload;

  const result = await pool.query(
    `
    UPDATE users
    SET
      name  = COALESCE($2, name),
      email = COALESCE($3, email),
      phone = COALESCE($4, phone),
      role  = COALESCE($5, role)
    WHERE id = $1
    RETURNING id, name, email, phone, role
    `,
    [userId, name, email, phone, role]
  );

  return result.rows[0];
};

const deleteUserService = async (id: string) => {
  const result = await pool.query(`SELECT * from users WHERE id= $1`, [id]);
  return result;
};

export const userService = {
  getAllUserService,
  updateUserService,
  deleteUserService,
};
