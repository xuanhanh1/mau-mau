"use client";
import { IPost } from "@/interface/posts-interface";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ContentProduct from "./content-product";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductLink from "./product-link";

export interface IPostContent {
  data: IPost | null | undefined;
}

export default function PostsContent(props: IPostContent) {
  let { data } = props;
  const ref = useRef(null);
  const lstProducts = useSelector((state: RootState) => state.products.data);
  const lstCategories = useSelector(
    (state: RootState) => state.categories.data
  );
  const [showMoreRes, setShowMoreRes] = useState(false);
  const [lstSetting, setLstSetting] = useState<any>([]);

  useEffect(() => {
    if (!lstCategories || !lstProducts) return;
    let product = lstProducts?.find((item: any) => {
      return item.id_old === data?.productId_old;
    });

    let arrDetail = product?.setting.map((item: any) => {
      return {
        ...item,
        value: data?.details[item.name],
      };
    });

    setLstSetting(arrDetail);
  }, [lstProducts, lstCategories]);

  return (
    <div className="container  max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5">
      {/* banner */}

      <img
        src="https://file.maumau.vn/public/maumau/z:889748504921848899/1690602737416/1080-b4471ea3-bbb5-404d-9a97-b62e9ca987c3.jpg"
        alt=""
        className="w-[1200px] h-[250px] "
      />
      <ProductLink
        product={lstProducts?.find((item: any) => {
          return item.id_old === data?.productId_old;
        })}
        data={data}
      />

      <ContentProduct data={data} lstSetting={lstSetting} />

      {/* product control mobile */}
      <div ref={ref} className="relative z-[1000] hidden xs:block">
        <div className="fixed text-center  bottom-0 left-0 w-full bg-white">
          {showMoreRes && (
            <div className="rounded-t-lg py-2">
              <div
                className="flex flex-row justify-between items-center py-2 border-b-[1px] 
              border-b-gray-200 px-2"
              >
                <div></div>
                <div className="font-bold">Chức năng khác</div>
                <div onClick={() => setShowMoreRes(false)}>
                  <i className="icon-mm-times text-[20px] "></i>
                </div>
              </div>
              <div className="py-2.5 px-3.5">
                <div className="flex flex-row gap-1 items-center ">
                  <i className="icon-mm-heart text-[16px] "></i>
                  <span>Lưu tin đăng</span>
                </div>
                <div className="flex flex-row gap-1 items-center py-2.5 ">
                  <i className="icon-mm-star-solid text-[16px]"></i>
                  <span>Đánh giá</span>
                </div>
                <div className="flex flex-row gap-1 items-center ">
                  <i className="icon-mm-share_1 text-[16px]"></i>
                  <span>Chia sẻ</span>
                </div>
              </div>
            </div>
          )}

          <div
            className="h-[60px] grid grid-cols-3 justify-center items-center  
          border-[1px] border-gray-200 shadown-xl"
          >
            <div className="border-x-[1px] h-full py-2.5">
              {" "}
              <i className="icon-mm-comment-chat text-[22px] font-bold"></i>
              <p className="text-[10px]">Chat</p>
            </div>
            <div className="h-full py-2.5">
              <i className="icon-mm-sms text-[22px]"></i>
              <p className="text-[10px]">Nhắn tin</p>
            </div>
            <div className="bg-primary-green h-full py-2.5">
              <i className="icon-mm-phone text-white text-[22px]"></i>
              <p className="text-[10px] text-white">Gọi điện</p>
            </div>
          </div>
        </div>
      </div>

      {/* similar */}
      {/* <div className="p-2.5 mt-5 bg-gray-white xs:mt-1">
      <p className="font-bold text-gray-600 text-[18px] mb-3.5">
        Tin rao khác của ABC Mobile Store
      </p>
      <SwiperResponsive data={data} />
    </div>
    <div className="mb-5">
      <About />
    </div> */}
    </div>
  );
}
