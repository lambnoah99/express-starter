const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.info(`Server started on Port ${PORT}`));
