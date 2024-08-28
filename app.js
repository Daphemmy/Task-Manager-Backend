require("dotenv").config(); // Load environment variable from s .env file into process.env

const express = require("express"); // Import Express framework

const mongoose = require("mongoose"); // Import Mongoose for MongoDB interactions

const cors = require("cors");

const app = express(); // Spinning up the Express framework server

const port = 3000; // Define the port number the server

// CORS (Cross-Origin Resource Sharing) when the frontend and backend are from different origins (different domain, ports, protocols) and the backend hasnt been configured to accept request from the frontend origin
app.use(cors());

const taskRouter = require("./routes/taskRouter"); // Import the taskRouter for task related routes
const notFound = require("./middlewares/notFound"); // Import a middleware to handle not found errors

app.use(express.json()); // This is a Middleware to pass incoming JSON requests from postman allowing access to the req.body

app.use("/api/task", taskRouter); // Mount the taskRouter at api/task, all task-related routes start with /api/task

app.use(notFound); // Use the custom 404 middleware for handling unmatched routes

const start = async () => {
  try {
    // Attempt to connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");

    // Start the serve and listen on the specified port
    app.listen(port, () => {
      console.log(`Server is running on PORT ${port}`);
    });
  } catch (error) {
    // Log the error if the database connection fails
    console.log(error);
    console.log("Unable to connect");
  }
};

start();

// Mongoose is an ODM (Object Data Modelling) library for MongoDB and Node.js.

// MongoDB is a NoAQL database that stores data in a flexible, JSON like format.

// benedictadeniran
// LprytoTErqnNhFne
// mongodb+srv://benedictadeniran:LprytoTErqnNhFne@cluster0.gdrq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// ==================================

// NETLIFY, VERCEL, RENDER ETC ARE POPULAR FREE PLATFORMS FOR HOSTLING WEB APPLICATIONS
// NETLIFY IS BEST FOR STATIC SITE AND APPLICATION WITH A FOCUS ON SIMPLICITY AND SERVERLESS FUNCTION

// VERCEL is optimized for frontend development especially those using react and next.js with strong server less and edge capabilites

// RENDER: is a versatile platform suitable for fullstack applcations, offering more flexible in terms of supported frameworks, database and backend services.
