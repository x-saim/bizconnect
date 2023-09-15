# BizConnect

Welcome to the **BizConnect**! This platform allows users to network, share industry insights, find job opportunities, and offer freelance services. Below, you'll find essential information to get started with this application.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Dependencies](#dependencies)
5. [Getting Started](#getting-started)
6. [Usage](#usage)

## Overview

This web application is a full-stack social network developed using Node.js, Express, React, Redux, and MongoDB. It includes various features for users to interact with, such as creating posts, liking and commenting, accessing job listings, networking with professionals, and managing their profiles.

## Features

### Main Features:

- **Home Feed**: Registered users can access the Home feed to create posts, like, unlike, and comment on posts.
- **Job Board**: Users can create job listings, view job listings, and apply for jobs.
- **Network/Profiles**: Users can scroll through profiles created on the app and connect with professionals.
- **Dashboard**: Users can update their profiles, add education, and add work experience.

### Technologies Used

- Backend:
  - Node.js
  - Express
  - MongoDB
  - JSON Web Tokens (JWT) for route protection
  - Postman for API testing

- Frontend:
  - React
  - Redux for state management
  - React Hooks and Async/Await for efficient code
  - Ant Design, Material-UI, Bootstrap, and Tailwind CSS for UI components
  - Axios for making HTTP requests
  - React Router for client-side routing

## Dependencies

### Backend Dependencies:

- express
- express-validator
- bcryptjs
- config
- gravatar
- jsonwebtoken
- mongoose
- cors
- cloudinary

### Frontend Dependencies:
- axios
- react-router-dom
- redux
- react-redux
- redux-devtools-extension
- moment
- uuid
- tailwindcss
- @mui/icons-material
- @mui/material
- @ant-design/icons
- react-bootstrap

## Getting Started

To get started with this web application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the backend and frontend directories separately and run the following command in each to install the required dependencies:

``npm install``

3. In the backend/config directory, find the default.package.json file and fill in the mongoURI to connect to your MongoDB instance and a random generated jwtSecret to initialize the authentication set up.

4. Start the servers:

- In the backend directory, run:

``npm run server``

- In the frontend directory, run:

``npm start``

5. Open your web browser and access the application at http://localhost:3000.

### Usage
Once the application is up and running, you can register as a user, log in, and start using the various features like creating posts, browsing job listings, networking with professionals, and managing your profile.

Enjoy using the BizConnect web application! If you have any questions or encounter issues, please refer to the documentation or contact the developers for assistance.