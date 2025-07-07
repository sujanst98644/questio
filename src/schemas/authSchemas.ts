import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
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

// Optional: Export the Type for usage in forms or actions
export type SignupFormValues = z.infer<typeof signupSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>
