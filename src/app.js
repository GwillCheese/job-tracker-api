require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Job Tracker API",
    version: "1.0.0",
    endpoints: {
      auth: {
        register: "POST /auth/register",
        login: "POST /auth/login"
      },
      jobs: {
        create: "POST /jobs",
        getAll: "GET /jobs",
        getById: "GET /jobs/:id",
        update: "PUT /jobs/:id",
        delete: "DELETE /jobs/:id"
      }
    }
  });
});
app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

