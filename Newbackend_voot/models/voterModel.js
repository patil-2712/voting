const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "Pass@123",
    database: "voterdetails",
    port: 5432,
});

const insertVoterDetails = async (data) => {
    const client = await pool.connect(); // Acquire a client from the pool
    try {
        await client.query("BEGIN"); // Start transaction
        const query = `
        INSERT INTO voter_details (
            employment_status,
            job_role,
            industry,
            experience,
            spouse_name,
            dependent_members,
            education,
            institute,
            certifications
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING id; -- Return the entire row to verify
        `;

        const values = [
            data.employment_status || null,
            data.job_role || null,
            data.industry || null,
            data.experience || null,
            data.spouse_name || null,
            data.dependent_members || null,
            data.education || null,
            data.institute || null,
            data.certifications || null
        ];

        const result = await client.query(query, values);

        // Commit the transaction after successful query execution
        await client.query("COMMIT");

        console.log("Inserted data:", result.rows[0]); // Debug inserted data
        return result.rows[0]; // Return the inserted row
    } catch (error) {
        await client.query("ROLLBACK"); // Rollback in case of an error
        console.error("Error inserting voter details:", error); // Log the error
        throw error;
    } finally {
        client.release(); // Release the client back to the pool
    }
};

module.exports = { insertVoterDetails };
