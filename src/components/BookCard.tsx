import React from "react";
import { BookProps } from "../data/Books";


const BookCard: React.FC<BookProps> = ({
  id,
  title,
  author,
  coverImage,
  progress,
  isReading,
  handleComplete
}) => {

  return (
    <div className="book-item">
      <div className="book-item-info">
        <h4>{title}</h4>
        <em>{author}</em>
        <input
          type="checkbox"
          checked={isReading}
          onChange={(id) => handleComplete(id)}
        />
      </div>
      {isReading && <progress value={progress} max="100" />}
      <img src={coverImage} />
    </div>
  );
};

export default BookCard;
