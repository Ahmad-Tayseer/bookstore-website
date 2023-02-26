import { useContext } from "react";
import BookDetailsCard from "../../components/bookDetails/bookDetailsCard";
import { BooksContext } from "../Context/booksContext";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const context = useContext(BooksContext);
  const params = useParams();
  const id = parseInt(params.id);
  const filteredBook = context.books.filter((book) => book.id === id);
  return (
    <div>
      {filteredBook.map((book) => (
        <BookDetailsCard book={book} />
      ))}
    </div>
  );
}
