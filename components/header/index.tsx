"use client";

import SearchBox from "@/components/search";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PopupMenu from "@/components/header/popup-menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import AvatarMenu from "@/components/header/popup-menu/avatar-menu";

export default function Header() {
  return (
    <div className="bg-[#FFBA00] px-10 py-4 sticky top-0 ">
      <div className="flex flex-row justify-between   text-[12px] text-[#222] ">
        <div className="flex flex-row gap-5 ">
          <span>Chợ Tốt</span>
          <span>Nhà Tốtt</span>
          <span>Chợ Tốt Xe</span>
          <span>Việc Làm Tốt</span>
        </div>
        <div className="flex flex-row gap-5">
          <span>Đóng góp ý kiến</span>
          <span>Tải ứng dụng</span>
          <span>Trợ giúp</span>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between mt-2 ">
        <div>Cho tot</div>
        <div>
          <PopupMenu />
        </div>
        <div>
          <SearchBox />
        </div>
        <div className="flex flex-row gap-4 hover:cursor-pointer ">
          <AllInboxIcon sx={{ color: "#644F18" }} />
          <ShoppingBasketIcon sx={{ color: "#644F18" }} />
          <MessageIcon sx={{ color: "#644F18" }} />
          <NotificationsIcon sx={{ color: "#644F18" }} />
          <AvatarMenu />
        </div>

        <div className="flex flex-row gap-2 bg-[#E56700] rounded-[4px] text-[14px] items-center px-4 text-[#fff] hover:cursor-pointer  ">
          <DynamicFeedIcon />
          <div className="flex flex-row gap-1 items-center p-2 font-bold text-[#fff] ">
            Dang tin
          </div>
        </div>
      </div>
    </div>
  );
}
