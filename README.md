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

