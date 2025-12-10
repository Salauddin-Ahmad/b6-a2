import { pool } from "../../config/db";

const getAllUserService = async () => {
  const result = await pool.query(`SELECT id, name, email, phone, role from users`);
  return result;
};

const updateUserService = async () => {};

const deleteUserService = async () => {};

export const userService = {
  getAllUserService,
  updateUserService,
  deleteUserService,
};
