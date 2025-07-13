// types.ts or inside your component file

export type User = {
  username: string;
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
  image_url?: string; // added this if it exists in your Supabase DB
  users?: User; 
  // This comes from Supabase relation
};



export type CreatePost = {
  title: string;
  description: string;
  course: string;
  semester: number;
  subject: string;
  imageUrl?: string; // added this line
};