import "./card.css";
import { ImHeart } from "react-icons/im";
import Swal from "sweetalert2";
import axios from "axios";
import cookie from "react-cookies";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BooksContext } from "../../pages/Context/booksContext";
export default function Card({ book }) {
  const context = useContext(BooksContext);
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

  const addFavourite = async () => {
    const token = cookie.load("Token");
    if (token) {
      const user = cookie.load("User");
      let arr = user.favourite;
      if (arr.includes(book.id)) arr = arr.filter((fav) => fav !== book.id);
      else arr.push(book.id);

      await axios
        .put(
          "http://localhost:5000/userFav",
          { favourite: arr },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          cookie.save("User", data.data);
          context.getData();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigate("/signin");
    }
  };

  return (
    <div>
      <div className="product-card">
        <div className="add-to-cart" onClick={addCart}>
          <i className="ion-android-add"></i>
          <span>Add to Cart</span>
        </div>
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={book.image} alt="Book cover" />
        </div>
        <div className="product-details">
          <Link
            style={{ textDecoration: "none" }}
            to={`/categories/${book.id}`}
          >
            <h4>{book.name} </h4>
          </Link>
          <span className="product-catagory">by {book.author}</span>
          <div className="product-bottom-details">
            <div className="product-price">
              <small>${5 + +book.price}</small>${book.price}
            </div>
            <div className="product-links" onClick={addFavourite}>
              <span>
                <ImHeart
                  style={
                    cookie.load("User")?.favourite?.includes(book.id) && {
                      color: "#ff4b2b",
                    }
                  }
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
