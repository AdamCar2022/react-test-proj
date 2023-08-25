import React from "react";
type BookProps = {
  title: string;
  author: string;
  coverImage: string;
  progress: number;
  isReading: boolean;
};
const BookCard: React.FC<BookProps> = ({
  title,
  author,
  coverImage,
  progress,
  isReading,
}) => {
  return (
    <div className="book-item">
      <div className="book-item-info">
        <h4>{title}</h4>
        <em>{author}</em>
      </div>
      {isReading && <progress value={progress} max="100" />}
      <img src={coverImage} />
    </div>
  );
};

export default BookCard;
