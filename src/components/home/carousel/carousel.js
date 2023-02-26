import "./carousel.css";
import Image1 from "./asset2.jpg";
import Image2 from "./asset5.jpg";
import Image3 from "./asset10.jpg";
import Image4 from "./asset12.jpg";
import Slide from "./slide";
import Dot from "./dot";
import { Link } from "react-router-dom";

export default function Carousel() {
  const slidesData = [
    {
      id: "img-1",
      dot_id: "img-dot-1",
      src: Image1,
      color: "#acb619e8",
      title: "Like a great cup of coffee",
      content:
        "Best book is not something one person can take credit for, but a culmination of efforts to bring something interesting and beneficial. ",

      prev: "img-4",
      next: "img-2",
    },
    {
      id: "img-2",
      dot_id: "img-dot-2",
      src: Image2,
      color: "#19b687e8",
      title: "Deciding what to read next?",
      content:
        "You’re in the right place. We’ll give you surprisingly insightful recommendations.",
      prev: "img-1",
      next: "img-3",
    },
    {
      id: "img-3",
      dot_id: "img-dot-3",
      src: Image3,
      color: "#b63819e8",
      title: "Large miscellaneous library!",
      content: "You can find all the types of books that you love and need.",

      prev: "img-2",
      next: "img-4",
    },
    {
      id: "img-4",
      dot_id: "img-dot-4",
      src: Image4,
      color: "#5a19b6e8",
      title: "Boozhoo! Welcome.",
      content: "Our books are lovingly chosen. Our store is tended with care.",

      prev: "img-3",
      next: "img-1",
    },
  ];
  return (
    <div>
      <div>
        <div className="carousel">
          <ul className="slides">
            {slidesData.map((slide) => {
              return (
                <>
                  <input
                    type="radio"
                    name="radio-buttons"
                    id={slide.id}
                    checked
                  />
                  <Slide slide={slide} />
                </>
              );
            })}
            <Link to="/categories">
              <button className="carouselButton">Explore More</button>
            </Link>
            <div className="carousel-dots">
              {slidesData.map((slide) => {
                return <Dot slide={slide} />;
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
