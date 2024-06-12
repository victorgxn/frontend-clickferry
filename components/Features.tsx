"use client";
import { FEATURE } from "@/constants";
import Image from "next/image";
import Slider from "react-slick";
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";
import Link from "next/link";

const Features = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 right-0 lg:-top-24 lg:right-4 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
      >
        <RiArrowRightSLine />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="bg-white text-2xl p-3 inline-block rounded-lg shadow-md absolute top-1/2 lg:-top-24 lg:right-20 z-10 ring-1 ring-slate-900/5 hover:bg-primary"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  var settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="max-container padding-containe py-20 xl:py-32 bg-white" id="rutas">
      <div className="w-[90%] m-auto">
        <div className="mx-4">
          <h4 className="bold-18 text-secondary">Puertos</h4>
          <h3 className="h3 max-w-lg">Destinos disponibles</h3>
          <p className="max-w-lg text-gray-30">
            Te ofrecemos toda la información sobre los puertos para viajar en ferry. Selecciona el puerto de ferry y obtén información sobre su ubicación específica, algunos datos de interés, las conexiones establecidas con otros puertos, la información de salida y los puntos de información para el viajero para que puedas consultar y reservar las actividades que más te gusten.
          </p>
        </div>
        {/* CONTAINER */}
        <div className="pt-12">
          <Slider {...settings}>
            {FEATURE.map((feature) => (
              <FeatureItem
                key={feature.URL}
                URL={feature.URL}
                title={feature.title}
                des={feature.des}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  URL: string;
  title: string;
  des: string;
};

const FeatureItem = ({ URL, title, des }: FeatureItem) => {
  return (
    <div className="mx-4 overflow-hidden group">
      <Link href={"/"} className="overflow-hidden relative">
        <div className="overflow-hidden rounded-md">
          <Image
            src={URL}
            alt="img"
            height={600}
            width={510}
            className=" hover:scale-105 transition-all duration-700 overflow-hidden"
          />
        </div>
        <h4 className="capitalize regular-22 absolute top-6 left-4 text-white">
          {title}
        </h4>
        <p className="regular-18 absolute bottom-6 right-0 bg-tertiary text-white pl-4 pr-4 py-2 rounded-l-full group-hover:bg-secondary group-hover:!pr-8 transition-all duration-300">
          {des}
        </p>
      </Link>
    </div>
  );
};

export default Features;
