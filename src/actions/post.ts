"use server";

import { createClient } from "@/lib/supabase/server";
import { CreatePost, Post } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import ImageKit from "imagekit";

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
    image_url: data.imageUrl || null,
  });
  if (error) {
    throw new Error("Failed to create question: " + error.message);
  }

  revalidatePath("/");
  redirect("/"); 
};

export const getPost = async (postId: string): Promise<Post> => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("questions")
    .select("*, users(username)")
    .eq("id", postId)
    .single();

  if (error || !data) {
    throw new Error(
      "Failed to fetch question: " + (error?.message ?? "Not found")
    );
  }

  return data;
};

export const getAnswers = async (postId: string) => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("answers")
    .select("*, users(username)")
    .eq("question_id", postId);

  return data;
};

export const createAnswer = async (postId: string, content: string) => {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (!user || userError) {
    throw new Error("Not authenticated");
  }

  const { error } = await supabase.from("answers").insert({
    question_id: postId,
    user_id: user.id,
    content,
  });

  if (error) {
    throw new Error("Failed to create question: " + error.message);
  }

  revalidatePath(`/post/${postId}`);
};


const imagekit = new ImageKit({
  publicKey: process.env.imagekit_public_key!,
  privateKey: process.env.imagekit_private_key!,
  urlEndpoint: process.env.URL_endpoint!,
});

interface UploadResult {
  url?: string;
  error?: string;
}

export async function postImage(file: Buffer | string, fileName: string): Promise<UploadResult> {
  try {
    const result: { url: string } = await imagekit.upload({
      file,
      fileName,
    });

    return { url: result.url };
  } catch (err) {
    return { error: "Upload failed" };
  }
}
