import React from "react";

// Creates an unordered list to store each book as a list item
export const BookList = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};