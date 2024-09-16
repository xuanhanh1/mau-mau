import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import "./index.css";
import Link from "next/link";

const Slideshow = () => {
  const lstCategores = useSelector((state: RootState) => state.categories.data);

  return (
    <div className="slide-container">
      <Slide slidesToScroll={2} slidesToShow={5} indicators={true}>
        {lstCategores?.map((slideImage, index) => (
          <Link href={`/categories/${slideImage._id}`} key={index}>
            <div className="flex flex-col gap-2 items-center text-[14px] ">
              <img
                src={slideImage.image}
                alt=""
                className="w-[50px] h-[50px] "
              />
              <span>{slideImage.name}</span>
            </div>
          </Link>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
