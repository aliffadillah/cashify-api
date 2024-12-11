const express = require("express");
const userRoutes = require("./src/features/users/user.route");
const dkRoutes = require("./src/features/data_keuangan/dk.route"); // Import the dataKeuangan routes
const dashboardRoutes = require("./src/features/dashboard/dashboard.route");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);  // User-related routes
app.use("/api/data", dkRoutes);     // DataKeuangan-related routes
app.use('/api/dashboard', dashboardRoutes);

module.exports = app;
