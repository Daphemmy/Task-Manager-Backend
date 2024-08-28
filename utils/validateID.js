// utils is the short for utilities which refers to a collection of helper function oe modules designed to perform common tasks on multiple functions

//  These tasks often includes things like data validation, formatting or other repetitive operations that are used across different parts of the application
const mongoose = require("mongoose"); // Import Mongoose

// Utility function to validate MongoDB objectIDs
const validateID = (id) => { 
  const isValid = mongoose.Types.ObjectId.isValid(id); // Check if the ID is a valid MongoDB objectID
  return isValid; // Return the validation result
};

module.exports = validateID; // Export the function to be used in the controller