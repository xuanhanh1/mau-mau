import { IPost } from "@/interface/posts-interface";
import PostsContent from "@/components/compoment-ui/posts";
import callApi from "@/API/configApi";

export interface IPosts {
  postContent: IPost | {};
}

export default async function Posts({ params }: any) {
  let postDetail;
  await callApi(`api/post/${params.id}`, "GET")
    .then((res) => {
      postDetail = res.data.data;
    })
    .catch((err) => console.log(err));

  return <PostsContent data={postDetail} />;
}
