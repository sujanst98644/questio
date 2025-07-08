import PostCard from "@/components/post/PostCard";
import { getAnswers, getPost } from "@/actions/post";
import AnswerList from "@/components/post/AnswerList";
import AnswerForm from "@/components/post/AnswerForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetail({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  const answers = await getAnswers(id);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <PostCard
        id={post.id}
        title={post.title}
        description={post.description}
        subject={post.subject}
        semester={post.semester}
        course={post.course}
        createdAt={post.created_at}
        authorName={post.users?.username || "Anonymous"}
      />

      <AnswerForm questionId={post.id} />

      <AnswerList comments={answers || []} />
    </div>
  );
}
