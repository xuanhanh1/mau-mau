import Image from "next/image";
import callApi from "@/API/configApi";
import Home from "@/app/home/page";
import { IPost } from "@/interface/posts-interface";

export default async function HomePage() {
  let lstPost: IPost[] = [];
  await callApi("api/post?limit=10&skip=0&details=0", "GET")
    .then((res) => {
      lstPost = res.data.data;
    })
    .catch((err) => console.log(err));
  return <Home lstPost={lstPost} />;
}
