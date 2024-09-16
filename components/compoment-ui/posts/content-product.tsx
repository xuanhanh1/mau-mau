"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import moment from "moment";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { formatVND } from "@/components/common/format/format-number";

const ContentProduct = (props: any) => {
  let { data, lstSetting } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  const handleChangePhone = () => setIsClicked(true);

  const [thumbsSwiper, setThumbsSwiper] = useState<null | undefined>(null);

  return (
    <>
      <div className="detail-view flex flex-row bg-white xs:flex-col">
        {/* post detail image */}
        <div className="w-[300px] p-4 pt-5 xs:px-0 xs:py-0 ">
          <Swiper
            style={
              {
                // "--swiper-navigation-color": "#fff",
                // "--swiper-pagination-color": "#fff",
              }
            }
            spaceBetween={10}
            // navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {data?.attachments.map((item: any, index: number) => {
              if (item.type === "image") {
                return (
                  <SwiperSlide>
                    <img src={item.url} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <div className="mt-4"></div>
          <Swiper
            onSwiper={(swiper) => console.log(swiper)}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {data?.attachments.map((item: any, index: number) => {
              if (item.type === "image") {
                return (
                  <SwiperSlide>
                    <img src={item.url} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>

        {/* post detail content */}
        {data && (
          <div className="basis-2/3 p-4 xs:p-0">
            <div className="flex flex-col gap-[15px]">
              <span
                className="text-gray-800 text-[24px] xs:text-[18px] xs:px-2.5 
                xs:py-3 font-bold"
              >
                {data.title}
              </span>
              <div className="flex items-start ">
                <div className="flex flex-col flex-1 w-full">
                  {/**Price */}
                  <div className="flex flex-row justify-between items-center xs:px-2.5 xs:pt-0">
                    <span className="text-[#E5193B] text-[24px] font-bold xs:text-[18px]">
                      {formatVND(data.price)} đ
                    </span>
                    {/**Share btn mobile */}
                    <div className="flex gap-2">
                      <i className="icon-mm-share_1 text-[20px] hidden xs:block"></i>
                      <div
                        className="hover:cursor-pointer"
                        onClick={() => setIsHovered(!isHovered)}
                      >
                        <i
                          className={`${
                            isHovered ? "icon-mm-heart-solid" : "icon-mm-heart"
                          } text-primary-red text-[20px] font-bold hidden xs:block`}
                        ></i>
                      </div>
                    </div>
                  </div>
                  {/* product detail info */}
                  <div className="info flex flex-row gap-2 mt-5 w-full xs:flex-col-reverse xs:hidden">
                    <div className="main-info ">
                      {/* cho hãng thẳng hàng với giá tiêu đề  */}
                      <div className=" xs:border-b-4 xs:p-sm ">
                        {/* <span className="text-[18px]">Thông tin cơ bản</span> */}
                        <div>
                          {lstSetting &&
                            lstSetting?.length > 0 &&
                            lstSetting?.map((item: any, index: number) => {
                              if (data?.details[item?.name] != undefined) {
                                return (
                                  <div
                                    className="flex flex-row gap-2 items-center mb-3.5"
                                    key={index}
                                  >
                                    <i
                                      className={`${item?.icon} text-[20px]`}
                                    ></i>
                                    <span className=" text-gray-600 font-normal text-[14px]">
                                      {item?.label}: {data?.details[item.name]}
                                    </span>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shop */}
                {pathname === "/products/review" ? null : (
                  <div className="shop-info basis-2/5 rounded-sm border-gray-100 border-l-[1px] xs:border-0 pl-[15px] pb-[10px] xs:hidden mt-1">
                    {/* shop name */}
                    <div className="px-2.5 pb-2.5 border-b-gray-100 xs:border-y-2">
                      <div className="flex flex-row justify-between items-start gap-8 ">
                        <Link
                          href={
                            process.env.NEXT_PUBLIC_NEXTAUTH_URL +
                            "/user/userShop"
                          }
                          className="flex-row gap-2 flex items-center text-gray-900"
                        >
                          <div>
                            <i className="icon-mm-user-circle text-[48px]"></i>
                          </div>
                          ABC Mobile Store Biên Hòa
                        </Link>
                        {/* bo shop di */}
                        {/* <span className="flex-row gap-1.5 flex items-center font-normal text-[14px] text-primary-green hover:cursor-pointer">
                        <i className="icon-mm-store text-[20px] text-primary-green "></i>
                        Shop
                      </span> */}
                      </div>
                      <div className="flex flex-row gap-3 my-[15px]">
                        <div className="basis-1/3 flex flex-col items-center">
                          <div>
                            <span
                              className="flex lex-row gap-1 text-gray-900 
                            items-center content-center"
                            >
                              4.7 / 5.0
                              <i className="icon-mm-star-solid text-[15px] text-primary-yellow"></i>
                            </span>
                          </div>
                          <span className="text-[12px] text-gray-500">
                            77 đánh giá{" "}
                          </span>
                        </div>
                        <div
                          className="basis-1/3 flex flex-col items-center 
                        border-x-[1px] border-x-gray-100"
                        >
                          <span className=" text-[14px] font-normal text-gray-900 items-center">
                            15
                          </span>
                          <span className="text-[12px] font-normal text-gray-500">
                            Theo dõi
                          </span>
                        </div>
                        <div className="basis-1/3 flex flex-col items-center">
                          <span className=" text-[14px] font-normal text-gray-900 items-center">
                            96%
                          </span>
                          <span className="text-[12px] font-normal text-gray-500">
                            Phản hồi chat
                          </span>
                        </div>
                      </div>
                      {/* shop btn */}
                      <div className="mt-3.5 flex flex-row justify-between xs:mb-[5px] xs:gap-2.5">
                        <button
                          className="p-1 border-[1px] font-normal px-5 
                        text-primary-dark-blue text-[14px] rounded-md 
                        gap-1 flex flex-row hover:cursor-pointer items-center 
                        border-primary-blue hover:bg-primary-blue hover:text-gray-50 
                        btn-watch-shop xs:w-full xs:justify-center"
                        >
                          <i className="icon-mm-store text-[20px] text-primary-blue"></i>
                          Xem shop
                        </button>
                        <button
                          className="p-1 border-[1px] font-normal px-5 
                        text-primary-dark-blue text-[14px] rounded-md gap-1 flex 
                        flex-row hover:cursor-pointer items-center border-primary-blue 
                        hover:bg-primary-blue hover:text-gray-50 btn-watch-follow xs:w-full 
                        xs:justify-center"
                        >
                          <i className="icon-mm-plus font-bold text-[15px] text-primary-blue"></i>
                          Theo dõi
                        </button>
                      </div>
                    </div>

                    {/* shop button */}
                    <div className="px-2.5 xs:hidden">
                      <div className="border-t-[1px]">
                        <div
                          className=" border-[1px] 
                        border-primary-green w-full pl-5 mt-2.5 rounded-md py-1.5 
                        hover:bg-[#f0fef4] hover:cursor-pointer text-center"
                          onClick={handleChangePhone}
                        >
                          {isClicked ? (
                            <span className="text-primary-green leading-[15px] ">
                              0943711234
                            </span>
                          ) : (
                            <div className="flex flex-row gap-2.5 items-center">
                              <i className="icon-mm-phone text-[21px] text-primary-green"></i>
                              <div className="flex flex-col">
                                <span className="text-primary-green leading-[15px]">
                                  094371****
                                </span>

                                <span className="text-primary-green leading-[15px]">
                                  Bấm để hiện số
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className="flex flex-row gap-2.5 items-center border-[1px] 
                        border-primary-green w-full pl-5 mt-2.5 rounded-md py-1.5 
                        hover:cursor-pointer hover:bg-[#f0fef4]"
                        >
                          {/* <MessageGreen /> */}
                          <span className="text-primary-green leading-[15px]">
                            Chat với người bán
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="xs:flex gap-1 text-gray-400 items-center hidden xs:px-2.5">
                <i className="icon-mm-location text-[20px] font-bold"></i>
                Phường 15, Quận 10, TP Hồ Chí Minh
              </div>
              {/**Kiểm duyệt mobile */}
              <div className="gap-3 flex-row px-2.5 items-center hidden xs:flex">
                <div>
                  <i className="icon-mm-warranty-term text-[20px]"></i>
                </div>
                <span className="font-normal text-[14px] text-gray-600 mb-2.5">
                  Tin đăng này đã được kiểm duyệt.
                  <span className="text-primary-dark-blue hover:cursor-pointer">
                    Tìm hiểu thêm thêm
                  </span>
                </span>
              </div>
              {/**Share tin */}
              <div className="share hidden  flex-row items-center gap-2.5 mx-2.5 xs:hidden">
                <span className="text-[14px] font-normal text-gray-600">
                  Chia sẻ tin:{" "}
                </span>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-2 text-white"></i>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-2 text-white"></i>
                <i className="icon-mm-pinterest text-[20px] rounded-full bg-[#CC2127] p-2 text-white"></i>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-2 text-white"></i>
                <i className="icon-mm-twitter text-[20px] rounded-full bg-[#55ACEE] p-2 text-white"></i>
                <i className="icon-mm-link text-[20px] rounded-full bg-[#242424] p-2 text-white"></i>
              </div>
            </div>

            {/**Share */}
            <div className="flex items-end ">
              <div className="share flex flex-row items-center gap-2.5 mt-5 xs:hidden border-gray-100 border-r pr-4">
                {/* bỏ chữ tin sửa size thành 25 */}
                <span className="text-[14px] font-normal text-gray-600">
                  Chia sẻ:{" "}
                </span>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-1 text-white"></i>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-1 text-white"></i>
                <i className="icon-mm-pinterest text-[20px] rounded-full bg-[#CC2127] p-1 text-white"></i>
                <i className="icon-mm-facebook text-[20px] rounded-full bg-[#25479B] p-1 text-white"></i>
                <i className="icon-mm-twitter text-[20px] rounded-full bg-[#55ACEE] p-1 text-white"></i>
                <i className="icon-mm-link text-[20px] rounded-full bg-[#242424] p-1 text-white"></i>
              </div>
              {/**Like */}
              <div
                className="group flex items-center justify-center gap-2 
                  text-gray-600 rounded-full
                  px-2 py-1 hover:cursor-pointer btn-map ml-4 xs:hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <i
                  className={`${
                    isHovered ? "icon-mm-heart-solid" : "icon-mm-heart"
                  } text-primary-red text-[24px] font-bold`}
                ></i>
                <span className="font-normal text-[16px] leading-5">
                  Đã thích (334)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* content */}
      <div className="content mt-5 p-5 bg-gray-white xs:mt-0 xs:p-2.5">
        {/* <p className="font-bold text-[18px] text-gray-600">Mô tả chi tiết</p> */}
        {/* content */}
        <div className=" flex flex-row gap-16 xs:flex-col">
          <div className="basis-2/3 p-2.5 text-gray-600">
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: data?.content }}
            />
            {/*table  address */}
            <div className="border-t-[1px] border-t-gray-100 mt-14 pt-3.5 mb-2.5 xs:hidden">
              <table className="table-fixed">
                <thead>
                  <tr>
                    <th className="w-[125px] text-[14px] font-normal text-gray-400 text-left">
                      Ngày đăng
                    </th>
                    <th className="text-[14px] font-normal text-gray-400 text-left">
                      Địa chỉ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-[14px] font-normal text-gray-600">
                      {data && moment(data?.createdAt).format("DD/MM/YYYY")}
                    </td>
                    <td className="text-[14px] font-normal text-gray-600">
                      {data && data?.details?.address}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/**Kiểm duyệt */}
            <div
              className="gap-3 flex flex-row py-2.5 border-gray-100 mt-2 pt-2 
              items-center border-t-gray-100 border-t-[1px] xs:hidden"
            >
              <div>
                <i className="icon-mm-warranty-term text-[40px] text-primary-green"></i>
              </div>
              <span className="font-normal text-[14px] text-gray-600 mb-2.5">
                Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng báo
                cáo tin đăng hoặc liên hệ CSKH để được trợ giúp. &nbsp;
                <span className="text-primary-dark-blue hover:cursor-pointer">
                  Xem thêm
                </span>
              </span>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center xs:grid xs:grid-cols-2 xs:hidden">
              <button className="px-2.5 bg-gray-100 py-1 rounded-md">
                Báo tin không hợp lệ
              </button>
              <button className="px-2.5 bg-gray-100 py-1 rounded-md">
                Báo tin đã bán
              </button>
              <button
                className="px-2.5 py-1 border-[1px] border-primary-green 
                rounded-md text-primary-green xs:col-span-2"
              >
                Đăng nhanh - Bán gọn
              </button>
            </div>
          </div>
          {/* ads */}
          <div className="basis-1/3 flex justify-end max-h-[480px] xs:hidden">
            {/* <Image src={ADS} alt="ads" width={300} height={480} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentProduct;
