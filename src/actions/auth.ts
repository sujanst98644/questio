"use server";
import { createClient } from "@/lib/supabase/server";
import { LoginFormValues, SignupFormValues } from "@/schemas/authSchemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signUp = async (data: SignupFormValues) => {
  const { username, email, password, course, semester } = data;

  const supabase = await createClient();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError || !authData.user) {
    return { error: authError?.message ?? "Signup failed" };
  }

  const userId = authData.user.id;

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: userId,
      username,
      course,
      semester,
    },
  ]);

  if (insertError) {
    return { error: insertError.message };
  }

  revalidatePath("/");
  redirect("/");
};

export async function login(formData: LoginFormValues) {
  const supabase = await createClient();

  const { email, password } = formData;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  redirect("/");
}

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user || error) {
    throw new Error("Not Authenticated!");
  }

  const { data: userData, error: userError } = await supabase
    .from("users")
    .select("username, course, semester")
    .eq("id", user.id)
    .single();

  if (userError) {
    throw new Error("Error: Getting User");
  }

  return { ...userData, email: user.email };
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/");
  redirect("/");
}
