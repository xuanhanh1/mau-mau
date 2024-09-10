import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SubMenu() {
  const [hoverMenu, setHoverMenu] = useState<boolean>(false);

  return (
    <>
      <div
        className="flex flex-row items-center justify-between px-5 py-2 hover:bg-[#f2f2f2] rounded-[4px] "
        onMouseEnter={() => {
          setHoverMenu(true);
        }}
        onMouseLeave={() => {
          setHoverMenu(false);
        }}
      >
        <div className="flex flex-row gap-2">
          icons
          <p>Bat dong san</p>
        </div>
        <div>
          <ChevronRightIcon />
        </div>
        {hoverMenu && (
          <div className="absolute left-[305px] top-0 w-[300px] h-[500px] bg-[#fff] rounded-[8px] drop-shadow-lg ">
            <p className="px-5 py-2 hover:bg-[#f2f2f2] rounded-[4px] ">
              Nha cua
            </p>
          </div>
        )}
      </div>
    </>
  );
}
