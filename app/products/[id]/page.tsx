import { IPost } from "@/interface/posts-interface";
import PostsContent from "@/components/compoment-ui/posts";
import callApi from "@/API/configApi";
import ProductsContent from "@/components/compoment-ui/products";

export interface IPosts {
  postContent: IPost | {};
}

export default async function Products({ params }: any) {
  let lstPosts;
  await callApi(`ap/post/product/${params.id}`, "GET")
    .then((res) => {
      console.log("res", res.data.data);

      lstPosts = res.data.data;
    })
    .catch((err) => console.log(err));

  return <ProductsContent data={lstPosts} />;
}
