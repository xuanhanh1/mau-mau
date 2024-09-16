import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { IPost } from "@/interface/posts-interface";
import "./index.css";
import { formatVND, formatDate } from "../../common/format/format-number";
import InfiniteScroll from "react-infinite-scroll-component";
import callApi from "@/API/configApi";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import ContentScrollInfinite from "../content-scroll-infinite";

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
      await callApi(
        `api/post?limit=10&skip=${page * 10}&details=0`,
        "GET"
      ).then((res) => {
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

  return (
    <div className="max-w-[960px] mx-auto bg-[#fff] rounded-[4px] p-2 mt-1 drop-shadow-md mt-5">
      <p className="py-2 font-semibold text-[14px]  ">Dang tin moi</p>

      <ContentScrollInfinite lstPost={lstPost} api="api/post" />
    </div>
  );
}
