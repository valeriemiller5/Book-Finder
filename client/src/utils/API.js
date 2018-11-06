import axios from "axios";

export default {
    // Get all books based upon search parameters
    getBooks = query => {
        return axios.get("/api/books", { params: { q: query } });
    },

    // Save a book to the database
    saveBook = bookData => {
        return axios.post("/api/books", bookData);
    },

    // Delete a book from the database
    deleteBook = id => {
        return axios.delete("/api/books", id);
    }, 

    loadHome = () => {
        return axios.get("*");
    }
};