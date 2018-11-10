import React from "react";

// Creates an unordered list to store each book as a list item
export const BookList = props => (
  <ul className="list-group">
    <h4>Results:</h4>
    {props.children}
  </ul>
);