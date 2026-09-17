const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const fileRoutes = require("./routes/fileRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// File API routes
app.use("/api/files", fileRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});