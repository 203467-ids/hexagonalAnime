import { Pool } from "pg";

const config = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  database: "dbanime",
  password: "203467",
};

export const pool = new Pool(config);
