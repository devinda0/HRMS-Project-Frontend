# HRMS Project Frontend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **HRMS Project Frontend** is the client-side application of the Human Resource Management System. Built with React.js and styled using Tailwind CSS, it offers a responsive and intuitive interface for users to manage employee data, apply for leaves, generate reports, and perform other HR-related tasks seamlessly.

## Features

- **User Authentication:** Secure login and registration with role-based access.
- **Dashboard:** Overview of HR metrics and quick access to various modules.
- **Employee Management:** View and manage employee profiles and details.
- **Leave Management:** Submit leave applications and track their status.
- **Reporting:** Generate and view comprehensive reports on employees and leaves.
- **Interactive UI:** Responsive design ensuring compatibility across devices.

## Technologies Used

- **React.js:** For building the user interface.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Axios:** For making HTTP requests to the backend API.
- **React Router DOM:** For client-side routing.
- **Material-UI & DaisyUI:** For additional UI components and styling.
- **React Icons:** For incorporating icons into the UI.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/devinda0/HRMS-Project-Frontend.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd HRMS-Project-Frontend
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Environment Variables:**
   
   Create a `.env` file in the root directory and add the following:
   ```env
   REACT_APP_API_URL=http://localhost:8080
   ```

   This sets the base URL for API requests. Ensure that the backend server is running at this address.

## Running the Application

### Development Mode
```bash
npm start
```
The application will run in development mode on `http://localhost:3000`.

### Production Build

To create a production build, run:
```bash
npm run build
```
This will generate optimized static files in the `build` directory.

## Project Structure
Refer @HRMS-Project-Backend @HRMS-Project-Frontend 
make project description and readme file for each

Final Context in Folders
Project Description
Human Resource Management System (HRMS)
The Human Resource Management System (HRMS) is a comprehensive platform designed to streamline and enhance the efficiency of HR-related tasks within an organization. This system facilitates effective management of employee data, leave applications, reporting, and administrative functions, ensuring seamless operations across various departments.
The project is divided into two main components:
HRMS-Project-Backend: Handles server-side operations, including authentication, database interactions, and API endpoints.
HRMS-Project-Frontend: Manages the client-side interface, providing users with an intuitive and responsive experience.
Key Features
Employee Management: Add, update, and manage employee details, including personal information, job titles, and departmental affiliations.
Leave Management: Submit, approve, and track various types of leaves such as annual, casual, and maternity.
Reporting: Generate detailed reports on employee statistics, leave summaries, and departmental performance.
Authentication & Authorization: Secure access with role-based permissions ensuring that sensitive information is protected.
Responsive Design: User-friendly interface accessible across various devices for on-the-go management.
Technologies Used
Frontend:
React.js
Tailwind CSS
Axios
React Router DOM
Material-UI
Backend:
Node.js
Express.js
MySQL
JSON Web Tokens (JWT)
Sequelize ORM
Others:
Docker (for containerization)
Git & GitHub (for version control)
---
HRMS-Project-Backend README
bash
npm run dev
bash
npm start
---
HRMS-Project-Frontend README
bash
npm start
bash
npm run build
HRMS-Project-Frontend/
├── public/
│ ├── index.html
│ ├── manifest.json
│ └── robots.txt
├── src/
│ ├── Components/
│ │ ├── ContactAdmin/
│ │ ├── HRMGuide/
│ │ ├── LeaveBalance/
│ │ ├── PendingLeave/
│ │ ├── ReportProblem/
│ │ ├── ReportTable/
│ │ └── ApprovedLeave/
│ ├── pages/
│ │ ├── AbsentManagement/
│ │ ├── Reports/
│ │ ├── home/
│ │ └── Leave/
│ ├── context/
│ │ └── AuthContext.js
│ ├── routes/
│ │ └── AppRoutes.js
│ ├── App.jsx
│ ├── index.css
│ ├── App.css
│ └── tailwind.config.js
├── package.json
├── .gitignore
└── README.md


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
