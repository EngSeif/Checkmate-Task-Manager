# Configuration Folder

This folder contains the configuration files used in the application, primarily for setting up the database connection.

## Files

### 1. `db.js`

This file handles the configuration and connection to the PostgreSQL database. 

#### Features:
- **Database Configuration**: The database connection settings are loaded from environment variables defined in a `.env` file. The configuration includes the username, password, host, database name, port, and SSL settings.
  
- **Database Client Initialization**: A PostgreSQL client is created using the provided configuration.
  
- **Connection Management**: 
  - `connectDB()`: Establishes a connection to the PostgreSQL database. This function is called to initiate the connection.
  - `closeDB()`: Closes the database connection when it is no longer needed.

#### Usage:
- Import the `db.js` file wherever a database connection is needed.
- Use the `connectDB()` function to connect to the database and `closeDB()` to close the connection when done.

