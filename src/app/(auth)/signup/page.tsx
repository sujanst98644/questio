"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";  
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  course: z.enum(["BSc. CSIT", "BIT", "Law"], {
    errorMap: () => ({ message: "Select a course" }),
  }),
  semester: z.enum(
    [
      "Semester 1",
      "Semester 2",
      "Semester 3",
      "Semester 4",
      "Semester 5",
      "Semester 6",
      "Semester 7",
      "Semester 8",
    ],
    {
      errorMap: () => ({ message: "Select a semester" }),
    }
  ),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormValues) => {
  setLoading(true);

  const { name, email, password, course, semester } = data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError || !authData.user) {
    console.error("Signup error:", authError?.message);
    setLoading(false);
    return;
  }

  const userId = authData.user.id;

  const { error: insertError } = await supabase.from("users").insert([
    {
      id: userId,
      name,
      course,
      semester,
    },
  ]);

  if (insertError) {
    console.error("Error inserting into users table:", insertError.message);
    setLoading(false);
    return;
  }
  router.push("/");
  setLoading(false);
};


  const courses = ["BSc. CSIT", "BIT", "Law"];
  const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-50 px-4">
      <Card className="p-8 space-y-2 rounded-2xl w-full max-w-md">
        <div className="text-center space-y-1">
          <h3>Create an account</h3>
          <p className="text-sm text-muted-foreground">Join the community and start posting</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 border rounded-md text-sm bg-white"
                    >
                      <option value="">Select Course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="semester"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Semester</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full px-3 py-2 border rounded-md text-sm bg-white"
                    >
                      <option value="">Select Semester</option>
                      {semesters.map((sem) => (
                        <option key={sem} value={sem}>
                          {sem}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-black hover:bg-gray-800" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline hover:text-black">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
}
