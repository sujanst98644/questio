// app/create-question/page.tsx
"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createPost, postImage } from "@/actions/post";

export default function CreateQuestionPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    course: "",
    semester: 1,
    subject: "",
    imageUrl: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const uploadImage = async (file: File) => {
    const reader = new FileReader();

    return new Promise<string>((resolve, reject) => {
      reader.onloadend = async () => {
        try {
          const {url} = await postImage(
             reader.result as string,
             file.name,
          )

          if (url) {
            resolve(url);
          } else {
            reject("Upload failed");
          }
        } catch (err) {
          reject(err);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = "";
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      await createPost({ ...form, imageUrl });
    } catch (error) {
      console.error("Failed to submit post:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen sm:px-6 py-4 flex flex-row w-full ">
      <div className="w-[70%] px-20 space-y-[20px]">
        <h3>Create post</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            aria-label="Course"
            name="course"
            placeholder="Course (e.g. CSIT)"
            value={form.course}
            onChange={handleChange}
            required
          />
          <div className="flex flex-row space-x-4">
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
          </div>
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
            name="file"
            type="file"
            accept="image/*"
            className="w-full max-w-xs"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="w-40 mt-2 rounded-md"
            />
          )}

          <Button variant="destructive" type="submit" className="">
            {uploading ? "Uploading..." : "Post Question"}
          </Button>
        </form>
      </div>
    </div>
  );
}
