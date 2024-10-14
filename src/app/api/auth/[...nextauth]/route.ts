import dbConnect from "@/lib/database/config";
import UserService from "@/lib/database/services/user.service";
import { verifyPassword } from "@/lib/helpers/password";
import { AuthUser } from "@/types";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as AuthUser;
      }
      return Promise.resolve(session);
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        await dbConnect();

        const user = await UserService.findUser({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("Email is not correct, please try again!");
        }

        const isValid = await verifyPassword(
          credentials?.password as string,
          user.password
        );

        if (!isValid) {
          throw new Error("Password isn't correct!");
        }

        return { email: user.email, id: user.id, name: user.name };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
