require("dotenv").config();
const express = require("express");
const { execSync } = require("child_process");

// Run migrations before starting the server
// This ensures migrations run at runtime when the database is accessible
if (process.env.DATABASE_URL) {
  try {
    console.log("Running database migrations...");
    execSync("npx prisma migrate deploy", { stdio: "inherit" });
    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Migration failed:", error.message);
    process.exit(1);
  }
}

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

