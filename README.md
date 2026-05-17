# Node.js User CRUD API

A RESTful CRUD API built using Node.js, Express.js, MySQL, and MVC architecture.

This project allows you to:

- Create Users
- Get All Users
- Get Single User
- Update Users
- Delete Users

---

# Technologies Used

- Node.js
- Express.js
- MySQL
- MVC Architecture

---

# Project Structure

```bash
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/muhammadfarhandeveloper/Nodejs-MYSQL-CRUD-REST-API-MVC
```

## Move Into Project Folder

```bash
cd nodejs-user-crud-api
```

## Install Dependencies

```bash
npm install
```

---

# MySQL Database Setup

## Create Database

```sql
CREATE DATABASE crud_app;
```

## Use Database

```sql
USE crud_app;
```

## Create Users Table

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Configure Database

Update your database credentials inside:

```bash
config/db.js
```

Example:

```js
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_app",
});
```

---

# Run Project

## Start Server

```bash
node app.js
```

OR

```bash
npx nodemon app.js
```

---

# API Endpoints

## Create User

### POST

```http
/api/users
```

### Request Body

```json
{
  "name": "Ali",
  "email": "ali@gmail.com",
  "status": "active"
}
```

---

## Get All Users

### GET

```http
/api/users
```

---

## Get Single User

### GET

```http
/api/users/1
```

---

## Update User

### PUT

```http
/api/users/1
```

### Request Body

```json
{
  "name": "Ahmed",
  "email": "ahmed@gmail.com",
  "status": "inactive"
}
```

---

## Delete User

### DELETE

```http
/api/users/1
```

---

# Features

- RESTful API
- MVC Pattern
- MySQL Database Integration
- CRUD Operations
- Clean Folder Structure

---

# Author

Muhammad Farhan

---

# License

This project is open-source and available under the MIT License.