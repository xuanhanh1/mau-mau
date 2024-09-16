"use client";

import { IPost } from "@/interface/posts-interface";
import { IProducts } from "@/interface/products-interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import LinkTo from "../link-to";

export interface IProductLink {
  data: IPost | null | undefined;
  product: IProducts | null | undefined;
}

const ProductLink = (props: IProductLink) => {
  let { data, product } = props;

  let arrLink = [
    {
      label: "Cho tot",
      link: "/",
    },
    {
      label: `${product?.name}`,
      link: `/${product?.name}`,
    },
    {
      label: `${product?.name} ${data?.details?.province?.name}`,
      link: `/${product?.name} ${data?.details?.province?.name}`,
    },
    {
      label: `${product?.name} ${data?.details?.district?.name}`,
      link: `/${product?.name} ${data?.details?.district?.name}`,
    },
    {
      label: `${data?.title}`,
      link: ``,
    },
  ];
  return <LinkTo arrLink={arrLink} />;
};

export default ProductLink;
