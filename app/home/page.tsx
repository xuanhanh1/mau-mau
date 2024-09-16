"use client";
import CustomSlider from "@/components/slide-show/custom-slide";
import Slideshow from "@/components/slide-show/slide-npm";
import { images, subImage } from "@/components/common/init-data/example-data";
import ContentHome from "@/components/compoment-ui/home/content-home";
import { IPost } from "@/interface/posts-interface";
import { useInfiniteQuery } from "react-query";
import callApi from "@/API/configApi";
import HeaderSub from "@/components/compoment-ui/header-sub";

export interface IHome {
  lstPost: IPost[];
}

export default function HomePage(props: IHome) {
  let { lstPost } = props;

  return (
    <>
      <HeaderSub />

      <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5 pb-5">
        <p className="py-4">Kham pha danh muc</p>
        <Slideshow />
      </div>

      <ContentHome lstPost={lstPost} />
    </>
  );
}
