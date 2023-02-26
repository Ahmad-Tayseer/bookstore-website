import Carousel from "../../components/home/carousel/carousel";
import ClientsReviews from "../../components/home/clientsReviews/clientsReviews";
import TopSellingList from "../../components/home/topSellingList/topSellingList";
import "./home.css";
import { useContext } from "react";
import { BooksContext } from "../Context/booksContext";

export default function Home() {
  const context = useContext(BooksContext);
  return (
    <div className="homeDiv">
      <div className="firstDiv">
        <Carousel />
        <TopSellingList books={context.books} favourites={context.favourites} />
      </div>
      <div className="clientsDiv">
        <ClientsReviews />
      </div>
    </div>
  );
}
