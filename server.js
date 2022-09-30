// NPM packages
const express = require("express");

// Initial Port
const PORT = process.env.PORT || 3001;


// Express config
const app = express();

// Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express static setup
app.use(express.static("public"));

// Router

require("./routes/api.routes")(app);
require("./routes/html.routes")(app);

// Port Listener
app.listen(PORT, () => 
    console.log(`Express server currently running on port: ${PORT}`)
);
