// types.ts or inside your component file

export type User = {
  name: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  subject: string;
  semester: number | string;
  course: string;
  created_at?: string;
  user_id: string;
  users?: User; // This comes from Supabase relation
};



export type CreatePost = {
  title: string;
  description: string;
  course: string;
  semester: number;
  subject: string;
};