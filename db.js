const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool();

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS studentData  (
      id SERIAL PRIMARY KEY,
      registration_id VARCHAR(50),
      student_name VARCHAR(100),
      email VARCHAR(100),
      department VARCHAR(100),
      address TEXT,
      phone_number VARCHAR(15),
      pincode VARCHAR(10)
    );
  `;
  try {
    await pool.query(query);
    console.log("✅ 'students' table is ready.");
  } catch (err) {
    console.error("❌ Error creating table:", err);
  }
};

module.exports = { pool, createTable };
