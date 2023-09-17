require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {connection} = require('./db');
const route = require("./routes/route")

connection.connect(function(err) {
    if(err) {
        console.log("Error connecting to database:",err.message);
        return
    } else {
        console.log(`connected to ${process.env.DB_DATABASE} database`);
    }
});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/query',route);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});


