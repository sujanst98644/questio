"use client";

import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/actions/auth";
import { useTransition } from "react";

interface UserMenuProps {
  user: {
    email?: string;
  };
  userData?: {
    username: string;
    course: string;
    semester: string;
  };
}

export function UserMenu({ user, userData }: UserMenuProps) {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logout();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full px-4 py-2"
          disabled={isPending}
        >
          <User className="w-4 h-4 mr-2" />
          {userData?.username || user.email}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} disabled={isPending} className="text-red-600">
          <LogOut className="w-4 h-4 mr-2 text-red-600 " />
          {isPending ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
