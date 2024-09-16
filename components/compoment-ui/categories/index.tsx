"use client";
import { IPost } from "@/interface/posts-interface";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import HeaderSub from "@/components/compoment-ui/header-sub";
import { IProducts } from "@/interface/products-interface";
import ContentScrollInfinite from "../content-scroll-infinite";
import Box from "@mui/material/Box";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { ICategories } from "@/interface/categories-interface";
import LinkTo from "../link-to";
import { ILink } from "@/components/compoment-ui/link-to";
import Link from "next/link";

export interface ICategoryContent {
  category: ICategories | null | undefined;
  lstProducts: IProducts[] | null | undefined;
  lstPosts: IPost[] | null | undefined;
}

export interface ITab {
  label: string;
  isActive?: boolean;
  icon: string;
  index: number;
}
const tabs: ITab[] = [
  {
    label: "Danh cho ban",
    icon: "/icons/like.svg",
    isActive: true,
    index: 1,
  },
  {
    label: "Tin dang moi",
    icon: "/icons/new.svg",
    isActive: true,
    index: 2,
  },
];

export default function CategoryContent(props: ICategoryContent) {
  let { category, lstProducts, lstPosts } = props;
  const [tabActive, setTabActive] = useState<number>(1);

  const arrLink: ILink[] = [
    {
      label: "Cho tot",
      link: "/",
    },
    {
      label: `${category?.name}`,
      link: `/${category?.name}`,
    },
  ];

  return (
    <>
      <div className="container  max-w-[960px] mx-auto  py-2 mt-1 drop-shadow-md mt-5">
        <LinkTo arrLink={arrLink} />
      </div>
      <HeaderSub />
      <div className="container  max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5">
        <p className="text-[14px] font-bold py-2 ">Danh muc noi bat</p>
        <div className="flex flex-row gap-10 justify-start w-full  py-4 px-2 overflow-x-auto">
          {lstProducts?.map((item: IProducts, index: number) => {
            return (
              <Link href={`/products/${item.id_old}`}>
                <div
                  className="text-[14px] text-center flex flex-col gap-2 justify-center items-center "
                  key={index}
                >
                  <img src={item.image} alt="" className="w-[40px] h-[40px] " />
                  <p className="text-nowrap">{item.name} </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5">
        <p className="text-[14px] font-bold  ">Goi y hom nay</p>

        <div className="flex flex-row  items-center gap-4 mb-4  ">
          {tabs.map((item: ITab, index: number) => {
            return (
              <div
                className={`flex flex-col gap-3 text-[14px] font-medium items-center hover:cursor-pointer rounded-[4px] p-4  border-[#FF8800] 
                  ${tabActive == item.index && "bg-[#FFF4E0] border-b-[4px] "}
                  `}
                onClick={() => setTabActive(item.index)}
                key={index}
              >
                <img src={item.icon} alt="" className="w-[30px] h-[30px] " />
                <p className="font-bold text-[12px] text-[#FF8800]  ">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {tabs.map((item: ITab, index: number) => {
          if (item.index == 1) {
            return (
              <div key={index}>
                <ContentScrollInfinite
                  api={`api/post/category/${category?.id_old}`}
                  lstPost={lstPosts}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
