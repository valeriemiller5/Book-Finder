import axios from "axios";

export default {
    // Get all books based upon search parameters
    getBooks: function(query) {
        return axios.get("/api/books", query);
    },

    // Save a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },

    // Delete a book from the database
    deleteBook: function(id) {
        return axios.delete("/api/books", id);
    }
};