const axios = require("axios");
const router = require("express").Router();
const booksController = require("../controllers/booksController");

// Retrieves book information from Google Books API
router.get("/books", async (req, res) => {
  const res = await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${req.data}`) 
      .then(({data}) => res.json(data.items))
      .catch(err => res.status(422).json(err));
  });

// Matches with "/api/books"
router.route("/")
  .get(booksController.search)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .put(booksController.update)
  .delete(booksController.delete);

module.exports = router;