"use client";
import React, { useState } from "react";
import { ArrowUp, ArrowDown, MessageCircle, Image } from "lucide-react";

const post = {
  id: 1,
  title: "What do you think about Next.js 14?",
  content:
    "I've been using Next.js 14 for a couple weeks and it's honestly impressive. Server Actions and Partial Pre-rendering are game-changers. Curious what the community thinks.",
  author: "techguru",
  time: "5 hours ago",
  votes: 123,
};

const initialComments = [
  {
    id: 1,
    author: "dev_dude",
    content: "Agreed. Server actions save me so much time!",
    time: "2 hours ago",
  },
  {
    id: 2,
    author: "frontend_fox",
    content: "Still waiting for better docs on partial pre-rendering though.",
    time: "1 hour ago",
  },
];

export default function SinglePostPage() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: "current_user",
        content: newComment,
        time: "just now",
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen sm:px-6 py-4 flex flex-row space-x-20">
      <div className="w-[70%] px-20 space-y-6">
        {/* Post */}
        <div className="flex items-start gap-4 border rounded-md p-4 bg-white">
          {/* Post Content */}
          <div className="flex-1">
            <div className="text-sm text-gray-500 mb-1">
              Posted by u/{post.author} • {post.time}
            </div>
            <h5 className="text-xl font-semibold mb-2">{post.title}</h5>
            <p className="text-gray-800">{post.content}</p>

            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <MessageCircle className="w-4 h-4" />
              <span>{comments.length} Comments</span>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <form
          onSubmit={handleCommentSubmit}
          className=" border rounded-lg p-4 bg-white"
        >
          <textarea
            className="w-full rounded-md p-2 resize-none focus:outline-none"
            placeholder="What are your thoughts?"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-between mt-2">
            <Image />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
            >
              Comment
            </button>
          </div>
        </form>

        {/* Comment List */}
        <div className=" space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className=" p-3 ">
              <div className="text-sm mb-1">
                u/{comment.author} • {comment.time}
              </div>
              <p className="text-gray-800">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed right-0 rounded-lg w-[30%] flex flex-col items-start h-screen p-4 bg-gray-50">
        <h4>recent</h4>
      </div>
    </div>
  );
}
