"use client";
import CustomSlider from "@/components/slide-show/custom-slide";
import Slideshow from "@/components/slide-show/slide-npm";
import { images, subImage } from "@/components/common/init-data/example-data";
import ContentHome from "@/components/compoment-ui/home/content-home";
import { IPost } from "@/interface/posts-interface";
import { useInfiniteQuery } from "react-query";
import callApi from "@/API/configApi";

export interface IHome {
  lstPost: IPost[];
}
export default function Home(props: IHome) {
  let { lstPost } = props;

  return (
    <>
      <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md ">
        <CustomSlider>
          {images.map((image, index) => {
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>

        <div className="flex flex-row justify-between items-center px-2 mt-4 mb-2 ">
          {subImage.map((item: any, index: number) => {
            return (
              <div className="text-[14px] text-center flex flex-col gap-2 justify-center items-center ">
                <img src={item.icon} alt="" className="w-[40px] h-[40px] " />
                <p>{item.title} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5 pb-5">
        <p className="py-4">Kham pha danh muc</p>
        <Slideshow />
      </div>

      <ContentHome lstPost={lstPost} />
    </>
  );
}
