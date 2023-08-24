import React, { useState } from "react";
import BookCard from "./components/BookCard";
import "./App.css";
import { Books } from "./data/Books";

function App() {
  console.log(Books[0]);
  return (
    <>
      <div>
        <BookCard
          title={Books[0].title}
          author={Books[0].author}
          coverImage={Books[0].coverImage}
        />
      </div>
    </>
  );
}

export default App;
