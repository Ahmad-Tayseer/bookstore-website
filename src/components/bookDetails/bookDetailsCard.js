import "./bookDetailsCard.css";
import Swal from "sweetalert2";
import axios from "axios";
import cookie from "react-cookies";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../../pages/Context/booksContext";

export default function BookDetailsCard({ book }) {
  const context = useContext(BooksContext);
  const times = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const addCart = async () => {
    const token = cookie.load("Token");
    if (token) {
      const user = cookie.load("User");
      let arr = user.cart;
      if (!arr.includes(book.id)) arr.push(book.id);
      await axios
        .put(
          "http://localhost:5000/userCart",
          { cart: arr },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          cookie.save("User", data.data);
          context.getData();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Book added to cart successfully.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((err) =>
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Book already in the cart!",
            showConfirmButton: false,
            timer: 2500,
          })
        );
    } else {
      navigate("/signin");
    }
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div id="detailsContainer">
        <div class="product-image">
          <img src={book.image} alt="Book" />
        </div>
        <div class="book-details">
          <h1>{book.name}</h1>
          <h4>by {book.author}</h4>
          <span class="hint-star star">
            {times.map((id) => (
              <i
                class={id <= book.rating ? "fa fa-star" : "fa fa-star-o"}
                aria-hidden="true"
              ></i>
            ))}
          </span>
          <h3>Description</h3>
          <p class="information">{book.description}</p>

          <div class="control">
            <button class="btn">
              <span class="price">{book.price}</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy" onClick={addCart}>
                Get Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
