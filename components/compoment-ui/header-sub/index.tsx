"use client";
import CustomSlider from "@/components/slide-show/custom-slide";
import { images, subImage } from "@/components/common/init-data/example-data";

export default function HeaderSub(props: any) {
  return (
    <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md ">
      <CustomSlider>
        {images.map((image: any, index: number) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>

      <div className="flex flex-row justify-between items-center px-2 mt-4 mb-2 ">
        {subImage.map((item: any, index: number) => {
          return (
            <div
              className="text-[14px] text-center flex flex-col gap-2 justify-center items-center "
              key={index}
            >
              <img src={item.icon} alt="" className="w-[40px] h-[40px] " />
              <p>{item.title} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
