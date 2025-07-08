import React from "react";

type Props = {
  username: string;
  content: string;
  createdAt: string;
};

export default function AnswerItem({ username, content, createdAt }: Props) {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <div className="my-3 p-3 bg-gray-100 rounded-lg">
      <div className="text-sm text-gray-600 mb-1">
        u/{username} • {formattedDate}
      </div>
      <p>{content}</p>
    </div>
  );
}
