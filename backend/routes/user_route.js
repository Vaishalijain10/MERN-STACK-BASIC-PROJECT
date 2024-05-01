// importing the express framework
import express from "express";
// importing user_model
import user_model from "../Models/user.js";

// Creates an Express router instance to handle routes.
const router = express.Router();

// using router with json format
router.use(express.json());

// creating api - 1
//Route to handle POST requests to save user details in DB
// http://localhost:5000/api/user_details  - API 1 - URL
router.post("/user_details", async (req, res) => {
  // try-catch block
  try {
    // Logging the request body to the console
    console.log("req.body:", req.body);

    // Destructuring the request body to extract name, email, and password
    const { name, email, password } = req.body;

    // Creating a new instance of the user model with the extracted data
    //1. creating a variable "user" works as per schema coming from frontend input
    const user = new user_model(req.body);

    // Saving the user details to the database
    const saved_user_details = await user.save();

    // Sending a success response with a message and the saved user details
    res.send({
      message: "Data saved successfully..!!",
      data: saved_user_details,
    });
  } catch (error) {
    // Handling errors and sending an error response with the error message
    return res.status(500).json({
      message: error.message,
    });
  }
});

// Exporting the router instance to be used in other parts of the application
export default router;
