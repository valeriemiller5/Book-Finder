# Book-Finder

This is an on-line app that allows users to look up book information retrieved from Google Books API.

Once books populate (limited to 10 results), users may check out the book's information by clicking the button to the book's link, or they may save the book to their Saved page. If they would like to remove the book, they may click the "Remove" button on the Saved books page.

![Opening Screen Shot](client/src/images/titlescreen.png)

## Getting Started
To visit my site, open the link [here](https://bookfinder-01.herokuapp.com/). Navigation buttons have been added to the top left-hand side of the page.

## Prerequisites
Google Chrome is recommended for running this program.  If the user has pulled the app from the GitHub repository, please remember to `npm install` in the terminal, then enter the command `yarn start` to run this app.

## Challenges
This entire project was challenging.  The first challenge: retrieve books from the Google Books API.  Since this app is broken into several files in order to create more flexible code, ensuring that the files were properly linked and the query was correctly expressed took some time.

![Make a search](client/src/images/booksearch.gif)

![Opening Screen Shot](client/src/images/booksearchII.gif)

Connecting to the MongoDB database also proved to be challenging, again, ensuring that the retrieved information was stated properly in order for the database to recognize the data.

![Opening Screen Shot](client/src/images/mLab.gif)

A current issue is saving an individual book - due to time spent on the API and connecting to the database, the current goal is to save a book by id when the "Save Book" button is clicked.

## Built With
This is a MERN app built with:
* Express - Node package used to set up server (`npm i express`)
* Mongoose - Node package used for easier setup of MongoDB database (`npm i mongoose`)
* Axios - Node package used, along with Cheerio, to scrape information from a database and save is as a JSON object for developer use (`npm i axios`)
* React.js
* Node.js
* Bootstrap - CSS library used for easier styling
* Google Books API

## Authors
Valerie Flores - Initial work

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
Thank you to UCI Coding Bootcamp classmates, instructor, and TA's for your help and suggestions and the many examples of other coders online.