import NextAuth, { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [],
};

export default NextAuth(authOptions);
