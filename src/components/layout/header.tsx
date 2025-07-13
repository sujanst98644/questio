import { PlusIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { UserMenu } from "./user-menu";

const Header = async () => {


  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <header className="w-full bg-white px-5 py-2 flex flex-col items-center sticky top-0 border-b border-gray-400">
      <main className="w-full flex items-center justify-between">
        <div className="flex items-center w-[30%]">
          <Link className="" href="/">
          <div className="satoshi font-bold text-2xl">Questio</div>
          </Link>
        </div>

        <div className="flex-1 flex justify-between px-4 w-[70%]">
          <div className="w-full max-w-prose px-3 py-2 border  rounded-full flex gap-2 bg-slate-200">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search questions..."
              className="px-2 focus:outline-none w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link href={"/post/new"}>
              <div className="hover:bg-slate-200 text-black px-4 py-2 rounded-full transition font-medium flex flex-row gap-1">
                <PlusIcon className="stroke-1"/> Post
              </div>
            </Link>

            {data.user ? (<Link href="/profile">
            <UserMenu />
            </Link>
              
            ) : (
              <Link href="/login">
                <Button variant="destructive">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
