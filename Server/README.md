Managym Backend - Read Me
Welcome to the backend documentation for the Managym app. This document aims to provide you with an overview of the backend structure, functionalities, and guidelines for developers working on the backend side of the application.

Technologies Used
Programming Languages
Primary Language: Node.js
Database Management: (Specify the database used, e.g., MongoDB, PostgreSQL, etc.)
Frameworks and Tools
Express.js: Used for handling routes and requests.
Authentication: (Specify the authentication method used, e.g., JWT tokens, OAuth, etc.)
Data Validation: (Specify the tools or middleware used for input validation, e.g., Joi, express-validator, etc.)
ORM/ODM: (If used, specify the ORM/ODM tool, e.g., Mongoose, Sequelize, etc.)
API Endpoints
Authentication Endpoints
POST /api/auth/signup: Endpoint to allow users to sign up.
POST /api/auth/login: Endpoint for user authentication and login.
User Endpoints
GET /api/users/:id: Endpoint to retrieve a user's profile information.
PUT /api/users/:id: Endpoint to update a user's profile information.
Workout Endpoints
GET /api/workouts: Endpoint to retrieve all workout forms.
POST /api/workouts: Endpoint to create a new workout form.
PUT /api/workouts/:id: Endpoint to update a specific workout form.
DELETE /api/workouts/:id: Endpoint to delete a specific workout form.
POST /api/workouts/:id/favorite: Endpoint to mark a workout as a favorite.
Favorite Workouts Endpoints
GET /api/favorite-workouts/:userId: Endpoint to retrieve favorite workouts for a specific user.
Search Endpoint
GET /api/search/workouts: Endpoint to search for specific workout forms.
Database Schema
Users
\_id: User's unique identifier.
username: User's username.
email: User's email address.
password: Encrypted user password.
... (other profile information)
Workouts
\_id: Workout's unique identifier.
title: Title of the workout.
description: Description of the workout.
trainer: Trainer's ID who created the workout.
... (other workout details)
FavoriteWorkouts
\_id: Unique identifier for favorite workout entries.
userId: User ID who marked the workout as a favorite.
workoutId: ID of the marked favorite workout.
Usage Guidelines
Authentication and Authorization:

Implement proper authentication mechanisms for secure user access.
Apply authorization to endpoints based on user roles (e.g., trainers, trainees).
Endpoint Usage:

Utilize the provided endpoints for respective functionalities.
Validate input data and perform necessary error handling.
Database Operations:

Ensure proper CRUD operations for users, workouts, and favorites.
Maintain data consistency and integrity.
Security Measures:

Protect sensitive information, especially user credentials.
Implement best security practices to prevent vulnerabilities.
Getting Started
Environment Setup:

Clone the repository and set up the backend environment.
Install necessary dependencies using npm install.
Database Configuration:

Configure and connect the chosen database system.
Run the Backend:

Start the server using npm start or the appropriate command.
API Testing:

Use tools like Postman or any API testing tool to verify endpoint functionalities.
