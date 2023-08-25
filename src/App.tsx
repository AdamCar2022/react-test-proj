import React, { useReducer } from "react";
import BookCard from "./components/BookCard";
import "./App.css";
import { Books, BookProps } from "./data/Books";

type Action = {
  type: string;
  id: number;
}



const reducer = (state: BookProps[], action: Action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((book) => {
        if (book.id === action.id) {
          return { ...book, isReading: !book.isReading };
        } else {
          book.isReading = false;
          return book;
        }
      });
    default:
      return state;
  }
};
type State = BookProps[];


function App() {
  const [state, dispatch] = useReducer<(state: State, action: Action) => State>(reducer, Books);



  return (
    <>
      <code>{JSON.stringify(state, null, 2)}</code>
      <div className="book-item-container">
        {state.map((book) => (
          <BookCard
            id={book.id}
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            progress={book.progress}
            isReading={book.isReading}
            handleComplete={() => dispatch({ type: "COMPLETE", id: book.id })}

          />
        ))}
      </div>
    </>
  );
}

export default App;
