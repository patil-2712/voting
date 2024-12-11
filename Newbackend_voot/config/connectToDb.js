const { Client } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "Pass@123",
  port: 5432
};

// Function to create the database if it doesn't exist
const createdatabase = async () => {
  const client = new Client(config);
  try {
    await client.connect();
    const dbExistsQuery = "SELECT 1 FROM pg_database WHERE datname='voterdetails'";
    const res = await client.query(dbExistsQuery);

    if (res.rows.length === 0) {
      await client.query("CREATE DATABASE voterdetails");
      console.log("Database created.");
    } else {
      console.log("Database already exists.");
    }
  } catch (err) {
    console.error("Error during database creation:", err);
  } finally {
    await client.end();
  }
};

// Function to create tables
const createtables = async () => {
  const client = new Client({ ...config, database: "voterdetails" });
  try {
    await client.connect();

    // Corrected Registration_Table with all fields
    const registerTable = `
      CREATE TABLE IF NOT EXISTS Registration_Table (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100),
        lastname VARCHAR(100),
        dob DATE,
        email VARCHAR(100) UNIQUE NOT NULL,
        mobileno VARCHAR(15),
        altmobileno VARCHAR(15),
        gender VARCHAR(10),
        address TEXT,
        village VARCHAR(100),
        taluka VARCHAR(100),
        district VARCHAR(100),
        state VARCHAR(100),
        pincode VARCHAR(10),
        languages TEXT[],
        "terms" BOOLEAN,
        username VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `;

    // Corrected Files_Table with additional fields
    const filesTable = `
      CREATE TABLE IF NOT EXISTS Files_Table (
        id SERIAL PRIMARY KEY,
        reg_id INT REFERENCES Registration_Table(id) ON DELETE CASCADE,
        photo VARCHAR(255),
        kycvideo VARCHAR(255),
        kycdocument_1 VARCHAR(255),
        kycdocument_2 VARCHAR(255),
        uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const voterdetails = `
      CREATE TABLE IF NOT EXISTS voter_details (
        id SERIAL PRIMARY KEY,
        employment_status VARCHAR(50),
        job_role VARCHAR(100),
        industry VARCHAR(100),
        experience VARCHAR(20),
        spouse_name VARCHAR(100),
        dependent_members INTEGER,
        education VARCHAR(100),
        institute VARCHAR(100),
        certifications VARCHAR(255)
      );
    `;

    // Create tables in the database
    await client.query(registerTable);
    await client.query(filesTable);
    await client.query(voterdetails);
    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error during table creation:", err);
  } finally {
    await client.end();
  }
};

// Setup database and tables
const setupDatabase = async () => {
  await createdatabase();
  await createtables();
};

setupDatabase();
