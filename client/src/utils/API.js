import axios from "axios";

export default {
    // Get all books based upon search parameters
    getBooks: function(query) {
        return axios.get(`/api/books/${query}`)
    },

    // Get a single book with its given id
    getBook: function(id) {
        return axios.get(`/api/books/${id}`);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        console.log(bookData);
        return axios.post("/api/books", bookData);
    },
    // Delete a book from the database
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`);
    }
};