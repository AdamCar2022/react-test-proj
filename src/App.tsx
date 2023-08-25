import React, { useState } from "react";
import BookCard from "./components/BookCard";
import "./App.css";
import { Books } from "./data/Books";

function App() {
  console.log(Books[0]);
  return (
    <div className="book-item-container">
      {Books.map((book) => (
        <BookCard
          title={book.title}
          author={book.author}
          coverImage={book.coverImage}
          progress={book.progress}
          isReading={book.isReading}
        />
      ))}
    </div>
  );
}

export default App;
