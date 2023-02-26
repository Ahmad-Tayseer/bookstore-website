import { useContext } from "react";
import { BooksContext } from "../../pages/Context/booksContext";
import cookie from "react-cookies";
export default function Filter() {
  const context = useContext(BooksContext);
  const user = cookie.load("User");
  return (
    <div className="filter">
      <div className="favouriteFilter">
        <input
          type="checkbox"
          onChange={user ? () => context.setFavourite(!context.favourite) : []}
        />
        <h4>Favourite Books</h4>
      </div>
      <div className="numberFilter">
        <div className="numberFilterSub">
          <h4>Filter by Price</h4>
          <div className="inputFilter">
            <input
              type="number"
              placeholder="Min"
              min={0}
              max={context.maxPrice}
              onChange={user ? (e) => context.setMinPrice(e.target.value) : []}
            />
            <input
              type="number"
              placeholder="Max"
              min={context.minPrice}
              max={1000}
              onChange={user ? (e) => context.setMaxPrice(e.target.value) : []}
            />
          </div>
        </div>
        <div className="numberFilterSub">
          <h4>Filter by Rating</h4>
          <div className="inputFilter">
            <input
              type="number"
              placeholder="Min"
              min={0}
              max={context.maxRating}
              onChange={user ? (e) => context.setMinRating(e.target.value) : []}
            />
            <input
              type="number"
              placeholder="Max"
              min={context.minRating}
              max={5}
              onChange={user ? (e) => context.setMaxRating(e.target.value) : []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
