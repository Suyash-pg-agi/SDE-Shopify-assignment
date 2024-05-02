# Frontend

# React Frontend with Vite and Tailwind CSS

Welcome to the frontend repository of our React application built with Vite and Tailwind CSS. This README file will guide you through the process of setting up, installing dependencies, and running the project locally.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Git

To install Node.js (v14 or later) and npm (Node Package Manager) on your system, you can follow these step-by-step instructions:


1. **Download Node.js:**
   - Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
   - Download the LTS (Long Term Support) version, which is recommended for most users. As of now, the LTS version is 16.x, which includes npm.

2. **Install Node.js:**
   - Run the downloaded installer and follow the instructions to install Node.js and npm. The installer will add Node.js and npm to your system's PATH, making them accessible from any terminal.

3. **Verify Installation:**
   - Open your VSCode terminal.
   - Ensure your virtual environment (venv) is activated. You should see the name of your virtual environment in the terminal prompt.
   - Type the following command to check the installed version of Node.js:
     ```bash
     node -v
     ```
   - You should see the installed version of Node.js (e.g., v14.x.x or later).
   - Type the following command to check the installed version of npm:
     ```bash
     npm -v
     ```
   - You should see the installed version of npm (e.g., 6.x.x or later).
## 4. Install vite
Use this command:  npm install --save-dev vite





## Getting Started

1. Clone the repository to your local machine:

```bash
cd your-frontend_new
```

## Ensure you have Node.js and npm installed by running the following commands in your terminal or command prompt:

```bash
node -v
npm -v
```

If Node.js and npm are not installed, please download and install them from Node.js website.
2. Install project dependencies:

```bash
npm install
```

## Project Structure

The project structure is organized as follows:

- `src`: Contains the source code for the React application.
- `public`: Contains static files and the HTML template.

## Configuration

The project uses Vite and Tailwind CSS for development and styling. Tailwind CSS configuration can be found in the `tailwind.config.js` file.

## Dependencies

The following dependencies are used in this project:

```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.1"
},
```

## Styling with Tailwind CSS

This project utilizes Tailwind CSS for styling. Make sure to explore the `src/styles` directory for custom styles and configurations.

## Additional Information

- Make sure you have a backend server running and properly configured before testing the application.

## Running the Project Locally
To run the project locally, follow these steps:
- Navigate to the frontend_new directory in your terminal.
- Open a terminal in the project directory.
Run the following command in your terminal to start the development server:

```bash
npm run dev
```

