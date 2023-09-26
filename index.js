const express = require("express");
const cors = require("cors");
const Logger = require("./logger/logger");
const loggerMiddleware = require("./logger/middleware");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
const logger = new Logger("Server");

// Middleware
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware(logger));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.info(`Server started on Port ${PORT}`));
