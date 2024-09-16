import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SubMenu from "./sub-menu";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { ICategories } from "@/interface/categories-interface";

export default function MouseHoverPopover() {
  const [dropDown, setDropDown] = React.useState<boolean>(false);
  const lstCategories = useSelector(
    (state: RootState) => state.categories.data
  );
  const lstProducts = useSelector((state: RootState) => state.products.data);
  const [newLst, setNewLst] = useState<any>();

  React.useEffect(() => {
    if (
      lstCategories &&
      lstCategories.length > 0 &&
      lstProducts &&
      lstProducts.length > 0
    ) {
      let newLst = lstCategories.map((item: any) => {
        let items: any = [];
        lstProducts.forEach((i: any) => {
          if (item.id_old === i.categoryId_old) {
            items.push(i);
          }
        });
        return {
          ...item,
          products: items,
        };
      });
      setNewLst(newLst);
    }
  }, [lstProducts, lstCategories]);

  const handleCloseClick = () => {
    setDropDown(false);
  };

  return (
    <div
      className="flex flex-row gap-2 items-center hover:cursor-pointer relative h-[6vh] relatve  "
      onMouseEnter={() => {
        setDropDown(true);
      }}
      onMouseLeave={() => setDropDown(false)}
    >
      <FormatListBulletedIcon />
      Danh muc
      <KeyboardArrowDownIcon />
      {dropDown && (
        <div className="h-[500px] absolute top-10 left-0 drop-shadow-lg z-50  w-[560px] overflow-y-auto  ">
          <div className="overflow-y-auto">
            {newLst?.map((item: ICategories, index: number) => {
              return (
                <SubMenu key={index} data={item} lstItem={item.products} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
