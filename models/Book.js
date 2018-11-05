// Require the mongoose Node package:
import mongoose from "mongoose"

const Schema = mongoose.Schema;

// Create the schema model for the database:
const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
})

// Create a Book model with Mongoose using the BookSchema:
const Book = mongoose.model("Book", BookSchema);

// Export the model:
module.exports = Book;