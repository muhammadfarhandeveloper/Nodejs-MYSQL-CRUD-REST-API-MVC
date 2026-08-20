const express = require("express");
const app = express();
const cors = require('cors');

const MiddlewareCheckfun = require('./middelware/middleware')

// all methods and * 
const options = {
  origin: ['http://theproviders.tech/','https://www.smartsecure.pk/'],
  methods: ['GET']
}
app.use(cors(options));

app.use(express.json());

// app.use(MiddlewareCheckfun)

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api", userRoutes);

app.use("/api/contacts", contactRoutes);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
