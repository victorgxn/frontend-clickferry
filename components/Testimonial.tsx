"use client";

import { TESTIMONIAL } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import Accordion from "./Accordion";

const Testimonial = () => {

  const [open, setOpen] = useState(false)

  var settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="padding-container max-container py-8 bg-white relative mb-14" id="Opiniones">
      <div className="flex flex-col lg:flex-row gap-y-8">
        {/* left */}
        <div className="">
            <h4 className="bold-18 text-secondary">Clientes satisfechos</h4>
            <h3 className="h3 max-w-lg">Testimonios</h3>
            <div className="max-w-[666px]">
              <Slider {...settings}>
                {TESTIMONIAL.map((testimonial) => (
                  <TestimonialItem
                    key={testimonial.desc}
                    title={testimonial.title}
                    URL={testimonial.URL}
                    desc={testimonial.desc}
                  />
                ))}
              </Slider>
            </div>
        </div>
        {/* right */}
        <div>
          <Accordion />
        </div>
      </div>
    </section>
  );
};

type TestimonialItem = {
  desc: string;
  URL: string;
  title: string;
};


const TestimonialItem = ({ desc, title, URL }: TestimonialItem) => {
  return (
      <div className="my-8 rounded-md z-10">
          <div className="pb-6">
              <Image
                  src={URL}
                  alt="user"
                  height={77}
                  width={77}
                  className="rounded-full mb-4"
              />
              <div>
                  <div className="medium-20 text-secondary">{title}</div>
              </div>
          </div>
          <span className="text-3xl -z-10 ">
        <FaQuoteLeft/>
      </span>
          <p className="max-w-lg pt-3 text-gray-50">"{desc}"</p>
          <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star"/>
          </div>
      </div>
  );
};

export default Testimonial;
