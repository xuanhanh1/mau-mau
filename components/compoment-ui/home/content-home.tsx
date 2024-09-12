import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IPost } from "@/interface/posts-interface";
import "./index.css";
import { formatVND, formatDate } from "../../common/format/format-number";
import InfiniteScroll from "react-infinite-scroll-component";
import callApi from "@/API/configApi";
import CircularProgress from "@mui/material/CircularProgress";

export interface IContentHome {
  lstPost: IPost[];
}

export default function ContentHome(props: IContentHome) {
  let { lstPost } = props;
  const [items, setItems] = useState<any | []>(lstPost);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const [page, setPage] = useState(1);
  const [isLoadMore, setLoadMore] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // setTimeout(() => {

      // }, 120000);
      await callApi(
        `api/post?limit=10&skip=${page * 10}&details=0`,
        "GET"
      ).then((res) => {
        console.log("[...prevItems, ...res.data.data]", [
          ...items,
          ...res.data.data,
        ]);

        setItems((prevItems: any) => [...prevItems, ...res.data.data]);
        if (page < res.data.total / 10) {
          setPage((prevPage) => prevPage + 1);
        } else {
          setLoadMore(false);
        }
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5">
      <p className="py-2 font-semibold text-[14px]  ">Dang tin moi</p>

      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={isLoadMore} // Replace with a condition based on your data source
        loader={
          <div className="flex items-center justify-center py-2 w-full">
            {" "}
            <CircularProgress />
          </div>
        }
        endMessage={<p>No more data to load.</p>}
      >
        <div className="grid grid-cols-5 gap-4 hover:cursor-pointer ">
          {items?.map((item: IPost, index: number) => {
            return (
              <div className=" h-[300px] hover:cursor-pointer hover:shadow-indigo-500/50 ng-[#fff] hover:shadow-lg  hover:-translate-y-1 hover:scale-10 p-1">
                <img
                  src={item.attachments[0].url}
                  alt=""
                  className="h-[170px] w-full  object-fit "
                />
                <div className="flex flex-row justify-between gap-3 items-center mt-2 ">
                  <p className="text-[14px] font-medium truncate-2-lines   ">
                    {item.title}
                  </p>
                  <MoreVertIcon />
                </div>
                <div className="mt-2 ">
                  <p className="text-[16px] font-bold text-[#D0021B] ">
                    {formatVND(item.price)} đ
                  </p>
                </div>
                <div className="flex flex-row gap-1 text-[12px] text-normal items-center mt-2 ">
                  <AddShoppingCartIcon />
                  <span>- {formatDate(item.createdAt)} -</span>
                  <span>Ha Noi</span>
                </div>
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
}
