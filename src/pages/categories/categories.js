import "./categories.css";
import BooksList from "../../components/categories/booksList";
import Cover from "../../components/cover/cover";
import image from "./asset7.jpg";
import { useContext } from "react";
import { BooksContext } from "../Context/booksContext";
import Filter from "../../components/categories/filter";
import cookie from "react-cookies";

export default function Categories() {
  const context = useContext(BooksContext);
  let filteredBooks = context.books;
  const page = "Categories";
  const user = cookie.load("User");
  const favArr = user?.favourite;
  if (context.favourite) {
    filteredBooks = context.books.filter((book) => {
      if (favArr.includes(book.id)) return book;
    });
  }

  filteredBooks = filteredBooks.filter((book) => {
    if (+book.price >= +context.minPrice && +book.price <= +context.maxPrice) {
      return book;
    }
  });

  filteredBooks = filteredBooks.filter((book) => {
    if (
      +book.rating >= +context.minRating &&
      +book.rating <= +context.maxRating
    ) {
      return book;
    }
  });

  return (
    <div className="categoriesDiv">
      <Cover label={page} img={image} />
      <div className="categoryPage">
        <div className="categoryFilter">
          <Filter />
        </div>
        <BooksList books={filteredBooks} />
      </div>
    </div>
  );
}
