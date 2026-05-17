const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api", userRoutes);

app.use("/api/contacts", contactRoutes);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
