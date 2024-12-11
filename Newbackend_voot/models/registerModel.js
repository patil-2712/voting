const bcryptjs = require("bcryptjs")
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Pass@123",
  database: "voterdetails",
  port: 5432,
});

const createUser = async (userData, files) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const saltRound = 5;
    const hashedPasswod = await bcryptjs.hash(userData.password, saltRound);

    // Insert user data into Registration_Table
    const userQuery = `
      INSERT INTO Registration_Table 
        (firstname, lastname, dob, email, mobileno, altmobileno, gender, address, village,
        taluka, district, state, pincode, languages, terms,  username, password) 
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) 
      RETURNING id;
    `;
    const userValues = [
      userData.firstname,
      userData.lastname,
      userData.dob,
      userData.email,
      userData.mobileno,
      userData.altmobileno,
      userData.gender,
      userData.address,
      userData.village,
      userData.taluka,
      userData.district,
      userData.state,
      userData.pincode,
      userData.languages ? `{${userData.languages}}` : '{}',
      userData.terms, 
      userData.username,
      // userData.password,
      hashedPasswod
    ];
    const userResult = await client.query(userQuery, userValues);
    const regId = userResult.rows[0].id;

    // Insert file paths into Files_Table
    const filesQuery = `
      INSERT INTO Files_Table 
        (reg_id, photo, kycvideo, kycdocument_1, kycdocument_2) 
      VALUES 
        ($1, $2, $3, $4, $5);
    `;
    const fileValues = [
      regId,
      files.photo[0]?.filename || null,
      files.kycvideo[0]?.filename || null,
      files.kycdocument_1?.[0]?.filename || null,
      files.kycdocument_2?.[0]?.filename || null,
    ];


    await client.query(filesQuery, fileValues);
    await client.query("COMMIT");
    return { message: "User registered successfully", regId };
  } 
    catch (error) {
      await client.query("ROLLBACK");
      throw error;
  } 
    finally {
      client.release();
  }
};

module.exports = createUser;
