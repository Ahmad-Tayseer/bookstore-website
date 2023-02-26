import "./cart.css";
import image from "./asset8.jpg";
import Cover from "../../components/cover/cover";
import CartList from "../../components/cart/cartList";
import { useContext } from "react";
import { BooksContext } from "../Context/booksContext";

export default function Cart() {
  const context = useContext(BooksContext);
  const page = "Cart";
  return (
    <div className="cartDiv">
      <Cover label={page} img={image} />
      <CartList carts={context.carts} />
    </div>
  );
}
