import CartBook from "./cartBook";
import "./cartList.css";
import { useContext, useEffect } from "react";
import { BooksContext } from "../../pages/Context/booksContext";

export default function CartList({ carts }) {
  const context = useContext(BooksContext);

  useEffect(() => {
    context.getData();
  }, []);

  return (
    <div>
      <div className="cartTitles">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
      </div>

      {carts.map((book) => {
        return <CartBook book={book} />;
      })}
      <div className="cartTotal">
        <div></div>
        <h4>Subtotal</h4>
        <h4>
          $
          {context.carts
            ?.map((book) => book.price * book.quentity)
            ?.reduce((a, b) => a + b, 0)}
        </h4>
      </div>
    </div>
  );
}
