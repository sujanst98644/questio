"use client";
import { ChevronDown, ChevronDownIcon, ChevronsDown } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const posts = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  title: `What's your opinion on topic ${i + 1}?`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique, justo at fermentum varius, velit lorem suscipit ex, sit amet tincidunt elit est et justo.",
  author: `user${i + 1}`,
  time: `${i + 1} hours ago`,
}));

export default function Homepage() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="min-h-screen sm:px-6 py-4 flex flex-row">
      <div className="w-[70%] px-20">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex border rounded-full">
                Recent <ChevronDown />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {posts.map((post) => (
          <div key={post.id}>
            <div className=" my-2 p-5 space-y-2 hover:bg-gray-50 transition-colors rounded-lg">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Posted by /{post.author}</span>
                <span>{post.time}</span>
              </div>
              <h6 className="font-bold">{post.title}</h6>
              <span className="text-muted-foreground">{post.description}</span>
            </div>
            
            <div className="w-full bg-gray-300 h-[1px]"></div>
          </div>
        ))}
      </div>
      <div>
        <h5>Recent posts</h5>
      </div>
    </div>
  );
}
