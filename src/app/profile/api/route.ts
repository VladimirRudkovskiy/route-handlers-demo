import { NextRequest } from "next/server";
import { headers } from "next/headers";


export async function GET(request: NextRequest) {
	// const requestHeaders = new Headers(request.headers); //extract the request headers
	// console.log(requestHeaders.get("Authorization")); //log the Authorization header

	const headersList = await headers();
	console.log(headersList.get("Authorization")); //log the Authorization header

	return new Response("<h1>Profile API data</h1>", {
		headers: {
			"Content-Type": "text-html",
		},
	})
}
