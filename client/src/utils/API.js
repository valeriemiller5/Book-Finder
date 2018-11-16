import axios from "axios";

export default {
    // Get all books from Google Books API based upon search parameters
    getBooks: function(query) {
        return axios.get(`/api/books/${query}`)
    },
    // Get all saved books from the database 
    getBook: function() {
        console.log();
        return axios.get("/api/books/");
    },
    // Saves a book to the database
    createBook: function(bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    },
    // Delete a book from the database
    deleteBook: function() {
        return axios.delete("/api/books/");
    }
};