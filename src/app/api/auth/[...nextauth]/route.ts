import NextAuth from "next-auth/next";
import { authOptions } from "@/config/auth";

const hendler = NextAuth(authOptions);

export { hendler as GET, hendler as POST };
