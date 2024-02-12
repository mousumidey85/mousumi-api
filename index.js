const express = require('express');
const mssql = require('mssql');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3001;

const sqlConfig = require("./config/db.js")

// Middleware to parse JSON requests
app.use(express.json());

// Define routes

// Get all inquiries
app.get('/api/users', async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool.request().query('SELECT * FROM users');
    res.json(result.recordset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Get a specific inquiry by ID
app.get('/api/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('id', mssql.Int, id)
      .query('SELECT * FROM users WHERE user_id = @id');

    if (result.recordset.length === 0) {
      res.status(404).send('Inquiry not found');
    } else {
      res.json(result.recordset[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a new inquiry
app.post('/api/inquiries', async (req, res) => {
  const { title, description } = req.body;
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('title', mssql.NVarChar, title)
      .input('description', mssql.NVarChar, description)
      .query('INSERT INTO enquiries (Title, Description) VALUES (@title, @description); SELECT SCOPE_IDENTITY() AS Id');
    const insertedId = result.recordset[0].Id;
    res.status(201).json({ id: insertedId, title, description });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Update an existing inquiry
app.put('/api/inquiries/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('id', mssql.Int, id)
      .input('title', mssql.NVarChar, title)
      .input('description', mssql.NVarChar, description)
      .query('UPDATE enquiries SET Title = @title, Description = @description WHERE Id = @id');

    if (result.rowsAffected[0] === 0) {
      res.status(404).send('Inquiry not found');
    } else {
      res.json({ id, title, description });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete an inquiry
app.delete('/api/inquiries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('id', mssql.Int, id)
      .query('DELETE FROM enquiries WHERE Id = @id');

    if (result.rowsAffected[0] === 0) {
      res.status(404).send('Inquiry not found');
    } else {
      res.json({ message: 'Inquiry deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
