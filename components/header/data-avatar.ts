import { SvgIconProps } from "@mui/material";

export interface IMenuSub {
  icon: string;
  text: string;
  subText?: string;
}

export interface IMenu {
  title: string;
  array: IMenuSub[];
}

const menu: IMenu[] = [
  {
    title: "Quan ly don hang",
    array: [
      { icon: "/icons/buy.svg", text: "Don mua" },
      { icon: "/icons/sell.svg", text: "Don ban" },
      {
        icon: "/icons/store.svg",
        text: "Vi ban hang",
        subText: "Lien ket ngay",
      },
    ],
  },
  {
    title: "Tien ich",
    array: [
      { icon: "/icons/like.svg", text: "Tin dang da luu " },
      { icon: "/icons/search.svg", text: "Tim kiem da luu" },
      { icon: "/icons/review.svg", text: "Danh gia tu toi" },
    ],
  },
  {
    title: "Dich vu tra phi",
    array: [
      { icon: "/icons/money.svg", text: "Dong tot" },
      { icon: "/icons/pro.svg", text: "Goi PRO" },
      {
        icon: "/icons/history.svg",
        text: "Lich su giao dich",
      },
      {
        icon: "/icons/shop.svg",
        text: "Cua hang/Chuyen tran",
        subText: "Tao ngay",
      },
    ],
  },
  {
    title: "Uu dai khuyen mai",
    array: [{ icon: "/icons/discount.svg", text: "Cho tot uu dai" }],
  },
  {
    title: "Khac",
    array: [
      { icon: "/icons/setting.svg", text: "Cai dat tai khoan" },
      { icon: "/icons/help.svg", text: "Tro giup" },
    ],
  },
];

export default menu;
