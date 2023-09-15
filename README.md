# BizConnect 💻

Welcome to the **BizConnect**! This platform allows users to network, share industry insights, find job opportunities, and offer freelance services. Below, you'll find essential information to get started with this application.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [App Views](#app-views)
4. [Technologies Used](#technologies-used)
5. [Dependencies](#dependencies)
6. [Getting Started](#getting-started)
7. [Usage](#usage)

## Overview

This web application is a full-stack social network developed using Node.js, Express, React, Redux, and MongoDB. It includes various features for users to interact with, such as creating posts, liking and commenting, accessing job listings, networking with professionals, and managing their profiles.

## Features 🌟

- **Home Feed**: Registered users can access the Home feed to create posts, like, unlike, and comment on posts.
- **Job Board**: Users can create job listings, view job listings, and apply for jobs.
- **Network/Profiles**: Users can scroll through profiles created on the app and connect with professionals.
- **Dashboard**: Users can update their profiles, add education, and add work experience.

### Usage ✨

1. **Register**: Create your BizConnect account and complete your profile.

2. **Explore**: Dive into the Home Feed to see what's happening in your industry. Browse job listings and profiles.

3. **Connect**: Start connecting with professionals who share your interests and goals.

4. **Customize**: Personalize your profile, add your educational background and work experience to stand out.

Let's embark on this exciting journey together! If you have any questions or need assistance, don't hesitate to reach out to our support team.

Happy networking and career growth! 🌐🤝
### App Views


## Landing Page

![Landing Page](https://github.com/x-saim/bizconnect/blob/master/docs/Landing.png?raw=true)

## About Us
![About Page](https://github.com/x-saim/bizconnect/blob/master/docs/About.png?raw=true)


## Authentication Pages
| Register                                  | Login                                  |
| ---------------------------------------- | -------------------------------------- |
| ![Register](https://github.com/x-saim/bizconnect/blob/master/docs/Register.png?raw=true)       | ![Login](https://github.com/x-saim/bizconnect/blob/master/docs/Login.png?raw=true)           |

| Profiles                                  | Profile Image                                   |
| ---------------------------------------- | -------------------------------------------- |
| ![Profiles](https://github.com/x-saim/bizconnect/blob/master/docs/Profiles.png?raw=true)       | ![Profile Image](https://github.com/x-saim/bizconnect/blob/master/docs/Profile.png?raw=true)        |

## Home Feed

![Home Feed](https://github.com/x-saim/bizconnect/blob/master/docs/Home%20Feed.png?raw=true)

## Job Board
![Job Board](https://github.com/x-saim/bizconnect/blob/master/docs/Job%20Board.png?raw=true)

## Dashboard

![Dashboard](https://github.com/x-saim/bizconnect/blob/master/docs/Dashboard.png?raw=true)

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

- express 4.18.2
- express-validator 7.0.1
- bcryptjs 2.4.3
- config 3.3.9
- gravatar 1.8.2
- jsonwebtoken 9.0.2
- mongoose 7.5.0
- cors 2.8.5
- cloudinary 1.40.0

### Frontend Dependencies:
- axios 1.5.0
- react-router-dom 6.15.0
- react-redux 8.1.2
- redux-devtools-extension 2.13.9
- moment 2.29.4
- uuid 9.0.0
- tailwindcss 3.3.3
- @mui/icons-material 5.14.9
- @mui/material 5.14.9
- @ant-design/icons 5.2.6
- react-bootstrap 2.8.0

## Getting Started

To get started with this web application, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the backend and frontend directories separately and run the following command in each to install the required dependencies:

``npm install``

3. In the backend/config directory, find the default.package.json file and fill in the mongoURI to connect to your MongoDB instance and a random generated jwtSecret to initialize the authentication set up.

4. Start the servers:

- In the backend directory, run: ``npm run server``

- In the frontend directory, run: ``npm start``

5. Open your web browser and access the application at http://localhost:3000.

