const express = require("express");

const studentRoutes = require("./routes/studentRoutes");

const app = express();

const PORT = 3000;



// Middleware

app.use(express.json());



// Home Route

app.get("/", (req, res) => {

    res.send("Student API is Running Successfully 🚀");

});



// Student Routes

app.use("/students", studentRoutes);



// Invalid Route

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route Not Found"

    });

});



// Server

app.listen(PORT, () => {

    console.log(`Server Running On http://localhost:${PORT}`);

});