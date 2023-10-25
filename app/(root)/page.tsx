import type {NextRequest} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/(auth)/auth/[[...nextauth]]/route";

export default function Protected(req: NextRequest) {
	const session = getServerSession(authOptions)
	return (
		<main>
			{
				session ? (
					<h1>Hello</h1>
				) : (
					<h1>Goodbye</h1>
				)
			}
		</main>
	)
}
