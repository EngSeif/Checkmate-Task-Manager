# 📝 Checkmate API

Welcome to the Task-Manager API project! This API allows users to manage their daily tasks efficiently, with features that cater to the everyday needs of a task management application.

- **URL**: (http://54.158.221.58/)
## 🚀 Features

- **User Authentication**:
  - **Secure Registration & Login**: Users can register and log in to the system securely using email and username. Authentication is handled using JWT tokens, ensuring secure communication between the client and the server.
  - **Password Security**: User passwords are securely hashed using `bcrypt`, ensuring that plain text passwords are never stored in the database.

- **Task Management**:
  - **Create Tasks**: Users can create tasks with a title, an optional description, a priority level (high, medium, low), and a checked status indicating whether the task is completed.
  - **View All Tasks**: Users can view all their tasks in one place, making it easy to track their progress.
  - **Update Tasks**: Users can update the details of existing tasks. They can modify the title, description, priority, and completion status.
  - **Delete Tasks**: Users can delete tasks that are no longer needed.
  - **Filter Tasks by Priority**: Easily filter tasks based on their priority level to focus on what’s most important.
  - **Filter Tasks by Status**: Filter tasks by their checked (completed) status to view either completed or pending tasks.

- **Security**:
  - **JWT Protection**: All task-related endpoints are protected by JSON Web Tokens, ensuring only authenticated users can access their data.
  - **Environment Configuration**: Sensitive data like JWT secrets and database credentials are stored securely using environment variables.

- **Error Handling**:
  - **Comprehensive Error Management**: The API includes thorough error handling to provide meaningful feedback to users, ensuring smooth and predictable behavior.

## 🛠️ Used Technologies

- **Node.js**: JavaScript runtime environment used for building the backend of the API.
- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for building APIs.
- **PostgreSQL**: An advanced open-source relational database used for securely storing user and task data.
- **Aiven Cloud DB**: PostgreSQL database hosted on Aiven Cloud, providing scalability and high availability for storing the app's data.

- **JWT (JSON Web Token)**: A method for securely transmitting information between parties as a JSON object, used here for authenticating users.
- **Bcrypt**: A password-hashing function used to secure user passwords before storing them in the database.
- **Postman**: A powerful tool for testing and documenting the API endpoints.

## 🗄️ Database Design and Modeling
For the Checkmate API, the database is powered by PostgreSQL. The schema includes two primary tables: users and tasks.
- **User Table**
The User table is responsible for storing information about each registered user. It includes fields for a unique identifier, username, email, and hashed password.
- **Task Table**
The Task table stores information about each task created by users. It is related to the User table via a foreign key user_id.
- ### Entity Relationship
The relationship between the User and Task tables is one-to-many, meaning that each user can have multiple tasks, but each task belongs to only one user.


## 🛡️ Authentication System
The Checkmate API uses a JWT-based authentication system for securing routes related to tasks. Here’s a breakdown of how the authentication flow works:
- **User Registration**: When a user registers, their password is hashed using bcrypt before being saved in the database. This prevents the storage of plaintext passwords and enhances security.
- **User Login**: Upon logging in with valid credentials (email and password), the user is issued a JWT token. This token is then used to authenticate future requests. JWT tokens are stored on the client side (usually in local storage or cookies) and must be included in the request headers for protected routes.
- **Token Validation Middleware**: A middleware checks each incoming request for a valid JWT token. If a token is missing or invalid, access to the route is denied. This ensures that only authenticated users can interact with their tasks.


## API Endpoints Overview
### Authentication Routes

- **POST /user/register** - Register a new user.
- **POST /user/login** - Authenticate a user and return a JWT token.
- **POST /user/data** - Retrieve authenticated user username & email.

### Task Routes (Protected by JWT)

- **GET /tasks** - Retrieve all tasks for the authenticated user.
- **POST /tasks** - Create a new task.
- **PATCH /tasks/:id** - Update an existing task.
- **DELETE /tasks/:id** - Delete a task.
- **GET /tasks/filter?priority={high|medium|low}** - Filter tasks by priority.
- **GET /tasks/status?checked={true|false}** - Filter tasks by checked status.




## Conclusion
The Checkmate API is a secure and efficient task management system that allows users to manage their tasks through a comprehensive set of features. From authentication to task filtering, the system is built to handle everyday task management scenarios, ensuring user data is securely handled. The deployment on a cloud-based environment ensures scalability, while the use of Postman provides a convenient way to interact with and test the API.



## Testing the API
You can test the API using Postman. Import the Postman collection or use the following link to view the API documentation:

## 📄 API Documentation

For a detailed overview of the API endpoints and how to use them, please refer to the full documentation:

🔗 **[API Documentation](https://documenter.getpostman.com/view/37432599/2sAXjSy8fC)**


