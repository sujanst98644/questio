// app/page.tsx or wherever
import { Post } from "@/types/types";
import Homepage from "../components/Homepage";
import { getPosts } from "@/actions/post";

export default async function Home() {
  const posts: Post[] = await getPosts();

  return <Homepage posts={posts} />;
}
