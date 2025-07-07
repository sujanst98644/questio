"use server";

import { createClient } from "@/lib/supabase/server";
import { Post } from "@/types/types";

export const getPosts = async (): Promise<Post[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("questions")
    .select("*, users(name)") 
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch questions: " + error.message);
  }
  return data;
};
