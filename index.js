const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

// Routes
app.use("/api", require("./routes/api"));

app.listen(PORT, () => console.info(`Server started on Port ${PORT}`));
