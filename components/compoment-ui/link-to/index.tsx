"use client";

import { IPost } from "@/interface/posts-interface";
import { IProducts } from "@/interface/products-interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export interface ILink {
  label: string;
  link: string;
}

export interface ILinkTo {
  arrLink: ILink[];
}

const LinkTo = (props: ILinkTo) => {
  let { arrLink } = props;

  return (
    <div className="flex flex-row items-center  ">
      {arrLink?.map((item: any, index: number) => {
        return (
          <div className="flex flex-row gap-2 text-[10px] items-center font-medium ">
            <Link href={item.link} key={index}>
              {item.label}
            </Link>

            <div className={index == arrLink.length - 1 ? "hidden" : ""}>
              <KeyboardDoubleArrowRightIcon />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinkTo;
