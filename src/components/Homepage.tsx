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
import PostCard from "./post/PostCard";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const sampleQuestions = [
  {
    id: "1",
    title: "What is the role of physics in computing?",
    description:
      "Let’s discuss how fundamental physics supports computing. **Markdown** works here.",
    subject: "Physics",
    semester: 1,
    course: "CSIT",
    created_at: "2025-07-07T10:00:00Z",
    user_id: "e0e15cfe-2d3b-49bf-bc1c-5180295ae01d",
    users: {
      full_name: "Sudarshan Pokhrel",
    },
  },
  {
    id: "2",
    title: "Why is Discrete Mathematics important for CS?",
    description:
      "Explain the significance of sets, logic, and relations in computing.",
    subject: "Discrete Mathematics",
    semester: 2,
    course: "CSIT",
    created_at: "2025-07-06T08:30:00Z",
    user_id: "e0e15cfe-2d3b-49bf-bc1c-5180295ae01d",
    users: {
      full_name: "Sudarshan Pokhrel",
    },
  },
];

export default function Homepage() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="min-h-screen sm:px-6 py-4 flex flex-row max-w-[98%] ">
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
              ></DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {sampleQuestions.map((q) => (
          <PostCard
            key={q.id}
            id={q.id}
            title={q.title}
            description={q.description}
            subject={q.subject}
            semester={q.semester}
            course={q.course}
            createdAt={q.created_at}
            user_id={q.user_id}
            authorName={q.users.full_name}
          />
        ))}
      </div>
      <div className=" flex flex-col justify-between right-0 rounded-lg w-[30%] ">
        <div className="flex flex-col items-start p-4 bg-gray-50 rounded-2xl">
          <h5>Recent posts</h5>
        </div>
        <div className="p-4">
          <ul className="list-none p-0 space-y-1 text-sm font-normal grid grid-cols-3">
            <li className="hover:underline">
              <a href="#" className="">
                Privacy Policy
              </a>
            </li>
            <li className="hover:underline">
              <a href="#" className="">
                User Agreement
              </a>
            </li>
            <li className="hover:underline">
              <a href="#" className="">
                Accessibility
              </a>
            </li>
            <li className="hover:underline col-span-3">
              <a href="#" className="">
                Reddit, Inc. © 2025. All rights reserved.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
