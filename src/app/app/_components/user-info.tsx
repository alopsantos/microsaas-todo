"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
type Props = {
  user: Session["user"];
};
export function UserInfo({ user }: Props) {
  if (!user) return;
  return (
    <main className="flex w-full justify-center">
      <div className="flex w-full items-center bg-black py-2 max-w-5xl justify-between">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="text-white">{user.email}</div>
        <div>
          <Button onClick={() => signOut()}>Sair</Button>
        </div>
      </div>
    </main>
  );
}
