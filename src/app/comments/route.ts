import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
 //getting the search parameters from the request

 const query = searchParams.get('query') //fetch specific query parameter
 const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments; //filtering comments based on the query parameter

 return Response.json(filteredComments); 

}

export async function POST(request: Request) {
	const comment = await request.json(); //getting the request body
	const newComment = { // creating a new comment object
		id: comments.length +1,
		text: comment.text,
	}
	comments.push(newComment); //adding the new comment to the comments array
	return new Response(JSON.stringify(newComment), { //returning the new comment as a json
		headers: { "Content-Type": "application/json" },
		status: 201,
	})
}
