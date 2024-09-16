"use client";

import { IPost } from "@/interface/posts-interface";
import React, { useEffect, useRef, useState } from "react";

export interface IProductsContent {
  data: IPost | null | undefined;
}

export default function ProductsContent(props: IProductsContent) {
  let { data } = props;
  console.log("data product content", data);

  return (
    <>
      <div>11111</div>
    </>
  );
}
