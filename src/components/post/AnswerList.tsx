import AnswerItem from "./AnswerItem";

export default function AnswerList({ comments }: { comments: any[] }) {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-sm text-muted-foreground italic mt-4 text-center">
        No answers yet. Be the first to answer!
      </p>
    );
  }

  return (
    <div className="mt-4">
      {comments.map((c) => (
        <AnswerItem
          key={c.id}
          username={c.users?.username || "Anonymous"}
          content={c.content}
          createdAt={c.created_at}
        />
      ))}
    </div>
  );
}
