import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ClickOutWrapper from "@/components/click-out";
import SubMenu from "./sub-menu";

export default function MouseHoverPopover() {
  const [dropDown, setDropDown] = React.useState<boolean>(false);
  const handleCloseClick = () => {
    setDropDown(false);
  };

  return (
    <div
      className="flex flex-row gap-2 items-center hover:cursor-pointer relative h-[6vh]  "
      onMouseEnter={() => {
        setDropDown(true);
      }}
      onMouseLeave={() => setDropDown(false)}
    >
      <FormatListBulletedIcon />
      Danh muc
      <KeyboardArrowDownIcon />
      {dropDown && (
        <div
          className=" w-[300px] h-[500px] absolute top-10 left-0 drop-shadow-lg
          bg-[#fff] rounded-[4px] z-50 "
        >
          <SubMenu />
          <SubMenu />
        </div>
      )}
    </div>
  );
}
