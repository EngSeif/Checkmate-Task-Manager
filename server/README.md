# 📝 To-Do List API

Welcome to the To-Do List API project! This API allows users to manage their daily tasks efficiently, with features that cater to the everyday needs of a task management application.

- **URL**: https://checkmate-api-y0e5.onrender.com/
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
- **JWT (JSON Web Token)**: A method for securely transmitting information between parties as a JSON object, used here for authenticating users.
- **Bcrypt**: A password-hashing function used to secure user passwords before storing them in the database.
- **Postman**: A powerful tool for testing and documenting the API endpoints.

## API Endpoints Overview
- **Index ('/')**: Redircet to api documentaion link
### Authentication Routes

- **POST /register** - Register a new user
- **POST /login** - Authenticate a user and return a JWT token

### Task Routes (Protected by JWT)


- **GET /tasks** - Retrieve all tasks for the authenticated user
- **POST /tasks** - Create a new task
- **PATCH /tasks/:id** - Update an existing task
- **DELETE /tasks/:id** - Delete a task
- **GET /tasks/filter?priority={high|medium|low}** - Filter tasks by priority
- **GET /tasks/status?checked={true|false}** - Filter tasks by checked status


## Testing the API
You can test the API using Postman. Import the Postman collection or use the following link to view the API documentation:



## 📄 API Documentation

For a detailed overview of the API endpoints and how to use them, please refer to the full documentation:

🔗 **[API Documentation](https://documenter.getpostman.com/view/37432599/2sAXjSy8fC)**


