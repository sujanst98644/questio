"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createAnswer } from "@/actions/post";

export default function AnswerForm({ questionId }: { questionId: string }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      await createAnswer(questionId, text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <textarea
        className="w-full p-2 border rounded-md"
        rows={3}
        placeholder="What are your thoughts?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end">
        <Button type="submit" className="bg-black hover:bg-gray-700">
          Comment
        </Button>
      </div>
    </form>
  );
}
