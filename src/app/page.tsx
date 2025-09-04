"use client";

import { UserPill } from "@privy-io/react-auth/ui";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="min-h-[8vh]">
        <div>Marketee</div>
        <UserPill action={{ type: "login" }} size={32} />
      </div>
      gm dharmin
    </div>
  );
}
