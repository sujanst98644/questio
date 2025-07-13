import PostCard from "@/components/post/postcard";
import { getAnswers, getPost } from "@/actions/post";
import AnswerList from "@/components/post/AnswerList";
import AnswerForm from "@/components/post/AnswerForm";
import SinglePost from "@/components/post/SinglePost";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  const answers = await getAnswers(id);

  return (
    <div className="min-h-screen py-10 w-full">
      <div className="w-[70%] px-20 space-y-[20px]">
        <SinglePost
        id={post.id}
        title={post.title}
        description={post.description}
        subject={post.subject}
        semester={post.semester}
        course={post.course}
        createdAt={post.created_at}
        authorName={post.users?.username || "Anonymous"}
        imageUrl={post.image_url}
      />

      <AnswerForm questionId={post.id} />

      <AnswerList comments={answers || []} />
      </div>
      
    </div>
  );
}
