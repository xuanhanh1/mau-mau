import { IPost } from "@/interface/posts-interface";

export interface IPosts {
  lstPost: IPost[];
}
export default function Posts(props: IPosts) {
  return <div></div>;
}
