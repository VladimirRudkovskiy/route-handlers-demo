import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";


export async function GET(request: NextRequest) {
	// const requestHeaders = new Headers(request.headers); //extract the request headers
	// console.log(requestHeaders.get("Authorization")); //log the Authorization header

	const headersList = await headers();
	console.log(headersList.get("Authorization")); //log the Authorization header

	const theme = request.cookies.get('theme'); 
	console.log(theme);

	const cookieStore = await cookies();
	cookieStore.set('resultsPerPage', "20");
	console.log(cookieStore.get('resultsPerPage'));

	return new Response("<h1>Profile API data</h1>", {
		headers: {
			"Content-Type": "text-html",
			"Set-Cookie": "theme=dark",
		},
	})
}
