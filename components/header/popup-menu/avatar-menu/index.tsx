import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import AddCardTwoToneIcon from "@mui/icons-material/AddCardTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import ClickOutWrapper from "@/components/click-out";
import Icon from "@mui/material/Icon";
import menu from "@/components/header/data-avatar";
import { IMenu, IMenuSub } from "@/components/header/data-avatar";
import FontAwesomeSvgIcon from "@/components/common/font-awsome";

export default function AvatarMenu() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="ralative">
      <div
        className="flex flex-row gap-3 items-center "
        onClick={() => setClick(true)}
      >
        <AccountCircleOutlinedIcon sx={{ color: "#644F18" }} />
        <ArrowDropDownOutlinedIcon sx={{ color: "#644F18" }} />
      </div>
      {click && (
        <ClickOutWrapper onClickOutside={() => setClick(false)}>
          <div className="w-[300px] h-[600px] absolute top-24 right-20  py-4 rounded-[4px] bg-[#fff] drop-shadow-lg overflow-y-auto ">
            <div className="flex flex-row gap-2 items-center py-2 px-4">
              <ContactEmergencyOutlinedIcon />
              <p className="text-[14px] font-bold  "> Dang nha/ dang ky</p>
            </div>

            <div className="px-4">
              <div className="flex flex-row gap-2 items-center justify-between py-2  rounded-[4px] bg-[#306BD9] ">
                <div className="flex flex-row gap-2 ">
                  <AddCardTwoToneIcon sx={{ color: "#644F18" }} />
                  <p className="text-[#fff] font-normal  ">
                    Nap dong tot gia linh hoat
                  </p>
                </div>
                <ChevronRightTwoToneIcon sx={{ color: "#644F18" }} />
              </div>
            </div>
            {menu.map((item: IMenu, index: number) => {
              return (
                <>
                  <p
                    className="py-2 px-4 bg-[#F5F5F5] text-[12px] font-bold text-[#E1B78B] mt-4 "
                    key={index}
                  >
                    {item.title}
                  </p>
                  <div className=" py-2">
                    {item.array.map((i: IMenuSub, j: number) => {
                      return (
                        <div
                          className="flex flex-row gap-2 items-center py-2 px-4 text-[14px] text-[#222] "
                          key={j}
                        >
                          <img
                            src={i.icon}
                            alt=""
                            className="w-[25px] h-[25px] "
                          />
                          <span>{i.text}</span>
                          <span>{i.subText}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </ClickOutWrapper>
      )}
    </div>
  );
}
