import Image from "next/image";
import callApi from "@/API/configApi";
import HomePage from "@/app/home/page";
import { IPost } from "@/interface/posts-interface";

export default async function Home() {
  let lstPost: any;
  await callApi("api/post?limit=10&skip=0&details=0", "GET")
    .then((res) => {
      lstPost = res.data.data;
    })
    .catch((err) => console.log(err));
  return <HomePage lstPost={lstPost} />;
}
