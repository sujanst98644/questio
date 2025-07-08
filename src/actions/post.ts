"use server";

import { createClient } from "@/lib/supabase/server";
import { CreatePost, Post } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getPosts = async (): Promise<Post[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("questions")
    .select("*, users(username)")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch questions: " + error.message);
  }
  return data;
};

export const createPost = async (data: CreatePost) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase.from("questions").insert({
    user_id: user.id,
    title: data.title,
    description: data.description,
    course: data.course,
    semester: data.semester,
    subject: data.subject,
  });
  if (error) {
    throw new Error("Failed to create question: " + error.message);
  }

  revalidatePath("/"); // or "/questions"
  redirect("/"); // or wherever you list questions
};
