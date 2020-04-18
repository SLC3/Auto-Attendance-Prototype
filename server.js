const express = require("express"); // import express server library
const app = express(); // create an express server object
app.use(express.static("public")); // serve files from 'public' folder
app.listen(3000); // run the server app on port 3000 (https://localhost:3000)