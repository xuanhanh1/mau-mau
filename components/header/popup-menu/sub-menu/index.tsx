import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SubMenu(props: any) {
  let { data, lstItem } = props;
  const [hoverMenu, setHoverMenu] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex flex-row gap-1 relative "
        onMouseEnter={() => {
          setHoverMenu(true);
        }}
        onMouseLeave={() => {
          setHoverMenu(false);
        }}
      >
        <div className="flex flex-row items-center justify-between px-5 py-2 hover:bg-[#f2f2f2]  w-[300px] bg-[#fff]   ">
          <div className="flex flex-row gap-2">
            <i className="mm-1-icon1-building"></i>
            <p>{data.name}</p>
          </div>
          <div>
            <ChevronRightIcon />
          </div>

          {hoverMenu && (
            <div className=" w-[250px] h-[624px]  overflow-y-auto  bg-[#fff] rounded-[8px] drop-shadow-lg fixed top-0 overflow-y-auto  left-[305px] z-50  ">
              {lstItem?.map((i: any, index: number) => {
                return (
                  <p
                    className="px-5 py-2 hover:bg-[#f2f2f2] rounded-[4px] "
                    key={index}
                  >
                    {i.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
