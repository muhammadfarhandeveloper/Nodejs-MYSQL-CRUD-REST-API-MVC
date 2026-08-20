const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db3');
const userRoutes = require('./routes/user.routes');
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/myusers", userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");

    await sequelize.sync(); // tables auto craeate 
    
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

startServer();
