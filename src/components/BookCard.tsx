import React from "react";
type BookProps = {
  title: string;
  author: string;
  coverImage: string;
};
const BookCard: React.FC<BookProps> = ({ title, author, coverImage }) => {
  return (
    <div className="book-item">
      {title}
      <br />
      {author}
      <br />
      <img src={coverImage} />
    </div>
  );
};

export default BookCard;
