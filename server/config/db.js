const { Client } = require('pg');
require('dotenv').config();

// Database connection configuration using environment variables
const config = {
    user: process.env.DB_USER,           // Database username
    host: process.env.DB_HOST,           // Database host
    database: process.env.DB_NAME,       // Database name
    password: process.env.DB_PASSWORD,   // Database password
    port: process.env.DB_PORT,           // Database port
    ssl: {
        rejectUnauthorized: process.env.DB_SSL === 'true', // SSL setting based on environment variable
        ca: `-----BEGIN CERTIFICATE-----\nMIIEQTCCAqmgAwIBAgIUOIruDtNeVRb3fCnXrKqXbpMf6QUwDQYJKoZIhvcNAQEM\nBQAwOjE4MDYGA1UEAwwvYzEwMzk1YWYtNDcxOC00NGE5LTg0NDctNDI1MGE1OThl\nOTcyIFByb2plY3QgQ0EwHhcNMjQwOTA0MTcyMDQ2WhcNMzQwOTAyMTcyMDQ2WjA6\nMTgwNgYDVQQDDC9jMTAzOTVhZi00NzE4LTQ0YTktODQ0Ny00MjUwYTU5OGU5NzIg\nUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANpGG/u9\nEPFfM0fsxzje5ZSxbGpoEW3UelqBIhVdtkoEFHWF+t2pZEyDipxzSyupTQuE2laC\nmCfdCL89/CnA7aQMyl5nowS5xe9m+QU2/DeVvT7LRHgiYgJgi19dXLWKl39lm9BK\nL8KPduJuMuXZFvcv96dPL6RBSBrBnBEwv8JFv2ecMv6J9ixvShoSqUy2Vg1RW1lU\ncmoEZfYF264/5WIgICaSe/Fhhffdflick+cB5xVZ0IxZEkX0k/BrLFf1JlhpwYml\nyru87mu0EZoXoWvk8D4Hamz8EniVL+OPujIBR6b11vSu+1itJCVsajkyesxy4y7d\nEg5qjfwPFpl+tyLDhYxtK/0CV7gsSE3zcTmhq7P8Wj42Ekt9E+INSnaUl5lalp7i\nPgKMuklj8EXJGEF5RhtUDwe7BRl7AEQddT8R6q9VEXkFU9APGpQbdbENah+6W7wl\nhucIl72shlDeE9UnbpU7f078q4fZynquhWCbbcOq7b9w8YfQ8sgKR5W0+wIDAQAB\noz8wPTAdBgNVHQ4EFgQUhMaqLqwI71pW3CNDol/hMorXKmEwDwYDVR0TBAgwBgEB\n/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBALUET73hMq45qSw8\nRsGVKyNy3FQ+J1UwbLoYHimInujJmjruw4jullMK1CmKh0K33zoNPv3iOY9IexaS\nmHy48iGbNS6aZcb7wKmZmZFL5EBBuU3ZjVrHYIhuu08PN1SKud9kjuFKN+PEea4N\nEttIXoGHH9s7jrQtv7Q8kcAdudYShLyubTV6QzGAOoWVPUQxSCk30p2x8yOeFY4T\nFMS8a9WCmrrMTKe4wPBOxF/7Jyy7fFleDR4OfPDuRcRxDo1PS2kQxPSSnZ0TtYnD\nlzcwiSIESi7F9OjLyPIjF7s4SQwX8O8pUq4rczgTUJfLouGhqBXr5M3pJXe0G0dh\n8WFTNLjgUlCtjNn00Mmyzrphrsnbr1zrZwdQIgUqnrCOIo+OB3LfuJ6cfYVasKFG\ntv2l/xJHQW8W5cAlLmQwKfJYY14egbmsBxfOGT2cLQtJRH6SUeCJxhzSEVszvqpJ\nKCECpQ4XjjJCMW2OD6y6vsfihkonGQwBO7/Yk0Jf2O1DenvO0Q==\n-----END CERTIFICATE-----`,
    },
};

// Create a new PostgreSQL client using the configuration
const client = new Client(config);

// Function to connect to the database
async function connectDB() {
    try {
        await client.connect();  // Establish a connection to the database
        console.log('Connected to the database');
    } catch (err) {
        console.error('Database connection error:', err.message);
    }
}

// Function to close the database connection
async function closeDB() {
    try {
        await client.end();  // Close the connection to the database
        console.log('Database connection closed');
    } catch (err) {
        console.error('Error closing the database connection:', err.message);
    }
}

// Export the client and database functions for use in other parts of the application
module.exports = { client, connectDB, closeDB };
