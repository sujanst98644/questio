"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Post } from "@/types/types";
import PostCard from "./post/postcard";

interface HomepageProps {
  posts: Post[];
}

export default function Homepage({ posts }: HomepageProps) {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <div className="min-h-screen sm:px-6 py-4 flex flex-row max-w-[98%] ">
      <div className="w-[70%] px-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex border rounded-full">
              Recent <ChevronDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              solved only
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showActivityBar}
              onCheckedChange={setShowActivityBar}
              disabled
            >
              unsolved only
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            />
          </DropdownMenuContent>
        </DropdownMenu>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            subject={post.subject}
            semester={post.semester}
            course={post.course}
            createdAt={post.created_at}
            authorName={post.users?.username}
            imageUrl={post.image_url}
          />
        ))}
      </div>

      <div className="flex flex-col justify-between right-0 rounded-lg w-[30%] ">
        <div className="flex flex-col items-start p-4 bg-gray-50 rounded-2xl">
          <h5>Recent posts</h5>
        </div>
        <div className="p-4">
          <ul className="list-none p-0 space-y-1 text-sm font-normal grid grid-cols-3">
            <li className="hover:underline">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="hover:underline">
              <a href="#">User Agreement</a>
            </li>
            <li className="hover:underline">
              <a href="#">Accessibility</a>
            </li>
            <li className="hover:underline col-span-3">
              <a href="#">Reddit, Inc. © 2025. All rights reserved.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
