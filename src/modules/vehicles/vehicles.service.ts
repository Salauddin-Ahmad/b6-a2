import { pool } from "../../config/db";

const sql = (strings: TemplateStringsArray) => strings.join("");

const registerVehicleService = async (payload: Record<string, unknown>) => {
  const {
    vehicle_name,
    type,
    registration_number,
    daily_rent_price,
    availability_status,
  } = payload;

  const result = await pool.query(
    sql`INSERT INTO vehicles(vehicle_name, type, registration_number, daily_rent_price, availability_status) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [
      vehicle_name,
      type,
      registration_number,
      daily_rent_price,
      availability_status,
    ]
  );

  console.log(result);
  return result;
};

const getAllVehicleService = async () => {
  const result = await pool.query(`SELECT * from vehicles`);
  return result;
};

const getSingleService = async (id: string) => {
  const result = await pool.query(`SELECT * from vehicles WHERE id=$1`, [id]);
  return result;
};

const updateSingleService = async (payload: Record<string, unknown>, id: string) => {
  const {...fields } = payload;

  if (!id) throw new Error("ID is required");

  // If nothing to update, just fetch the record
  if (Object.keys(fields).length === 0) {
    const result = await pool.query(`SELECT * FROM vehicles WHERE id=$1`, [id]);
    return result;
  }

  let setQuery = "";
  const values: any[] = [id];
  let i = 2;

  for (const key in fields) {
    setQuery += `${key} = $${i}, `;
    values.push(fields[key]);
    i++;
  }

  setQuery = setQuery.slice(0, -2); // remove last comma

  const result = await pool.query(
    `UPDATE vehicles SET ${setQuery} WHERE id=$1 RETURNING *`,
    values
  );

  return result;
};



const deleteSingleService = async (id: string) => {
  const result = await pool.query(`SELECT * from vehicles WHERE id=$1`, [id]);
  return result;
};

export const vehicleServices = {
  registerVehicleService,
  getAllVehicleService,
  getSingleService,
  updateSingleService,
  deleteSingleService
};
