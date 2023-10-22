import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/app/lib/db";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "OTPLogin",
      credentials: {
        code: {
          label: "کدملی",
          placeholder: "لطفا کدملی خود را وارد نمایید",
          type: "text",
        },
        otp: {
          label: "otp",
          type: "text",
        },
      },
      async authorize(credentials, req) {
        if (credentials?.code && credentials.code !== "") {
          const user = await db.user.findUnique({
            where: { code: parseInt(credentials?.code) },
          });
          if (user) {
            return user;
          } else {
            return null;
          }
        } else {
          return null
        }
      },
    }),
  ],
});
