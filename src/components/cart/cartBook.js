import "./cartBook.css";
import axios from "axios";
import cookie from "react-cookies";
import Swal from "sweetalert2";
import { useContext } from "react";
import { BooksContext } from "../../pages/Context/booksContext";

export default function CartBook({ book }) {
  const context = useContext(BooksContext);

  const changeCart = (e) => {
    context.updateCart(book.bookID, e);
  };

  const deleteCart = () => {
    const token = cookie.load("Token");
    const user = cookie.load("User");
    let arr = user.cart;
    if (arr.includes(book.bookID))
      arr = arr.filter((cart) => cart !== book.bookID);
    axios
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
        console.log(data.data);
        cookie.save("User", data.data);
        context.getData();
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Book removed from cart.",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="cartElement">
        <div className="productInfo">
          <img src={book.image} alt="Book_Image" />
          <h4>{book.name}</h4>
        </div>
        <h4>${book.price}</h4>
        <div className="input_remove">
          <input
            type="number"
            min={1}
            defaultValue={book.quentity}
            onChange={(e) => changeCart(e)}
          />
          <h4 className="removeBtn" onClick={deleteCart}>
            Remove
          </h4>
        </div>
        <h4>${book.quentity * book.price}</h4>
      </div>
    </div>
  );
}
