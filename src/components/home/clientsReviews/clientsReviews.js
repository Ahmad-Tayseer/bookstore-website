import "./clientsReviews.css";

import image1 from "./5000-(1).jpg";
import image2 from "./5000-(2).jpg";
import image3 from "./5000-(3).jpg";
import image4 from "./5000-(4).jpg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

import { Autoplay, Pagination, Navigation, A11y } from "swiper";

export default function ClientsReviews() {
  return (
    <div>
      <h1 className="reviewTitle">What Clients Say</h1>
      <Swiper
        className="reviewSwiper"
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        a11y={true}
        modules={[Autoplay, Pagination, Navigation, A11y]}
      >
        <SwiperSlide className="reviewSlide">
          <div class="active">
            <div class="img">
              <img src={image1} alt="Profile_Picture" className="reviewImg" />
            </div>
            <h2>Ahmad Tayseer</h2>
            <p>
              "Excellent service. The books were wrapped securely and arrived in
              pristine condition. I sent an email after to books arrived to ask
              about the author, and I received a prompt reply."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="reviewSlide">
          <div class="active">
            <div class="img">
              <img src={image2} alt="Profile_Picture" className="reviewImg" />
            </div>
            <h2>Anas Raed</h2>
            <p>
              "I am so happy to find a site where I can shop for unusual items.
              I found what I wanted with ease and purchased it without a hitch.
              The packaging was phenomenal and my book arrived on time in
              perfect condition."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="reviewSlide">
          <div class="active">
            <div class="img">
              <img src={image3} alt="Profile_Picture" className="reviewImg" />
            </div>
            <h2>Mustafa Saadeh</h2>
            <p>
              This item was not available on Amazon, somehow, I located it on
              the publishers website..Awesome...!!!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="reviewSlide">
          <div class="active">
            <div class="img">
              <img src={image4} alt="Profile_Picture" className="reviewImg" />
            </div>
            <h2>Mohammad Tayseer</h2>
            <p>
              "Butler Books went above and beyond - great and friendly customer
              service and prompt delivery of my book. I highly recommend them.
              Many thanks!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
