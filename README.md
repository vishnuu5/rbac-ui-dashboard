# RBAC (Role-Based Access Control) UI Dashboard


This project implements a Role-Based Access Control (RBAC) dashboard for managing users, roles, and permissions. It provides a responsive, user-friendly interface for administrators to manage user data, assign roles, and define permissions dynamically.

# Features
## User Management

1. View, add, edit, and delete users.
2. Assign roles to users.
3. Activate or deactivate user accounts.

## Role Management

View, create, and update roles.
Assign permissions (Read, Write, Delete) to roles.

## Permission Editor
Dynamically assign and update permissions for roles.
Toggle permissions using checkboxes for intuitive management.

## Additional Features
Responsive design optimized for various screen sizes.
Mock API simulation for CRUD operations.
Tailwind CSS for styling.
Intuitive UX with clear workflows.

## Tech Stack
Frontend Framework: React.js
Styling: Tailwind CSS
State Management: React useState
Mock Backend: Simulated with a mock API.

# Installation and Setup
## Prerequisites

Ensure you have the following installed:
Node.js 
npm or yarn
Clone the Repository
``` bash
git clone https://github.com/your-username/rbac-ui-dashboard.git
cd rbac-ui-dashboard
```
Install Dependencies
```bash
npm install
```
Start the Development Server
```bash
npm start
```
The application will be available at http://localhost:3000.

## Folder Structure
The project is organized as follows:
```bash

rbac-ui-dashboard/
├── public/                   # Static assets
├── src/
│   ├── api/
│   │   ├── mockApi.js        # Mock API for simulating CRUD operations
│   ├── components/
│   │   ├── UserManagement.js # Component for user management
│   │   ├── RoleManagement.js # Component for role management
│   │   ├── PermissionEditor.js # Component for managing role permissions
│   |
│   │--- index.css      # Tailwind CSS configuration
│   ├── App.js                # Main application file
│   ├── index.js              # Entry point
├── package.json              # Project dependencies and scripts
├── README.md      
```

# Project documentation

## Components Overview

## UserManagement.js
Manages CRUD operations for users.
Displays a list of users with roles and statuses.
Provides functionality for adding, editing, and deleting users.

## RoleManagement.js
Handles role creation and editing.
Assigns permissions to roles.

## PermissionEditor.js
Allows for toggling and updating role permissions.
Saves changes dynamically to the mock API.

# Usage

## User Management:

Navigate to the User Management section.
Add new users or edit existing ones.
Assign roles and activate/deactivate users.

## Role Management:

Create or update roles.
Assign permissions (Read, Write, Delete) to each role.

## Permission Editor:

Select a role to view and modify its permissions.
Save changes to update the role configuration.


# Mock API
The mockApi.js file provides a simulation of backend CRUD operations:

Users: Add, edit, delete, and fetch user data.
Roles: Fetch roles, create or update permissions.

Example; 
```bash
// Add a new user
addUser({ id: 3, name: "Jane Doe", role: "Viewer", status: "Active" });
```
## Responsive Design
Fully responsive with optimized layouts for mobile, tablet, and desktop.
Utilizes Tailwind CSS for fluid and efficient styling.

## Security Considerations
Basic input validation on forms.
Error handling for mock API interactions.
Placeholder for production-level security features like authentication.

## Future Enhancements
Authentication and Authorization: Integrate JWT for secure login.
Backend API Integration: Replace mock API with real backend services.
Advanced Filters and Sorting: Enable advanced search and sorting for users and roles.
Audit Logs: Add functionality to track changes in user roles and permissions.

## Screenshots
Dashboard Overview; 
![rbac-ui demo](https://github.com/user-attachments/assets/2908bae6-d1e0-4e12-828c-0221acb181a5)


## License
This project is licensed under the MIT License. See the LICENSE file for details.
