import "./topSellingList.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../card/card";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
} from "swiper";

export default function TopSellingList({ books }) {
  const filteredBooks = books.filter((book) => book.topSelling === true);

  return (
    <div className="sliderDiv">
      <h1>Top Selling Books</h1>
      <Swiper
        className="swiper"
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        grabCursor={true}
        mousewheel={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          1200: {
            width: 1200,
            slidesPerView: 4,
            slidesPerGroup: 1,
          },

          992: {
            width: 992,
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          576: {
            width: 576,
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          300: {
            width: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        fadeEffect={true}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[
          Keyboard,
          Scrollbar,
          Navigation,
          Pagination,
          Autoplay,
          Mousewheel,
        ]}
      >
        {filteredBooks.map((book) => {
          return (
            <SwiperSlide className="swiperSlide">
              <Card book={book} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
