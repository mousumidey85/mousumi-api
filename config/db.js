// SQL Server configuration
module.exports = {
    server: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
      encrypt: false, // Use this if you're on Windows Azure
      trustServerCertificate: true,
    },
  };