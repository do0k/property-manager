import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {db} from "@/app/lib/db";

export const authOptions: AuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
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
			authorize: async (credentials, req) => {
				if (credentials?.code && credentials.code !== "") {
					const user = await db.user.findUnique({
						where: {code: parseInt(credentials?.code)},
					});
					if (user) {
						return user as any;
					} else {
						return null;
					}
				} else {
					return null
				}
			}
		},)
	],
	session: {strategy: 'jwt'},
	pages: {
		signIn: '/signin',
		error: '/',
	}
}
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
