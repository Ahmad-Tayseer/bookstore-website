import { createContext, useEffect, useState } from "react";
import axios from "axios";
import cookie from "react-cookies";
export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [carts, setCarts] = useState([]);
  const [favourite, setFavourite] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);

  function getData() {
    let cartArr = cookie.load("User")?.cart || [];
    axios
      .get("http://localhost:5000/books")
      .then((data) => {
        console.log(data.data);
        setBooks(data.data);
        setCarts(() => {
          const arr = [];
          data.data.forEach((book) => {
            if (cartArr.includes(book.id))
              arr.push({
                bookID: book.id,
                name: book.name,
                image: book.image,
                price: book.price,
                quentity: 1,
              });
          });
          return arr;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateCart(id, e) {
    const newArr = [...carts];
    let index;
    newArr.forEach((book, idx) => {
      if (book.bookID === id) {
        return (index = idx);
      }
    });
    newArr[index].quentity = e.target.value;
    setCarts(newArr);
  }

  useEffect(() => {
    getData();
  }, []);

  const state = {
    books,
    carts,
    minPrice,
    maxPrice,
    minRating,
    maxRating,
    favourite,
    getData,
    updateCart,
    setMinPrice,
    setMaxPrice,
    setMinRating,
    setMaxRating,
    setFavourite,
  };

  return (
    <BooksContext.Provider value={state}>
      {props.children}
    </BooksContext.Provider>
  );
};
