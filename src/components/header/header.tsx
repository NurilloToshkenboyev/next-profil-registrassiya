"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="p-[30px] bg-blue-400 flex justify-center gap-5">
      <Link href="/">Home</Link>
      {session && <Link href="/profile">Profile</Link>}
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
    </div>
  );
};
