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
import Link from "next/link";

export function UserMenu() {
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
          className="rounded-full px-2 py-2 outline"
          disabled={isPending}
        >
          <User />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href={"/profile"} className="flex">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isPending}
          className="text-red-600"
        >
          <LogOut className="w-4 h-4 mr-2 text-red-600 " />
          {isPending ? "Logging out..." : "Logout"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
