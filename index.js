const express = require("express");
const PORT = process.env.PORT || 3000;

const app = express();

app.listen("/api", (req, res) => {
  res.send("Hello API");
});

app.listen(PORT, () => console.info(`Server started on Port ${PORT}`));
