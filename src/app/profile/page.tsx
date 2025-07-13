import { getCurrentUser } from "@/actions/auth";
import React from "react";
import { Button } from "@/components/ui/button";


import { AppWindowIcon, CodeIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


const ProfilePage = async () => {
  const { email, username, course, semester } = await getCurrentUser();

  // Dummy posts — replace with real data fetch later
  const posts = [
    { id: 1, title: "How to prepare for CSIT exams?", date: "2025-07-01" },
    { id: 2, title: "Best resources for Semester 3 subjects", date: "2025-06-22" },
  ];

  return (
    <div className="min-h-screen bg-muted py-10 px-4 md:px-16 w-full">
      {/* Header */}
      <div className="bg-background rounded-lg shadow-sm p-6 mb-6 border w-[70%]">
        <h3 className="text-2xl font-bold">@{username}</h3>
        <p className="text-sm text-muted-foreground">{email}</p>
        <div className="flex gap-4 mt-2 text-sm">
          <span className="bg-accent px-3 py-1 rounded-full">
            Course: {course}
          </span>
          <span className="bg-accent px-3 py-1 rounded-full">
            Semester: {semester}
          </span>
        </div>
      </div>
      <Tabs defaultValue="posts" className="w-[70%]">
      {/* Tabs (optional) */}
      <TabsList>
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="password">my password</TabsTrigger>
          <TabsTrigger value="changecredentials">my details</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    Posted on {new Date(post.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Add post content here */}
                  <p className="text-sm text-muted-foreground">
                    This is a brief description of the post.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    View Post
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        {/* Change Credentials Tab */}
        <TabsContent value="changecredentials">
          <Card>
            <CardHeader>
              <CardTitle>posts</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-username">Username</Label>
                <Input id="tabs-demo-username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Current password</Label>
                <Input id="tabs-demo-current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">New password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        </Tabs>
      {/* Posts List */}
      
    </div>
  );
};

export default ProfilePage;

