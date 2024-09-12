import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SubMenuHover(props: any) {
  let { data } = props;

  return (
    <div className=" w-[300px] h-[500px] bg-[#fff] rounded-[8px] drop-shadow-lg ">
      <p className="px-5 py-2 hover:bg-[#f2f2f2] rounded-[4px] ">Nha cua</p>
    </div>
  );
}
