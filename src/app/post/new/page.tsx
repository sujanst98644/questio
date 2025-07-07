// app/create-question/page.tsx
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createPost } from "@/actions/post";

export default function CreateQuestionPage() {

  const [form, setForm] = useState({
    title: "",
    description: "",
    course: "CSIT",
    semester: 1,
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost(form);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Sample Input</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="title"
          placeholder="Question Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <Textarea
          name="description"
          placeholder="Write your question with **markdown** support..."
          rows={8}
          value={form.description}
          onChange={handleChange}
          required
        />

        <Input
          name="course"
          placeholder="Course (e.g. CSIT)"
          value={form.course}
          onChange={handleChange}
          required
        />
        <Input
          name="semester"
          type="number"
          placeholder="Semester"
          value={form.semester}
          onChange={handleChange}
          required
        />
        <Input
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <Button type="submit" className="bg-gray-900">Post Question</Button>
      </form>
    </div>
  );
}
