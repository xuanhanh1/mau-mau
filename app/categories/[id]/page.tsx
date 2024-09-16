import PostsContent from "@/components/compoment-ui/posts";
import callApi from "@/API/configApi";
import CategoryContent from "@/components/compoment-ui/categories";
import { ICategories } from "@/interface/categories-interface";

export default async function Category({ params }: any) {
  let categoryDetail;
  let lstProducts;
  let lstPosts;

  await callApi(`api/categories/${params.id}`, "GET")
    .then(async (res) => {
      categoryDetail = res.data.data;
      await callApi(`api/productByCategoryId/${categoryDetail.id_old}`, "GET")
        .then((res) => {
          lstProducts = res.data.data;
        })
        .catch((err) => console.log(err));

      await callApi(`api/post/category/${categoryDetail.id_old}`, "GET")
        .then((res) => {
          lstPosts = res.data.data;
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  return (
    <CategoryContent
      category={categoryDetail}
      lstProducts={lstProducts}
      lstPosts={lstPosts}
    />
  );
}
