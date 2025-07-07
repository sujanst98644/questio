import React from "react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  subject: string;
  semester: string | number;
  course: string;
  createdAt?: string;
  user_id: string;
  authorName?: string; // optional, from joined user table
};

const PostCard = ({
  id,
  title,
  description,
  subject,
  course,
  semester,
  createdAt,
  user_id,
  authorName = "Unknown",
}: Props) => {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link href={`/post/${id}`}>
      <div className="my-1 p-5 space-y-2 hover:bg-gray-100 transition-colors rounded-lg">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Posted by /{authorName}</span>
          <span>{formattedDate}</span>
        </div>

        <h6 className="font-bold text-lg">{title}</h6>
        <p className="text-muted-foreground line-clamp-3">{description}</p>

        <div className="flex flex-wrap text-xs text-gray-500 gap-2 pt-2">
          <span className="bg-gray-200 px-2 py-1 rounded-full">{course}</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">Semester {semester}</span>
          <span className="bg-gray-200 px-2 py-1 rounded-full">{subject}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
